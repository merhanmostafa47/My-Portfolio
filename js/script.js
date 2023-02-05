/*------------------------
 Preloader 1
---------------------------*/
// window.addEventListener("load", () => {
//   document.querySelector(".main").classList.remove("d-none");
//   document.querySelector(".home-section").classList.add("active");
//   /*------------------------
// Page Loading
// ---------------------------*/
//   document.querySelector(".page-loader").classList.add("fade-out");
//   setTimeout(() => {
//     document.querySelector(".page-loader").style.display = "none";
//   }, 1200);
// });

/*------------------------
 Preloader 2
---------------------------*/
(function ($) {
  "use strict";
  function loader() {
    $(window).on("load", function () {
      $("#ctn-preloader").addClass("loaded");
      document.querySelector(".main").classList.remove("d-none");
      document.querySelector(".home-section").classList.add("active");

      if ($("#ctn-preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(1500)
          .queue(function () {
            $(this).remove();
          });
      }
    });
  }
  loader();
})(jQuery);

/*------------------------
Toggle navbar
---------------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/*------------------------
Active section
---------------------------*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // active overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-link")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.remove("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

/*------------------------
About Tabs
---------------------------*/
const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    // Add class active to the target tab
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Add class active to the target tab content
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

/*------------------------
Portfolio Item Details Popup
---------------------------*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

// Hide popup when clicking outside it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});
