const cards = document.querySelectorAll(".card"),
  searchInput = document.querySelector("input"),
  header = document.querySelectorAll(".header"),
  body = document.querySelectorAll(".body");

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  cards.forEach((card, i) => {
    const isVisible = header[i].textContent.toLowerCase().includes(value) || body[i].textContent.toLowerCase().includes(value);
    card.classList.toggle("hide", !isVisible);
  });
});
