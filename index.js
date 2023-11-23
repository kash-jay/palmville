const videoText = document.querySelectorAll('.video-text');

function scrollAnim() {
    for (var i = 0; i <videoText.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = videoText[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            videoText[i].classList.add('active');
        } else {
            videoText[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll", scrollAnim);