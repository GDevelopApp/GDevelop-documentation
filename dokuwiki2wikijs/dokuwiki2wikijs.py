#! /usr/bin/env python3

import os
import sys
from zipfile import ZipFile
from os.path import basename
from shutil import rmtree, copyfile, copytree
import subprocess
import re


tmp_prefix = os.path.join("/tmp", "dokuwiki2wikijs")


def pandoc(infile):
    result = subprocess.run(
        ["pandoc", "-f", "dokuwiki", "-t", "gfm-raw_html", "--wrap=none", infile],
        stdout=subprocess.PIPE,
    )
    if len(result.stdout) == 0:
        raise ValueError(
            "Pandoc returned no output for file `%s`. This usually means that Pandoc encountered a syntax error in the input file and crashed. Try running `pandoc -f dokuwiki -t markdown_mmd --wrap=none AFFECTED_FILE` on the affected file to see if there is a syntax error."
            % infile
        )
    return result.stdout.decode("utf-8")


def first_heading_or_filename(lines, pagename):
    if lines[0][0] == "#":
        title = lines[0].partition(" ")[2].strip()
    else:
        title = pagename
    return title


def get_metadata(lines, pagename):
    # We surround the title with quotes to ensure Wiki.js can import it.
    # Wiki.js requires a string and some possible titles are not considered
    # strings (e.g. dates)
    return {"title": first_heading_or_filename(lines, pagename).replace(': ', " - ")}


def starts_with_text(line):
    # Empty line -> no
    if len(line.strip()) == 0:
        return False
    # Letters and quote -> yes
    if line[0].isalpha() or line[0] == '"':
        return True
    # Numeric list marker -> no
    if re.match(r"^[0-9]+\. ", line):
        return False
    return False


def unwrap_sentences(lines):
    # pandoc wraps markdown paragraphs however the input was formatted,
    # so unwrap it according to markdown/asciidoc conventions (one sentence
    # per line).
    result = []
    compacted_lines = []
    doing_compacting = False
    compacted_line = ""

    for line in lines:
        if not doing_compacting:
            if len(line) > 0 and line[-1] != ".":
                doing_compacting = True
                compacted_line = line
            else:
                compacted_lines.append(line)
        else:
            if starts_with_text(line):
                compacted_line = compacted_line + " " + line
            else:
                compacted_lines.append(compacted_line)
                compacted_lines.append(line)
                compacted_line = ""
                doing_compacting = False
    if compacted_line != "":
        compacted_lines.append(compacted_line)
    for line in compacted_lines:
        while ". " in line:
            line1, line = line.split(". ", 1)
            result.append(line1 + ".")
        result.append(line)
    return result


def get_link_regex():
    return r"(\[\[|\{\{)(?P<uri>[^\|]+?)(\|(?P<text>.+?)?)?(\]\]|\}\})"


def find_next_link_start(line, pos):
    match = re.search(get_link_regex(), line[pos:])
    if match:
        return match.start()
    else:
        return -1


def clean_image_url(url):
    parts = url.split("?")
    return parts[0]


def get_text_from_uri(uri):
    if uri.startswith("http://") or uri.startswith("https://"):
        return uri
    elif uri.startswith("youtube>"):
        return uri

    text = uri.split("/")[-1] if "/" in uri else uri.split(":")[-1]
    return text.replace("-", " ").replace("_", " ")


def convert_links(lines):
    for i, line in enumerate(lines):
        pos = find_next_link_start(line, 0)
        while pos != -1:
            pattern = get_link_regex()
            match = re.search(pattern, line[pos:])
            if match:
                text = match.group("text")
                uri = match.group("uri").rstrip("|").strip()
                if not uri.startswith("http"):
                    uri = uri.replace(":", "/")

                is_image = (
                    ".png" in uri or ".jpg" in uri or ".jpeg" in uri or ".gif" in uri
                )

                if not text:
                    text = get_text_from_uri(uri) if not is_image else ""
                text = text.strip()

                # Ensure internal uri starts at the root
                if not uri.startswith("http") and not uri.startswith("/"):
                    uri = "/" + uri
                link = (
                    "![%s](%s)" % (text, clean_image_url(uri))
                    if is_image
                    else "[%s](%s)" % (text, uri)
                )
                line = re.sub(pattern, link, line, count=1)
            else:
                raise RuntimeError(
                    "Link found but could not be then replaced in" + line
                )
            pos = find_next_link_start(line, pos)
        lines[i] = line
    return lines


def fix_order_of_image_and_link(lines):
    def fix_link(m):
        image_uri = m.group(1)
        link = m.group(2)

        if link.startswith("/gdevelop5"):
            temp = image_uri
            image_uri = link
            link = temp

        return "[![](%s)](%s)" % (image_uri, link)

    for i, line in enumerate(lines):
        line = re.sub(r"\[\!\[\]\(([^\)]+)\)\]\(([^\)]+)\)", fix_link, line)
        lines[i] = line

    return lines


def wrap_kind(tag):
    words = tag.split(" ")
    if "info" in words or "notice" in words or "tip" in words:
        return "tip"
    if "important" in words:
        return "warning"
    if (
        "alert" in words
        or "danger" in words
        or "warning" in words
        or "caution" in words
    ):
        return "danger"
    if "help" in words or "todo" in words:
        return "info"
    if "safety" in words or "danger" in words:
        return "danger"
    return ""


def convert_wrap(lines):
    kind = "{.is-info}"
    wrapping = False
    for i, line in enumerate(lines):
        # This might be a pandoc'ed markdown in which case tags are escaped
        if line.startswith("<WRAP") or line.startswith("\<WRAP"):
            tag, line = line.split(">", 1)
            kind = wrap_kind(tag)
            lines[i] = "> " + line
            wrapping = True
        if "</WRAP>" in line:
            lines[i] = lines[i].replace("</WRAP>", kind)
            wrapping = False
        if "\</WRAP\>" in line:
            lines[i] = lines[i].replace("\</WRAP\>", kind)
            wrapping = False
        if wrapping:
            lines[i] = "> " + line
    return lines


def convert_note(lines):
    kind = "note"
    wrapping = False
    for i, line in enumerate(lines):
        # This might be a pandoc'ed markdown in which case tags are escaped
        if line.startswith("<note") or line.startswith("\<note"):
            tag, line = line.split(">", 1)
            kind = wrap_kind(tag)
            if kind == "":
                kind = "note"
            lines[i] = "!!! " + kind
            lines.insert(i + 1, "")
            lines.insert(i + 2, "    " + line)
            i = i + 2
            wrapping = True
        if "</note>" in line:
            needs_padding = not lines[i].startswith("    ")
            lines[i] = ("    " if needs_padding else "") + lines[i].replace(
                "</note>", ""
            )
            wrapping = False
        if "\</note\>" in line:
            needs_padding = not lines[i].startswith("    ")
            lines[i] = ("    " if needs_padding else "") + lines[i].replace(
                "\</note\>", ""
            )
            wrapping = False
        if wrapping:
            lines[i] = "    " + line
    return lines


def convert_code(lines):
    def get_language(tag):
        words = tag.split(" ")
        if "javascript" in words or "js" in words:
            return "javascript"
        return ""

    new_lines = []
    for i, line in enumerate(lines):
        if line.startswith("<code"):
            tag, line = line.split(">", 1)
            new_lines.append("```" + get_language(tag))
            if len(line.strip()) > 0:
                if "</code>" in line:
                    new_lines.append(line.replace("</code>", ""))
                    new_lines.append("```")
                else:
                    new_lines.append(line)
        else:
            if "</code>" in line:
                new_lines.append(line.replace("</code>", "```"))
            else:
                new_lines.append(line)

    return new_lines


def convert_line_breaks(lines):
    new_lines = []
    for i, line in enumerate(lines):
        if line.endswith("\\\\"):
            new_lines.append(line.replace("\\\\", "  "))
        elif line.endswith("\\\\ "):
            new_lines.append(line.replace("\\\\ ", "  "))
        elif line.endswith("\\\\  "):
            new_lines.append(line.replace("\\\\  ", "  "))
        elif line.endswith("\\\\ \\\\ "):
            new_lines.append(line.replace("\\\\ \\\\ ", "  "))
        elif line.endswith("\\\\ \\\\  "):
            new_lines.append(line.replace("\\\\ \\\\  ", "  "))
        else:
            new_lines.append(line)
    return new_lines


def fix_wrongly_escaped_characters(lines):
    new_lines = []
    for i, line in enumerate(lines):
        line = re.sub(r"\\\*\\\* +", "**", line)
        line = re.sub(r" +\\\*\\\*", "**", line)

        if line.startswith("\\#"):
            line = line.replace("\\#", "#")

        line = (
            line.replace("\\\\\\_", "_")
            # Less specific fixes then:
            .replace("\\_", "_")
            .replace("\\*", "*")
            .replace("\\-", "-")
            .replace("\\`", "`")
            .replace("'''", "`")  # Somehow this appears in some docs
            .replace("''", "`")  # Somehow this appears in some docs
        )
        new_lines.append(line)

    return new_lines


def fix_dokuwiki_headings_to_markdown(lines):
    new_lines = []
    for i, line in enumerate(lines):
        if line.startswith("=======") and line.endswith("======="):
            new_lines.append("# " + line.replace("=", ""))
        elif line.startswith("======") and line.endswith("======"):
            new_lines.append("## " + line.replace("=", ""))
        elif line.startswith("=====") and line.endswith("====="):
            new_lines.append("### " + line.replace("=", ""))
        elif line.startswith("===") and line.endswith("==="):
            new_lines.append("#### " + line.replace("=", ""))
        else:
            new_lines.append(line)
    return new_lines


def add_buttons_for_gdevelop_webapp(lines):
    for i, line in enumerate(lines):
        match = re.match(
            r"^\* \[[^\]]+\]\((https\:\/\/editor\.gdevelop\.io\/\?project[^\)]+)\)",
            line,
        )
        if line.startswith("* https://editor.gdevelop.io/?project="):
            link = line.replace("* ", "")
            lines[i] = (
                "[Open example in GDevelop](%s){ .md-button .md-button--primary }"
                % link
            )
        elif line.startswith("* https://editor.gdevelop-app.com/?project="):
            link = line.replace("* ", "").replace("gdevelop-app.com", "gdevelop.io")
            lines[i] = (
                "[Open example in GDevelop](%s){ .md-button .md-button--primary }"
                % link
            )
        elif line.startswith("* <https://editor.gdevelop.io/?project="):
            link = line.replace("* <", "").replace(">", "")
            lines[i] = (
                "[Open example in GDevelop](%s){ .md-button .md-button--primary }"
                % link
            )
        elif line.startswith("* <https://editor.gdevelop-app.com/?project="):
            link = (
                line.replace("* <", "")
                .replace(">", "")
                .replace("gdevelop-app.com", "gdevelop.io")
            )
            lines[i] = (
                "[Open example in GDevelop](%s){ .md-button .md-button--primary }"
                % link
            )
        elif match:
            lines[i] = (
                "[Open example in GDevelop](%s){ .md-button .md-button--primary }"
                % match.group(1)
            )
    return lines


def add_metadata(lines, metadata):
    lines.insert(0, "---")
    for key, value in metadata.items():
        lines.insert(1, key + ": " + value)
    lines.insert(len(metadata) + 1, "---")


def convert_filename_to_unicode(line):
    # Only handles the ones we needed...
    line = line.replace("%C3%84", "Ä")
    line = line.replace("%C3%85", "Å")
    line = line.replace("%C3%89", "É")
    line = line.replace("%C3%96", "Ö")
    line = line.replace("%C3%A4", "ä")
    line = line.replace("%C3%A5", "å")
    line = line.replace("%C3%A9", "é")
    line = line.replace("%C3%B6", "ö")
    return line


def ensure_path_exists(path):
    directory = os.path.dirname(path)
    if not os.path.exists(directory):
        os.makedirs(directory)


def is_markdown(filename):
    with open(filename, "r", encoding="utf-8") as f:
        first_line = f.readline()
    return first_line[0] == "#"


def read_users(path):
    users_file = os.path.join(path, "conf", "users.auth.php")
    with open(users_file, "r") as f:
        for line in f:
            if not line.startswith("#") and len(line) > 1:
                userparts = line.split(":")
                assert len(userparts) == 5
                users[userparts[0]] = {"name": userparts[2], "email": userparts[3]}


def remove_useless_tags(lines):
    new_lines = []
    for line in lines:
        line = line.replace("\\<sortable\\>", "")
        line = line.replace("\\</sortable\\>", "")
        new_lines.append(line)
    return new_lines


def fix_bad_numbering(lines):
    new_lines = []
    for line in lines:
        line = line.replace("- 1\\.", "1.")
        line = line.replace("- 2\\.", "2.")
        line = line.replace("- 3\\.", "3.")
        line = line.replace("- 4\\.", "4.")
        line = line.replace("- 5\\.", "5.")
        line = re.sub(r"^\s*\* [0-9]\.", "  * ", line)
        line = line.replace("1.  1\\.", "1.")
        line = line.replace("1.  2\\.", "2.")
        line = line.replace("1.  3\\.", "3.")
        line = line.replace("1.  4\\.", "4.")
        new_lines.append(line)
    return new_lines


def replace_youtube_links_by_iframes(lines):
    def make_replacement(m):
        return (
            '<iframe width="640" height="360" src="https://www.youtube.com/embed/%s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            % m.group(1)
        )

    new_lines = []
    for i, line in enumerate(lines):
        line = re.sub(
            r"\[youtube\>([^?\]]+)(\?medium)?\]\(\/youtube>([^?\]]+)(\?medium)?\)",
            make_replacement,
            line,
        )

        new_lines.append(line)

    return new_lines


def replace_old_italics_by_markdown_italics(lines):
    def make_replacement(m):
        return "_%s_" % m.group(1).strip()

    new_lines = []
    for i, line in enumerate(lines):
        line = re.sub(
            r"\/\/([\w\s\.\-0-9\!\?\(\)]+)\/\/",
            make_replacement,
            line,
        )

        new_lines.append(line)

    return new_lines


def fix_wrong_bold_markers(lines):
    def make_replacement(m):
        return " **%s** " % m.group(1).strip()

    new_lines = []
    for i, line in enumerate(lines):
        line = re.sub(
            r" \*\* ([\w\s]+)\*\* ",
            make_replacement,
            line,
        )
        line = re.sub(
            r" \*\*([\w\s]+) \*\* ",
            make_replacement,
            line,
        )

        new_lines.append(line)

    return new_lines


def fix_lists_needing_extra_spacing(lines):
    new_lines = []
    last_line_was_list = False
    last_line_was_spacing = False
    for i, line in enumerate(lines):
        trimmed_line = line.strip()
        is_list = trimmed_line.startswith("- ") or trimmed_line.startswith("* ")
        is_top_level_list = line.startswith("- ") or line.startswith("* ")
        is_spacing = len(trimmed_line) == 0

        if is_list:
            if last_line_was_list:
                # We continue a list, all good.
                pass
            elif last_line_was_spacing:
                # We continue a list or start one after spacing, which is safe
                # even if the list if not a proper top level list.
                pass
            elif is_top_level_list:
                # We start a list, but it's top level so properly handled (even
                # if no spacing before).
                pass
            else:
                # We start a list, but it's not a top level list and there was no spacing before.
                # Add spacing:
                new_lines.append("")

        last_line_was_list = is_list
        last_line_was_spacing = is_spacing
        new_lines.append(line)

    return new_lines


def fix_lists_on_same_line(lines):
    new_lines = []
    for i, line in enumerate(lines):
        match = re.match(r"^(\* [^\*]+) \* ", line)
        dash_match = re.match(r"^(- [^-]+) - ", line)
        if match:
            splitted_line = line.split(" * ")
            for split in splitted_line:
                new_lines.append(split if split.startswith("* ") else "* " + split)
        elif dash_match:
            splitted_line = line.split(" - ")
            # Only split the line if more than 2 items, for safety. Dashes can be used as a punctuation.
            if len(splitted_line) > 2:
                for split in splitted_line:
                    new_lines.append(split if split.startswith("- ") else "- " + split)
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)

    return new_lines


def scan_used_media(lines):
    used_media = set()
    for i, line in enumerate(lines):
        images = re.findall(r"[^\s\(\)\[\]]+\.(?:png|gif|jpeg|jpg|zip|rar|mp4)", line)
        for image in images:
            used_media.add(image)

    return used_media


def convert_file(txtfile, title):
    if is_markdown(txtfile):
        with open(txtfile) as file:
            lines = file.read().splitlines()
        lines = convert_links(lines)
    else:
        lines = str(pandoc(txtfile)).split("\n")
    lines = remove_useless_tags(lines)
    lines = convert_wrap(lines)
    lines = convert_note(lines)
    lines = convert_code(lines)
    lines = convert_line_breaks(lines)
    lines = fix_wrongly_escaped_characters(lines)
    lines = fix_dokuwiki_headings_to_markdown(lines)
    lines = fix_bad_numbering(lines)
    lines = replace_youtube_links_by_iframes(lines)
    lines = replace_old_italics_by_markdown_italics(lines)
    lines = fix_wrong_bold_markers(lines)
    lines = fix_lists_needing_extra_spacing(lines)
    lines = fix_lists_on_same_line(lines)
    lines = fix_order_of_image_and_link(lines)
    lines = add_buttons_for_gdevelop_webapp(lines)
    # lines = unwrap_sentences(lines)
    metadata = get_metadata(lines, title)
    add_metadata(lines, metadata)

    used_media = scan_used_media(lines)

    return lines, used_media


def temporary_file_for(pathname):
    parts = pathname.split(os.sep)
    temporary = os.path.join(tmp_prefix, *parts[parts.index("data") :])
    return temporary


ignored_page_names = [
    "sidebar",
    "topnav",
    "changes",
    "changesfr",
    "list",
    "base_object",
    "iap",
    "android_and_ios_with_cocos2d-js",
    "ubuntu-touch-packaging"
]
ignored_folder_names = ["gdevelop5/objects/base_object"]


def collect_and_convert_all_pages():
    root_path = os.path.join(path, "data", "pages")

    all_folders = set()
    for folder, _, files in os.walk(root_path):
        folder_relative_path = os.path.relpath(folder, root_path)
        all_folders.add(folder_relative_path)

    # Convert pages and collect used media in them
    all_used_media = set()
    for folder, _, files in os.walk(root_path):
        txt_files = (file for file in files if file.endswith(".txt"))
        folder_relative_path = os.path.relpath(folder, root_path)

        if folder_relative_path in ignored_folder_names:
            continue

        for f in txt_files:
            filename_with_txt = os.path.join(folder, f)
            filename = temporary_file_for(
                convert_filename_to_unicode(filename_with_txt[:-4])
            )
            basename = os.path.basename(filename)
            ensure_path_exists(filename)

            if basename in ignored_page_names:
                continue

            print(filename_with_txt + "(" + basename + ")... ", end="", flush=True)

            (lines, used_media) = convert_file(filename_with_txt, basename)

            for media in used_media:
                if media.startswith("/"):
                    # The media is already absolute to the root path, we can use it as is.
                    all_used_media.add(media)
                else:
                    # The path to the media is relative to the folder of the file, make
                    # it absolute to the root path.
                    all_used_media.add("/" + os.path.join(folder_relative_path, media))

            # Compute the name of the output file.
            filename_with_md = os.path.join(tmp_prefix, filename + ".md")
            if basename == "start":
                filename_with_md = filename_with_md.replace("start.md", "index.md")
            elif os.path.join(folder_relative_path, basename) in all_folders:
                # The file has the same name as a folder, it is the index file of this section.
                filename_with_md = temporary_file_for(
                    os.path.join(folder, basename, "index.md")
                )
                ensure_path_exists(filename_with_md)
                print("Moved index file of a section: " + filename_with_md)

            with open(filename_with_md, "w", encoding="utf-8") as file:
                file.writelines("\n".join(lines))

            print(len(lines), "lines,", len(used_media), "medias.")

    return all_used_media


def collect_all_media(all_used_media):
    copied_files_count = 0
    root_path = os.path.join(path, "data", "media")
    for folder, _, media_files in os.walk(root_path):
        for f in media_files:
            media_file = os.path.join(folder, f)
            media_absolute_path_to_root = "/" + os.path.relpath(media_file, root_path)

            if media_absolute_path_to_root not in all_used_media:
                print("Ignore unused media: " + media_absolute_path_to_root)
                continue

            filename = temporary_file_for(convert_filename_to_unicode(media_file))
            filename = filename.replace("media", "pages")
            ensure_path_exists(filename)
            copyfile(media_file, filename)
            copied_files_count = copied_files_count + 1

    print(str(copied_files_count) + " files copied.")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: %s <input file or folder> <output file or folder>" % sys.argv[0])
        sys.exit(1)

    path = sys.argv[1]
    out_path = sys.argv[2]
    if not os.path.exists(path):
        print("'%s' doesn't exist" % path)
        sys.exit(1)

    if os.path.isfile(path):
        lines = convert_file(path, path)
        print("\n".join(lines))
    else:
        if not os.path.exists(os.path.join(path, "data", "pages")):
            print(
                "The folder given as argument should be at the root of a dokuwiki installation or copy"
            )
            sys.exit(-1)

        users = {}
        # read_users(path)

        rmtree(tmp_prefix, ignore_errors=True)
        os.makedirs(tmp_prefix)

        all_used_media = collect_and_convert_all_pages()
        collect_all_media(all_used_media)

        print("Copying... ", end="", flush=True)
        os.makedirs(out_path, exist_ok=True)
        copytree(
            os.path.join(tmp_prefix, "data", "pages"), out_path, dirs_exist_ok=True
        )

        print("done")
