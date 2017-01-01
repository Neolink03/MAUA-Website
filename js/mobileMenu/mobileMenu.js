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

  // Show mobile search bar and hide banner header and vice versa
  toggleDisplayElement(mobileSearchBar, showButton);
  toggleActionButton(showButton);
  toggleDisplayElement(bannerTitles, showButton);
}

const toggleDisplayElement = function(element, actionButton) {
  let baseClass = getBaseClassOfElement(element);
  let action = actionButton.getAttribute("value");

  if(action === "show") {
    element.setAttribute("class", baseClass + " show_mobile_menu");
  }
  else {
    element.setAttribute("class", baseClass + " hide_mobile_menu");
  }
}

const toggleActionButton = function(button) {
  let action = button.getAttribute("value");

  if(action === "show") {
    button.setAttribute("value", "hide");
  }
  else {
    button.setAttribute("value", "show");
  }
}

const getBaseClassOfElement = function(element) {

  let classAtributeTextValue = element.getAttribute("class").trim();
  let classesOfElement = classAtributeTextValue.split(" ");
  return baseClass = classesOfElement[0];
}
