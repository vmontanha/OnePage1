/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('sections[id]')

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current => {
        const sectioHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('.active-link')
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('.active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*===== GSAP ANIMATION =====*/ 
gsap.from('.home__img', {opacity: 0, duration: 2, delay:.5, x:60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay:.8, y:25});
gsap.from('.home__greeting, .home__profession,.home__name,.home__button', {opacity: 0, duration: 2, delay:1, y:25, ease:'expo.out', stagger:.4})
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay:1.5, y:25, ease:'expo.out', stagger:.4})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay:1.9, y:25, ease:'expo.out', stagger:.4})
gsap.from('.home__social-icon', {opacity: 0, duration: 2.5, delay:2.5, y:30, ease:'expo.out', stagger:.4})
