const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".rotatingNavigationContainer");
const prueba = document.querySelector(".prueba");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

open.addEventListener("click", () => prueba.classList.add("mostrar"));

close.addEventListener("click", () => prueba.classList.remove("mostrar"));
