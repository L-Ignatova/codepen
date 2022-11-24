const allCards = document.querySelectorAll(".card");

allCards.forEach(card => {
  card.addEventListener("click", (ev) => {  
    if (ev.target.classList.contains("card")) {
      allCards.forEach(c=>c.classList.remove("active"));
      ev.target.classList.add("active");
    }
  });
});
