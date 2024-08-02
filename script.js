// Toogle class active
const navbarPage = document.querySelector('.navbar-page');
// memunculkan sidemenu
document.querySelector('#sidemenu').onclick = () => {
    navbarPage.classList.toggle('active');
}

// close sidebar
const sidemenu = document.querySelector('#sidemenu');

document.addEventListener('click', function(e) {
    if(!sidemenu.contains(e.target) && !navbarPage.contains(e.target)) {
        navbarPage.classList.remove('active');
    }
});