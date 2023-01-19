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
