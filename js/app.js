document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("[data-faq-search]");
  const cards = document.querySelectorAll("[data-faq-card]");

  document.querySelectorAll(".faq-card .label").forEach((label) => {
    label.setAttribute("aria-hidden", "true");
  });

  if (search && cards.length) {
    search.addEventListener("input", () => {
      const value = search.value.trim().toLowerCase();
      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(value) ? "" : "none";
      });
    });
  }
});
