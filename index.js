const animElements = document.querySelectorAll('.scroll-anim');
const palmville = document.querySelector('.title');
const aboutBtn = document.getElementById('about');
const homeBtn = document.getElementById('home');
const resBtn = document.getElementById('res-btn');
const signUp = document.getElementById('sign-up');

homeBtn.onclick = () => {
    document.getElementById('home-wrapper').scrollIntoView({behavior: 'smooth',});
}

aboutBtn.onclick = () => {
    document.getElementById('about-section').scrollIntoView({behavior: 'smooth',});
}

resBtn.onclick = () => {
    document.getElementById('residents-section').scrollIntoView({behavior: 'smooth',});
}



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
});

const sheriffModal = document.getElementById("sheriff-modal");
const coupleModal = document.getElementById("couple-modal");
const chefModal = document.getElementById("chef-modal");
const btns = document.querySelectorAll(".res-btn");
const spans = document.querySelectorAll(".close");
const modalArr = document.querySelectorAll('.modal');
var iframes = document.querySelectorAll('iframe');

btns.forEach(function(btn) {
  btn.onclick = function() {
    if (btn.id == 'sheriff-btn'){
        console.log(btn.id);
        sheriffModal.style.display = "flex";
    } else if (btn.id == 'couple-btn'){
        console.log(btn.id);
        coupleModal.style.display = "flex";
    } else {
        console.log(btn.id);
        chefModal.style.display = "flex";
    }
  }
});

spans.forEach(span => {
    iframes.forEach(iframe => {
        iframe.src = iframe.src;
    });
    span.addEventListener('click', () => {
        sheriffModal.style.display = "none";
        coupleModal.style.display = "none";
        chefModal.style.display = "none";
    });
    
});

window.onclick = function(event) {
    if (event.target.id.endsWith('modal')) {
        iframes.forEach(iframe => {
            iframe.src = iframe.src;
        });
        sheriffModal.style.display = "none";
        coupleModal.style.display = "none";
        chefModal.style.display = "none";
    };
}