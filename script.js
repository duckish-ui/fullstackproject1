const themeButton = document.getElementById("themeButton");
const contactForm = document.getElementById("contactForm");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

function updateThemeButton() {
  themeButton.textContent = document.body.classList.contains("light") ? "Dark mode" : "Light mode";
}

updateThemeButton();

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  updateThemeButton();
});

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    document.getElementById("formResponse").textContent = "Appreciate it, " + name + "";
    contactForm.reset();
  });
}
