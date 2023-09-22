const expandingCardsItems = document.querySelectorAll(".expandingCardsItems");

expandingCardsItems.forEach((items) => {
  items.addEventListener("click", () => {
    removeActiveClasses();
    items.classList.add("active");
  });
});

function removeActiveClasses() {
  expandingCardsItems.forEach((items) => {
    items.classList.remove("active");
  });
}
