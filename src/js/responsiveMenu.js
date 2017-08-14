var $menuToggle = document.querySelector('.menu-toggle');
var $menuMobile = document.querySelector('.header-menu-mobile');
var $menuMobileNav = document.querySelector('.header-menu-mobile-nav');

$menuToggle.addEventListener('click', function () {
  this.classList.toggle('on');
  $menuMobile.classList.toggle('on');
  $menuMobileNav.classList.toggle('hidden');
})