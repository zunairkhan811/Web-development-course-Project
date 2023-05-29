const navlistmobile = document.querySelector('.nav-list-mobile');
const wrap = document.querySelector('#wrap');
const menubarfluid = document.querySelector('.menu-bar-fluid');
const logoiconabout = document.querySelector('#logoiconabout');
const pastbatchiconabout = document.querySelector('#pastbatchiconabout');
const partnericonabout = document.querySelector('#partnericonabout');

wrap.addEventListener('click', () => {
  navlistmobile.classList.toggle('nav-list-mobile-change');
  menubarfluid.classList.toggle('menu-bar-fluid-background-change');
  wrap.classList.toggle('change-wrap');
});

const aboutmenuArray = [logoiconabout, pastbatchiconabout, partnericonabout];
for (let i = 0; i < aboutmenuArray.length; i++) {
  aboutmenuArray[i].addEventListener('click', () => {
    menubarfluid.classList.remove('menu-bar-fluid-background-change');
    navlistmobile.classList.remove('nav-list-mobile-change');
    wrap.classList.remove('change-wrap');
  });
}
