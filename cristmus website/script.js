// navbar Scroll

window/addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar')
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    } else{
        navbar.classList.remove('scolled')
    }
})

//navbar toggle

// const menuBtn = document.getElementById('menu_btn')
// const navLinks = document.getElementById('nav_links')
// const menuBtn = document.querySelector('i')

// menuBtn.addEventListener('click', (e)=>{
//     navLinks.classList.toggle(open)
//     const isOpen = navLinks.classList.contains('open')
//         menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
// })