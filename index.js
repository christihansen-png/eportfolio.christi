// sCCKszcb11RlWnO4K
// service_beautiful
// template_h4ftgzz

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
  document.body.classList += " dark-theme"
}
else {
  document.body.classList.remove("dark-theme")
}
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
  .sendForm(
    "service_beautiful",
    "template_h4ftgzz",
    event.target,
    'BTkhjk-8XBvZ_yBUr'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    alert(
      "The email service is temporarily unavailable. Please contact me directly on code26beautifulyou@gmail.com"
    );
  })
}

function toggleModal(){
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

// Show each project's title when the card is mostly on screen
// (only shows on phones/tablets: the CSS for .in-view is inside the 768px media query)
const projectCards = document.querySelectorAll(".project__wrapper");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("in-view", entry.isIntersecting);
  });
}, { threshold: 0.6 });

projectCards.forEach((card) => observer.observe(card));
