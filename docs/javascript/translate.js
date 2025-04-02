// Can't import as it's not a module.
const translateSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12.87 15.07-2.54-2.51.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7 1.62-4.33L19.12 17z" fill="currentColor"/></svg>';

function cleanTranslatedURL(url) {
  try {
    let parsedUrl = new URL(url);

    // Extract the original domain from the subdomain format
    let domainParts = parsedUrl.hostname.split(".translate.goog")[0].split("-");
    let cleanDomain = domainParts.join("."); // Reconstruct domain

    // Extract the pathname without query parameters
    let path = parsedUrl.pathname;

    // Construct the cleaned URL
    let cleanUrl = `https://${cleanDomain}${path}`;

    return cleanUrl;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}

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

  const googleTradRegex = /translate\.google\.com/;
  const isGoogleTradPage = googleTradRegex.test(currentUrl);
  if (isGoogleTradPage) {
    // If the page is already a Google Translate page, we need to get the original URL.
    // So we transform the current URL to get the original URL.
    // Translated URL can look like: https://wiki-gdevelop-io.translate.goog/gdevelop5/?_x_tr_sl=en&_x_tr_tl=auto&_x_tr_hl=fr
    // We need to remove the translate.goog part and the _x_tr_* parameters.

    const originalUrl = cleanTranslatedURL(currentUrl);
    if (originalUrl) {
      window.open(originalUrl, "_self");
    } else {
      console.error("Failed to clean the translated URL.");
    }
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
  let headerTitle = document.querySelector(".md-header__title");
  if (headerTitle) {
    let translateButton = document.createElement("button");

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
});
