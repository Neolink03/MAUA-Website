const toggleDisplayMobileMainMenu = function () {
  var actionButton = document.getElementById("mainmenu_show_button");
  var mobileMenu = document.getElementById("mainmenu");
  var action = actionButton.getAttribute("value");

  let baseClass = getBaseClassOfElement(mobileMenu);

  if(action === "show") {
    mobileMenu.setAttribute("class", baseClass + " show_mobile_main_menu");
    toggleActionButton(actionButton);
  }
  else {
    mobileMenu.setAttribute("class", baseClass + " hide_mobile_main_menu");
    toggleActionButton(actionButton);
  }
}

const toggleDisplayMobileLoginMenu = function () {
  let actionButton = document.getElementById("login_show_button");
  let mobileLoginMenu = document.getElementById("banner-useraction-login");

  toggleDisplayElementAndActionButton(mobileLoginMenu, actionButton);
}

const toggleDisplayBasketLoginMenu = function () {
  let actionButton = document.getElementById("basket_show_button");
  let mobileBasketMenu = document.getElementById("banner-useraction-basket");

  toggleDisplayElementAndActionButton(mobileBasketMenu, actionButton);
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

const toggleDisplayElementAndActionButton = function (element, actionButton) {
  toggleDisplayElement(element, actionButton);
  toggleActionButton(actionButton);
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
