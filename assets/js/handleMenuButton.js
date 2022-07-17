const $btnMobile = document.querySelector(".btn--mobile-menu");
const $btnMobileClose = document.querySelector(".btn--close");
const $navBar = document.querySelector(".header__anchors");
const toggleleftValues = { "": "0px", "-100vw": "0px", "0px": "-100vw" };
$btnMobile.addEventListener("click", () => {
  let $navBarStatus = $navBar.style.left;
  $navBar.style.left = toggleleftValues[$navBarStatus];
});
$btnMobileClose.addEventListener("click", () => {
  let $navBarStatus = $navBar.style.left;
  $navBar.style.left = toggleleftValues[$navBarStatus];
});
