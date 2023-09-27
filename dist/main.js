//Scrolling window header will be replaced by other bg-color


const getTopIcons = document.getElementById('top-icons')
const getTopMenuIcon = document.getElementById('top-menu-icon')

document.addEventListener('click', (e) => {
    if (getTopMenuIcon.contains(e.target)) {
        getTopIcons.classList.toggle('hidden')
        getTopIcons.classList.toggle('top-menu-expanded')

    }
    else {
        if (getTopIcons.classList.contains('top-menu-expanded')) {
            getTopIcons.classList.add('hidden')
            getTopIcons.classList.remove('top-menu-expanded')
        }
    }
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-slate-100');
    } else {
        header.classList.remove('bg-slate-100');
    }
});

const avatar = document.querySelector('.avatar-img');
const overlay = document.querySelector('.overlay');

avatar.addEventListener('mouseenter', () => {
    overlay.classList.remove('hidden') // Hide the overlay on hover
});

avatar.addEventListener('mouseleave', () => {
    overlay.classList.add('hidden') // Show the overlay on mouseleave

});

const hiddenElements = document.querySelectorAll('.hidden-scroll')



ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('#about', { delay: 100, origin: 'left' })
ScrollReveal().reveal('#exercises', { delay: 0 })
ScrollReveal().reveal('#footer', { delay: 100, origin: 'top' })
ScrollReveal().reveal('.year-title', { delay: 100, origin: 'top' })
ScrollReveal().reveal('.year-detail', { delay: 100, origin: 'right' })
ScrollReveal().reveal('.exercise-title', { delay: 100, origin: 'bottom' })
ScrollReveal().reveal('.img-ex', { delay: 100, origin: 'left' })
ScrollReveal().reveal('.logo', { delay: 100, origin: 'left' })
ScrollReveal().reveal('.footer-detail', { delay: 100, origin: 'top' })
ScrollReveal().reveal('.footer-source', { delay: 100, origin: 'top' })

