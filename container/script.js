fetch("../components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
fetch("../components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footerbar").innerHTML = data;
  });

const button = document.getElementById("toggle-theme");
button.addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});
