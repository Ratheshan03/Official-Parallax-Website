/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 20,
    slideShadows: true,
  },
});

/*==================== Countdown ====================*/
const countdown = () => {
  const countDate = new Date("Sep 25, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Time as normal units
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Converting our gap to normal units not ms
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // Rendering countdown values into DOM
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".min").innerText = textMinute;
  document.querySelector(".sec").innerText = textSecond;
};

// calling the function for every second (1000ms = 1s)
setInterval(countdown, 1000);

// Prize cards
VanillaTilt.init(document.querySelectorAll(".image__overlay"), {
  max: 12,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

/*==================== VIDEO ====================*/
// const videoFile = document.getElementById("video-file"),
//   videoButton = document.getElementById("video-button"),
//   videoIcon = document.getElementById("video-icon");

// function playPause() {
//   if (videoFile.paused) {
//     // Play video
//     videoFile.play();
//     // We change the icon
//     videoIcon.classList.add("ri-pause-line");
//     videoIcon.classList.remove("ri-play-line");
//   } else {
//     // Pause video
//     videoFile.pause();
//     // We change the icon
//     videoIcon.classList.remove("ri-pause-line");
//     videoIcon.classList.add("ri-play-line");
//   }
// }
// videoButton.addEventListener("click", playPause);

// function finalVideo() {
//   // Video ends, icon change
//   videoIcon.classList.remove("ri-pause-line");
//   videoIcon.classList.add("ri-play-line");
// }
// // ended, when the video ends
// videoFile.addEventListener("ended", finalVideo);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

$("#menu").onePageNav({
  currentClass: "active-link",
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: "",
  easing: "swing",
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .image-container,
           .place__card,
           .experience__img-one,
           .sponsor__content,
           .footer__data, .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
           .video__description,
           .subscribe__description, 
           .countdown__img-overlay,
           .section-f`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about__img-overlay, 
           .video__content,
           .subscribe__form,
           .countdown__data `,
  {
    origin: "right",
    interval: 100,
  }
);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously choose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const University = document.querySelector("#university-input");
const Name1 = document.querySelector("#name1-input");
const Name2 = document.querySelector("#name2-input");
const Name3 = document.querySelector("#name3-input");
const Email1 = document.querySelector("#email1-input");
const Email2 = document.querySelector("#email2-input");
const Email3 = document.querySelector("#email3-input");
const TeamLeader = document.querySelector("#leader-input");
const TeamName = document.querySelector("#team-input");
const TeamLeaderEmail = document.querySelector("#leaderEmail-input");
const TeamContact = document.querySelector("#teamContact-input");
const RotaractClub = document.querySelector("#Club-input");
const Queries = document.querySelector("#query-input");
const Merch = document.querySelector("#merchandise-input");

// |------------------------------ Sliding Form (Slider) -------------------------------|

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

// ! First Next Button
nextBtnFirst.addEventListener("click", function (event) {
  if (
    Name1.value == "" ||
    Name1.value == null ||
    Name2.value == "" ||
    Name2.value == null
  ) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please check the missing name fields!",
      footer: "<p>Participants name fields are compulsory.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (
    Email1.value == "" ||
    Email1.value == null ||
    Email2.value == "" ||
    Email2.value == null
  ) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Email fields cannot be empty!",
      footer: "<p>Please enter the correct email address.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (
    !Email1.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) ||
    !Email2.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have entered the email field incorrectly",
      footer:
        "<p>Please check the fields and enter the valid email address!</p>",
      background: "#edfffc",
      showCancelButton: true,
      showConfirmButton: false,
      color: "fff",
      timer: 5000,
    });
  } else {
    event.preventDefault();
    slidePage.style.marginLeft = "-26%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

// ! Second Next button
nextBtnSec.addEventListener("click", function (event) {
  if (TeamLeader.value == "" || TeamLeader.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team Leader name is missing!",
      footer: "<p>Team Leader name field is compulsory.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (TeamName.value == "" || TeamName.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team name cannot be empty!",
      footer: "<p>Please enter your Team name.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (TeamLeaderEmail.value == "" || TeamLeaderEmail.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team leader email cannot be empty!",
      footer: "<p>Please enter the correct email address.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else if (
    !TeamLeaderEmail.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have entered the email field incorrectly!",
      footer: "<p>Please check the field and enter a valid email address.</p>",
      background: "#edfffc",
      showCancelButton: true,
      showConfirmButton: false,
      color: "fff",
      timer: 5000,
    });
  } else if (TeamContact.value == "" || TeamContact.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Team contact number field is empty!",
      footer: "<p>Please enter a valid contact number.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  } else {
    event.preventDefault();
    slidePage.style.marginLeft = "-52%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});

// ! Third Next Button
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-78%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

// ! Submit Button
submitBtn.addEventListener("click", function (event) {
  if (Merch.value == "" || Merch.value == null) {
    event.preventDefault();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Merchandise field is empty!",
      footer: "<p>Please enter Yes or No on your preference.</p>",
      showConfirmButton: false,
      showCancelButton: true,
      background: "#edfffc",
      timer: 5000,
    });
  }
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-26%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-52%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
