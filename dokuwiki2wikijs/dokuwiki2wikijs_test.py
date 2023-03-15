import unittest

from dokuwiki2wikijs import first_heading_or_filename, convert_filename_to_unicode, convert_wrap, convert_note, convert_code, convert_line_breaks, unwrap_sentences, convert_links

IS_INFO = "{.is-info}"


class Dokuwiki2WikijsTest(unittest.TestCase):

    def test_get_title(self):
        lines = ["# Title"]
        self.assertEqual(first_heading_or_filename(lines, ""), "Title")

        lines = ["# Title with spaces"]
        self.assertEqual(first_heading_or_filename(
            lines, ""), "Title with spaces")

        lines = ["some other text on the first line"]
        self.assertEqual(first_heading_or_filename(
            lines, "Some other title"), "Some other title")

    def test_convert_to_unicode(self):
        self.assertEqual(convert_filename_to_unicode(
            "a%C3%96bcdef"), "aÖbcdef")
        self.assertEqual(convert_filename_to_unicode(
            "abc%C3%B6def"), "abcödef")
        self.assertEqual(convert_filename_to_unicode(
            "a%C3%B6bcdef"), "aöbcdef")

    def test_convert_code_can_pass_through(self):
        lines = ["no CODE here"]
        self.assertEqual(convert_code(lines), ["no CODE here"])

    def test_convert_code_empty_javascript_code(self):
        lines = ["test", "<code javascript>", "</code>"]
        self.assertEqual(convert_code(lines), ["test", "```js", "```"])

    def test_convert_code_empty_code(self):
        lines = ["test", "<code>", "</code>"]
        self.assertEqual(convert_code(lines), ["test", "```", "```"])

    def test_convert_code_some_code(self):
        lines = ["test", "<code>", "123", "456", "</code>"]
        self.assertEqual(convert_code(lines), ["test", "```", "123", "456", "```"])

    def test_convert_code_first_line_with_code(self):
        lines = ["test", "<code>123", "456", "</code>"]
        self.assertEqual(convert_code(lines), ["test", "```", "123", "456", "```"])

    def test_convert_code_inline_code(self):
        lines = ["test", "<code>123 456</code>"]
        self.assertEqual(convert_code(lines), ["test", "```", "123 456", "```"])

    def test_convert_line_breaks(self):
        lines = ["test", "**Test 2**\\\\", "test3"]
        self.assertEqual(convert_line_breaks(lines), ["test", "**Test 2**  ", "test3"])

    # WRAP:
    def test_convert_wrap_can_pass_through(self):
        lines = ["no WRAP here"]
        self.assertEqual(convert_wrap(lines), ["no WRAP here"])

    def test_convert_simple_wrap_on_separate_first_lines(self):
        lines = ["<WRAP>", "</WRAP>"]
        self.assertEqual(convert_wrap(lines), ["> ", ""])

    def test_converts_info_wrap_to_is_info(self):
        lines = ["<WRAP info>", "</WRAP>"]
        self.assertEqual(convert_wrap(lines), ["> ", IS_INFO])

    def test_convert_simple_wrap_on_separate_lines(self):
        lines = ["", "<WRAP>", "</WRAP>"]
        self.assertEqual(convert_wrap(lines), ["", "> ", ""])

    def test_convert_simple_alert_wrap_on_separate_lines(self):
        lines = ["", "<WRAP alert>", "</WRAP>"]
        self.assertEqual(convert_wrap(lines), ["", "> ", "{.is-danger}"])

    def test_convert_wrap_on_separate_line(self):
        lines = ["<WRAP>", "two line wrap", "</WRAP>"]
        self.assertEqual(convert_wrap(lines), [
            "> ", "> two line wrap", ""])

    def test_convert_wrap_on_one_line(self):
        lines = ["<WRAP>one line wrap</WRAP>"]
        self.assertEqual(convert_wrap(lines), ["> one line wrap"])

    # Notes (similar as wrap):
    def test_convert_note_can_pass_through(self):
        lines = ["no note here"]
        self.assertEqual(convert_note(lines), ["no note here"])

    def test_convert_simple_note_on_separate_first_lines(self):
        lines = ["<note>", "</note>"]
        self.assertEqual(convert_note(lines), ["> ", IS_INFO])

    def test_converts_info_note_to_is_info(self):
        lines = ["<note tip>", "</note>"]
        self.assertEqual(convert_note(lines), ["> ", IS_INFO])

    def test_convert_simple_note_on_separate_lines(self):
        lines = ["", "<note>", "</note>"]
        self.assertEqual(convert_note(lines), ["", "> ", IS_INFO])

    def test_convert_simple_alert_note_on_separate_lines(self):
        lines = ["", "<note alert>", "</note>"]
        self.assertEqual(convert_note(lines), ["", "> ", "{.is-danger}"])

    def test_convert_note_on_separate_line(self):
        lines = ["<note>", "two line note", "</note>"]
        self.assertEqual(convert_note(lines), [
            "> ", "> two line note", IS_INFO])

    def test_convert_note_on_one_line(self):
        lines = ["<note>one line note</note>"]
        self.assertEqual(convert_note(lines), ["> one line note", IS_INFO])

    def test_convert_multiple_notes_on_one_line(self):
        lines = ["<note>one line note</note>", "<note important>another one line note</note>"]
        self.assertEqual(convert_note(lines), ["> one line note", IS_INFO, "> another one line note", "{.is-warning}"])

    # Sentences unwrap:
    def test_unwrap_single_line(self):
        lines = ["A single line."]
        self.assertEqual(unwrap_sentences(lines), ["A single line."])

    def test_unwrap_empty_line(self):
        lines = [""]
        self.assertEqual(unwrap_sentences(lines), [""])

    def test_unwrap_two_sentences_on_same_line(self):
        lines = ["A sentence. And another."]
        self.assertEqual(unwrap_sentences(lines), [
            "A sentence.", "And another."])

    def test_unwrap_incomplete_sentences_to_same_line(self):
        lines = ["A sentence", "which continues on the next line."]
        self.assertEqual(unwrap_sentences(lines), [
            "A sentence which continues on the next line."])

    def test_unwrap_multiple_incomplete_sentences_to_same_line(self):
        lines = ["Another sentence",
                 "which continues. With another on the next", "line."]
        self.assertEqual(unwrap_sentences(lines), [
            "Another sentence which continues.", "With another on the next line."])

    def test_does_not_unwrap_if_next_line_starts_with_non_alfa(self):
        lines = ["Yet another sentence",
                 " which continues on the next line."]
        self.assertEqual(unwrap_sentences(lines), [
            "Yet another sentence", " which continues on the next line."])

    def test_should_wrap_network_disk_correctly(self):
        lines = ["", "Notera att du behöver ha en Samba-användare och att lösenordet behöver ändras med `smbpasswd` (och som sedan synkas till ditt",
                 '"vanliga" Linux-användarkonto. (Se [[it:server_users|]])', '']
        self.assertEqual(unwrap_sentences(lines), [
            '', 'Notera att du behöver ha en Samba-användare och att lösenordet behöver ändras med `smbpasswd` (och som sedan synkas till ditt "vanliga" Linux-användarkonto.',
            "(Se [[it:server_users|]])", ''])

    def disabled_test_should_not_wrap_consequtive_lines_with_lists(self):
        lines = ["1. a list", "1. second bullet"]
        self.assertEqual(unwrap_sentences(lines),
                         ["1. a list", "1. second bullet"])

    def test_should_convert_dokuwiki_link_without_text(self):
        lines = ["  [[somepage|]] ", "[[somepage]]  "]
        self.assertEqual(convert_links(lines),
                         ["  [somepage](/somepage) ", "[somepage](/somepage)  "])

    def test_should_convert_dokuwiki_link_with_text(self):
        lines = ["  [[somepage|text]] "]
        self.assertEqual(convert_links(lines),
                         ["  [text](/somepage) "])

    def test_should_convert_dokuwiki_link_with_non_ascii_text(self):
        lines = ["  [[kompetens:kompetensträd:processer|Processer]] "]
        self.assertEqual(convert_links(lines),
                         ["  [Processer](/kompetens/kompetensträd/processer) "])

    def test_should_convert_multiple_dokuwiki_links_on_same_line(self):
        lines = ["  t.ex [[kompetens:kompetensträd:processer|Processer]], [[kompetens:kompetensträd:team|Team]], [[kompetens:kompetensträd:programmering|Programmering]] eller [[kompetens:kompetensträd:projekt|Projekt]] "]
        self.assertEqual(convert_links(lines),
                         ["  t.ex [Processer](/kompetens/kompetensträd/processer), [Team](/kompetens/kompetensträd/team), [Programmering](/kompetens/kompetensträd/programmering) eller [Projekt](/kompetens/kompetensträd/projekt) "])

    def test_should_convert_multiple_dokuwiki_links_with_text(self):
        lines = ["  [[somepage|text]] ",
                 "line with normal text without links ...",  "  [[somepage2|text2]]"]
        self.assertEqual(convert_links(lines),
                         ["  [text](/somepage) ", "line with normal text without links ...", "  [text2](/somepage2)"])

    def test_should_convert_multiple_dokuwiki_links_with_text_and_spacing(self):
        lines = ["  [[  somepage | text ]] ",
                 "line with normal text without links ...",  "  [[ somepage2 | text2 ]]"]
        self.assertEqual(convert_links(lines),
                         ["  [text](/somepage) ", "line with normal text without links ...", "  [text2](/somepage2)"])

    def test_should_convert_images(self):
        lines = ["  {{test:some_image.png|alttext}} ", "{{ test:some_image.png |}}  "]
        self.assertEqual(convert_links(lines),
                         ["  ![alttext](/test/some_image.png) ", "![](/test/some_image.png)  "])

    def test_should_convert_media_link(self):
        lines = ["  {{mediafile|alttext}} ", "{{mediafile}}  "]
        self.assertEqual(convert_links(lines),
                         ["  [alttext](/mediafile) ", "[mediafile](/mediafile)  "])

    def test_should_convert_colons_to_slash_in_link(self):
        lines = ["[[:path:path:path|text]]"]
        self.assertEqual(convert_links(lines),
                         ["[text](/path/path/path)"])

    def test_should_not_convert_colons_to_slash_in_http_links(self):
        lines = ["[[https://some.domain|text]]"]
        self.assertEqual(convert_links(lines),
                         ["[text](https://some.domain)"])
