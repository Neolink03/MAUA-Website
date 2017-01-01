const toggleDisplayMobileMenu = function(mobileMenuClassName, buttonId) {
  var showMenuButton = document.getElementById(buttonId);
  var mobileMenu = document.getElementsByClassName(mobileMenuClassName)[0];
  var action = showMenuButton.getAttribute("value");

  if(action === "show") {
    mobileMenu.setAttribute("class", mobileMenuClassName + " show_mobile_menu");
    showMenuButton.setAttribute("value", "hide");
  }
  else {
    mobileMenu.setAttribute("class", mobileMenuClassName + " hide_mobile_menu");
    showMenuButton.setAttribute("value", "show");
  }

}

const toggleDisplayMobileMainMenu = function(mobileMenuClassName, buttonId) {
  var showMenuButton = document.getElementById(buttonId);
  var mobileMenu = document.getElementsByClassName(mobileMenuClassName)[0];
  var action = showMenuButton.getAttribute("value");

  if(action === "show") {
    mobileMenu.setAttribute("class", mobileMenuClassName + " show_mobile_main_menu");
    showMenuButton.setAttribute("value", "hide");
  }
  else {
    mobileMenu.setAttribute("class", mobileMenuClassName + " hide_mobile_main_menu");
    showMenuButton.setAttribute("value", "show");
  }

}

const displayMobileSearchAndHideBannerTitles = function() {
  let showButton = document.getElementById("searchbar_show_button");
  let mobileSearchBar = document.getElementById("searchbar_mobile");
  let bannerTitles = document.getElementById("banner-header-titles");

  toggleDisplayElement(mobileSearchBar, showButton);
}

const toggleDisplayElement = function(element, actionButton) {
  let action = actionButton.getAttribute("value");

  let baseClass = getBaseClassOfElement(element);

  if(action === "show") {

    element.setAttribute("class", baseClass + " show_mobile_menu");
    actionButton.setAttribute("value", "hide");
  }
  else {
    element.setAttribute("class", baseClass + " hide_mobile_menu");
    actionButton.setAttribute("value", "show");
  }
}

const hideElement = function(elementToHide) {

}

const getBaseClassOfElement = function(element) {

  let classAtributeTextValue = element.getAttribute("class").trim();
  let classesOfElement = classAtributeTextValue.split(" ");
  return baseClass = classesOfElement[0];
}
