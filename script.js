const navlistmobile = document.querySelector('.nav-list-mobile');
const wrap = document.querySelector('#wrap');
const menubarfluid = document.querySelector('.menu-bar-fluid');

wrap.addEventListener('click', () => {
    navlistmobile.classList.toggle('nav-list-mobile-change');
    menubarfluid.classList.toggle('menu-bar-fluid-background-change');
    wrap.classList.toggle('change-wrap');
})


