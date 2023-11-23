const animElements = document.querySelectorAll('.scroll-anim');
const palmville = document.querySelector('.title');

function scrollAnim() {
    for (var i = 0; i <animElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = animElements[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            animElements[i].classList.add('active');
        } else {
            animElements[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll", scrollAnim);

window.addEventListener('DOMContentLoaded', () => {
    palmville.classList.add('loaded');
})