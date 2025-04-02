// Can't import as it's not a module.
const translateSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12.87 15.07-2.54-2.51.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7 1.62-4.33L19.12 17z" fill="currentColor"/></svg>';

const isGoogleTranslatedUrl = (url) => {
  // Check if the URL is a translated URL.
  const googleTradRegex = /translate\.goog/;
  return googleTradRegex.test(url);
};

const isGoogleTranslateUrl = (url) => {
  // Check if the URL is a Google Translate URL (to be translated)
  const googleTradRegex = /translate\.google\.com/;
  return googleTradRegex.test(url);
};

const getOriginalUrl = (googleTradUrl) => {
  // Extract the original URL from the Google Translate URL.
  // URL can look like this:
  // https://translate.google.com/website?sl=en&tl=fr&hl=fr&u=https://www.youtube.com/watch?v%3D595-swNh0Mw%26list%3DPL3YlZTdKiS89Kj7IQVPoNElJCWrjZaCC8%26index%3D1
  // We need to extract the value of the "u" parameter, with the query params.
  const url = new URL(googleTradUrl);
  const originalUrl = url.searchParams.get("u");
  if (originalUrl) {
    // Decode the URL and return it
    return decodeURIComponent(originalUrl);
  }
  // Otherwise, return the original Google Translate URL
  return googleTradUrl;
};

function showGoogleTranslateBar() {
  const userLang = navigator.language || navigator.userLanguage || "en";
  const sourceLangCode = "en";
  const userLangCode = userLang.split("-")[0]; // Get the language code (e.g., "en", "fr")
  // For some reason, if trying to translate from English to English, Google Translate
  // does not work. So we need to change the target language to French in that case.
  const targetLangCode = userLangCode === "en" ? "fr" : userLangCode;

  const currentUrl = window.location.href.replace(
    // This is to test locally.
    "http://localhost:8000",
    "https://wiki.gdevelop.io"
  );

  if (isGoogleTranslatedUrl(currentUrl)) {
    // If the page is already a Google Translate page, it is hard to get the original URL.
    // So we just don't do anything.
    return;
  }

  // If the page is not a Google Translate page, we need to open the Google Translate page.
  window.open(
    "https://translate.google.com/translate?sl=" +
      sourceLangCode +
      "&tl=" +
      targetLangCode +
      "&u=" +
      encodeURIComponent(currentUrl),
    // Replace the current page with the translated page
    "_self"
  );
}

// Add event listener to the language icon when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const headerTitle = document.querySelector(".md-header__title");
  if (headerTitle) {
    const translateButton = document.createElement("button");

    translateButton.innerHTML = translateSvg;
    translateButton.className = "md-header__button md-icon";
    translateButton.id = "translate-button";
    translateButton.title = "Translate this page";

    translateButton.addEventListener("click", showGoogleTranslateBar);

    // Insert the button after the header title
    headerTitle.parentNode.insertBefore(
      translateButton,
      headerTitle.nextSibling
    );
  }

  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    if (!isGoogleTranslateUrl(href)) {
      return;
    }

    let originalUrl = getOriginalUrl(href);
    if (!originalUrl.includes("wiki.gdevelop.io")) {
      // If the original URL is not from the wiki, we need to change it to the original URL.
      // Otherwise, we just keep the original URL.
      link.href = originalUrl;
    }
  });
});

// Search container is added dynamically by mkdocs when search is opened.
// So we need to listen to dom updates to detect the search container.
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        if (
          node.nodeType === 1 &&
          node.classList.contains("DocSearch-Container")
        ) {
          // Prevent translating everything inside that component by adding class "notranslate".
          // It should be enough to prevent everything inside the component to be translated.
          node.classList.add("notranslate");
        }
      });
    }
  });
});
const config = { childList: true, subtree: true };
const targetNode = document.body;
observer.observe(targetNode, config);
// Stop observing when the page is unloaded
window.addEventListener("beforeunload", function () {
  observer.disconnect();
});
