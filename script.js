fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footerbar").innerHTML = data;
  });
