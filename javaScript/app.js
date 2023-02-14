"use strict";

// loader
const loader = document.querySelector(".loader-body");

setTimeout(() => {
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.classList.add("hide");
  }, 200);
}, 500);

// navbar js
const bars = document.querySelector(".icon_navbar"),
  navbar = document.querySelector(".navbar"),
  closeIcon = document.querySelector(".icon_close-bars");

bars.addEventListener("click", () => {
  navbar.classList.add("show");
  navbar.classList.remove("hide");
  bars.classList.add("hide");
  bars.classList.remove("show");
  closeIcon.classList.add("show");
  closeIcon.classList.remove("hide");
});

closeIcon.addEventListener("click", () => {
  closeIcon.classList.add("hide");
  closeIcon.classList.remove("show");
  navbar.classList.add("hide");
  navbar.classList.remove("show");
  bars.classList.add("show");
  bars.classList.remove("hide");
});

// Modal js
const modal = document.querySelector(".account"),
  closeModal = document.querySelector("#close-form"),
  icon = document.querySelector(".icon"),
  logForm = document.querySelector(".login-form"),
  regForm = document.querySelector(".register-form"),
  regBtn = document.querySelector(".register-btn"),
  logBtn = document.querySelector(".login-btn");

// Login form js
function modalClose() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
icon.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
});

closeModal.addEventListener("click", modalClose);

modal.addEventListener("click", (e) => {
  if (e.target == modal || e.target.getAttribute("data-modalClose") == "") {
    modalClose();
  }
});
// Register Form js
function formLog() {
  regForm.classList.add("hide");
  regForm.classList.remove("show");
}
function formReg() {
  logForm.classList.add("show");
  logForm.classList.remove("hide");
}

regBtn.addEventListener("click", () => {
  logForm.classList.add("hide");
  logForm.classList.remove("show");
  regForm.classList.add("show");
  regForm.classList.remove("hide");
});
logBtn.addEventListener("click", () => {
  formLog();
  formReg();
});
// slider home
const sliderContainer = document.querySelector(".slider__container"),
  slider = document.querySelectorAll(".slider-offer"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  current = document.querySelector(".current"),
  total = document.querySelector(".total");

let idx = 0;
let slideIdx = 1;

// total
if (slider.length < 10) {
  total.textContent = `0${slider.length}`;
} else {
  total.textContent = slider.length;
}

// current
function currentSlide() {
  if (slider.length < 10) {
    current.textContent = `0${slideIdx}`;
  } else {
    current.textContent = slideIdx;
  }
}
currentSlide();
function changeSlider() {
  if (idx > slider.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = slider.length - 1;
  }
  sliderContainer.style.transform = `translateX(-${idx * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  idx++;
  changeSlider();
  if (slideIdx > slider.length - 1) {
    slideIdx = 1;
  } else {
    slideIdx++;
  }
  currentSlide();
});

prevBtn.addEventListener("click", () => {
  idx--;
  changeSlider();
  if (slideIdx == 1) {
    slideIdx = slider.length;
  } else {
    slideIdx--;
  }
  currentSlide();
});

// home-curses jS

// course js
const readMore = document.querySelector(".row-course"),
  btnNone = document.querySelector(".btn-none");

btnNone.addEventListener("click", () => {
  readMore.classList.remove("hide");
  readMore.classList.add("show-active");
  btnNone.classList.add("hide");
});

// Faq js

const faq = document.querySelector(".faq-row"),
  faqCol = document.querySelectorAll(".col-3"),
  active = document.querySelector(".active");
