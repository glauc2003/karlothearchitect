const btn = document.querySelector("#dark-mode-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const toggleIcon = document.querySelector(".sun-moon-icon");
const moonToSun = toggleIcon.querySelector("#moon-to-sun");
const sunToMoon = toggleIcon.querySelector("#sun-to-moon");
let theme;

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.setAttribute("data-theme", "dark");
  moonToSun.beginElement();
} else if (currentTheme == "light") {
  document.body.setAttribute("data-theme", "light");
} else if (prefersDarkScheme.matches) {
  document.body.setAttribute("data-theme", "dark");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.setAttribute(
      "data-theme",
      document.body.getAttribute("data-theme") === "light" ? "dark" : "light"
    );

    if (document.body.getAttribute("data-theme") === "light") {
      theme = "light";
      sunToMoon.beginElement();
    } else {
      theme = "dark";
      moonToSun.beginElement();
    }
  } else {
    document.body.setAttribute(
      "data-theme",
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );
    if (document.body.getAttribute("data-theme") === "dark") {
      theme = "dark";
      moonToSun.beginElement();
    } else {
      theme = "light";
      sunToMoon.beginElement();
    }
  }
  localStorage.setItem("theme", theme);
});