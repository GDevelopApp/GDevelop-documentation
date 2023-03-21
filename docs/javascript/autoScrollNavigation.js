const scrollNavigationToActiveItem = () => {
  // When clicking on navigation items, either:
  // - the location of the window is changed and the scroll of the navigation is kept.
  // - the user navigates to a new page, resetting the navigation scroll to 0.
  // This function makes restores the scroll of the navigation after the page has loaded.
  // Hypothesis: mkdocs prevents default the navigation event and changes the window
  // location. The plugin awesome-pages that allows to sort the pages does not build
  // the navigation in a way that mkdocs see those links as navigation links, preventing
  // its normal way of functioning. Hence the 2 selectors below.
  let activeNavigationItem = document.querySelector("a.md-nav__link--active");
  if (!activeNavigationItem) {
    activeNavigationItem = document.querySelector("div.md-nav__link--active a");
  }
  const navigationContainer = document.querySelector(
    ".md-sidebar--primary .md-sidebar__scrollwrap"
  );
  if (activeNavigationItem && navigationContainer) {
    const containerBoundingRect = navigationContainer.getBoundingClientRect();
    const activeItemTopOffset =
      activeNavigationItem.getBoundingClientRect().top;
    if (navigationContainer.scrollTop === 0) {
      // If the container is already scrolled, mkdocs might have already scrolled
      // to the right position.
      navigationContainer.scrollTop =
        activeItemTopOffset -
        containerBoundingRect.top -
        containerBoundingRect.height / 2;
    }
  }
};

window.onload = () => setTimeout(scrollNavigationToActiveItem, 20);
