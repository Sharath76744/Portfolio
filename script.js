const textArray = ["Frontend Developer", "Web Designer", "Freelancer"];

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const speed = 150; // typing speed
const eraseSpeed = 80; // deleting speed
const delayBetween = 1500; // pause before deleting

const typewriterEl = document.getElementById("typewriter");

function typeEffect() {
  currentText = textArray[textIndex];

  if (!isDeleting) {
    // Typing
    typewriterEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetween);
      return;
    }
  } else {
    // Deleting
    typewriterEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }
  
  setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
}

typeEffect();


// Scroll reveal animation without flicker
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log(entry.target);
      entry.target.classList.add("show")

    }
    else {
      entry.target.classList.remove("show")
    }
  })
}, {})

const todoElements = document.querySelectorAll(".anim")
const profile = document.querySelectorAll(".anim1")
const card = document.querySelectorAll(".c1")
todoElements.forEach(el => observer.observe(el));
profile.forEach(el => observer.observe(el));
card.forEach(el => observer.observe(el));


