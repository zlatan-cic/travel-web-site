const menuBtn = document.querySelector('#menu-btn')
const navLinks = document.querySelector('#nav-links')
const menuBtnIcon = menuBtn.querySelector('.humburger')


menuBtnIcon.addEventListener('click', (e) => {
   navLinks.classList.toggle('open')

   const isOpen = navLinks.classList.contains('open')
   menuBtnIcon.setAttribute('class', isOpen ? "ri-close-line" : "ri-menu-line")
})

// menuBtn.addEventListener('click', () => {
//    console.log('test');
// })