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
});

var modal = document.getElementById("myModal");
var btns = document.querySelectorAll(".res-btn");
var span = document.getElementsByClassName("close")[0];
btns.forEach(function(btn) {
  btn.onclick = function() {
    console.log(btn.id);
    modal.style.display = "flex";
  }
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
