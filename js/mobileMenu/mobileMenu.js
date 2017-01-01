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

const displayMobileSearch = function() {
  let showButton = document.getElementById("searchbar_show_button");
  let mobileSearchBar = document.getElementById("searchbar_mobile");
  let bannerTitles = document.getElementById("banner-header-titles");

  toggleDisplayElement(mobileSearchBar, showButton);


}

const toggleDisplayElement = function(elementToHide, actionButton) {
  let action = actionButton.getAttribute("value");

  let elementToHideClassesText = elementToHide.getAttribute("class").trim();
  let elementToHideClasses = elementToHideClassesText.split(" ");
  let baseClass = elementToHideClasses[0];

  if(action === "show") {

    elementToHide.setAttribute("class", baseClass + " show_mobile_menu");
    actionButton.setAttribute("value", "hide");
  }
  else {
    elementToHide.setAttribute("class", baseClass + " hide_mobile_menu");
    actionButton.setAttribute("value", "show");
  }
}
