document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector("#site-navigation");

  const closeNavigation = () => {
    if (!toggle || !navigation) return;
    toggle.setAttribute("aria-expanded", "false");
    navigation.dataset.open = "false";
  };

  if (toggle && navigation) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navigation.dataset.open = String(!expanded);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeNavigation();
        toggle.focus();
      }
    });
  }

  const search = document.querySelector("[data-faq-search]");
  const cards = Array.from(document.querySelectorAll("[data-faq-card]"));
  const count = document.querySelector("[data-faq-count]");
  const empty = document.querySelector("[data-faq-empty]");

  if (search && cards.length) {
    const updateResults = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;

      cards.forEach((card) => {
        const matches = card.textContent.toLocaleLowerCase().includes(query);
        card.hidden = !matches;
        if (matches) visible += 1;
      });

      if (count) {
        count.textContent = `${visible} ${visible === 1 ? "question" : "questions"}`;
      }
      if (empty) {
        empty.hidden = visible !== 0;
      }
    };

    search.addEventListener("input", updateResults);
    updateResults();
  }
});
