//Scrolling window header will be replaced by other bg-color


const getTopIcons = document.getElementById('top-icons')
const getTopMenuIcon = document.getElementById('top-menu-icon')
console.log("1")

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

