export function observarCards() {
  // Cria o observer para observar cada card
  const cards = document.querySelectorAll(".activity-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, indice) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, indice * 200);
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.1, // Exibe o card quando 10% dele estiver visível
    }
  );

  cards.forEach((card) => observer.observe(card));
}
