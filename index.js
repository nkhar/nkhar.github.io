var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getServices() {
  const titleH1 = document.querySelector(".header-container>h1");

  fetch("https://gfai-cms.up.railway.app/api/services", requestOptions)
    .then((response) => response.json())
    .then((result) => (titleH1.textContent = result.data[0].attributes.name))
    .catch((error) => console.log("error", error));
}

window.onload = getServices;

var navbar = document.querySelector("nav");
var menuItemHome = document.querySelector("nav>a:first-child");

window.onscroll = function () {
  if (window.pageYOffset >= menuItemHome.offsetTop) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
};

const menuLinks = document.querySelectorAll("nav>a");

const aboutUsSection = document.querySelector("section.about-us");
const servicesSection = document.querySelector("section.services");
const reviewsSection = document.querySelector("section.review-gallery");
const scheduleSection = document.querySelector("section.schedule");

menuLinks.forEach((el) => {
  el.addEventListener("click", () => {
    const menuItemCLicked = el.getAttribute("local-link");

    var additionalOffset = 0;
    var sectionToScroll = aboutUsSection;
    if (menuItemCLicked === "main") {
      sectionToScroll = aboutUsSection;
    }
    if (menuItemCLicked === "about") {
      sectionToScroll = aboutUsSection;
    }
    if (menuItemCLicked === "services") {
      sectionToScroll = servicesSection;
    }
    if (menuItemCLicked === "testimonials") {
      sectionToScroll = reviewsSection;
      additionalOffset = 70;
    }
    if (menuItemCLicked === "contact") {
      sectionToScroll = scheduleSection;
      additionalOffset = 70;
    }

    var topPos = sectionToScroll.offsetTop - 50 - additionalOffset;

    setTimeout(function () {
      // sectionToScroll.scrollIntoView(true, {
      //   behavior: "smooth",
      // });

      scrollToSmoothly(topPos);
    }, 100);
  });
});

/*
@param pos: the y-position to scroll to (in pixels)
@param time: the exact amount of time the scrolling will take (in milliseconds)
*/
function scrollToSmoothly(pos, time) {
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    var progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}

const langEl = document.querySelector(".languages");
const languageDivs = document.querySelectorAll(".languages div");
const titleEl = document.querySelector(".header-container>h1");

const homeMenuEl = document.querySelector("nav>.link:nth-child(1)");
const aboutMenuEl = document.querySelector("nav>.link:nth-child(2)");
const servicesMenuEl = document.querySelector("nav>.link:nth-child(3)");
const testimonialsMenuEl = document.querySelector("nav>.link:nth-child(4)");
const contactMenuEl = document.querySelector("nav>.link:nth-child(5)");

languageDivs.forEach((el) => {
  el.addEventListener("click", () => {
    langEl.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attrLanguage = el.querySelector("a").getAttribute("language");

    titleEl.textContent = data[attrLanguage].title;
    homeMenuEl.textContent = data[attrLanguage].home;
    aboutMenuEl.textContent = data[attrLanguage].about;
    servicesMenuEl.textContent = data[attrLanguage].services;
    testimonialsMenuEl.textContent = data[attrLanguage].testimonials;
    contactMenuEl.textContent = data[attrLanguage].contact;
  });
});

var data = {
  georgian: {
    title: "ტერფის და კოჭწვივის სახსრის ინსტიტუტი",
    home: "მთავარი",
    about: "ჩვენ შესახებ",
    services: "სერვისები",
    testimonials: "გამოხმაურება",
    contact: "კონტაქტი",
  },
  english: {
    title: "Georgia Foot and Ankle Institute",
    home: "Home",
    about: "Our story",
    services: "Services",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  russian: {
    title: "Gruzinski Universitet...",
    home: "Glavnoe",
    about: "Nasha Istoria",
    services: "Servisi",
    testimonials: "O Nas",
    contact: "Kontaqt",
  },
};
