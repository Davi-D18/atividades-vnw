import { activities } from "./info-atividades.js";

function renderActivities() {
  const container = document.getElementById("activities-container");
  container.innerHTML = ""; // Limpa o container antes de renderizar

  activities.forEach((activity) => {
    const card = document.createElement("div");
    card.classList.add("activity-card");

    const title = document.createElement("h3");
    title.classList.add("activity-title");
    title.textContent = activity.title;

    const description = document.createElement("p");
    description.classList.add("activity-description");
    description.textContent = activity.description;

    const link = document.createElement("a");
    link.classList.add("activity-link");
    link.textContent = "Mais Informações";

    // Adicionando os atributos `data-*` para o modal
    link.setAttribute("data-img", activity.image);
    link.setAttribute("data-name", activity.title);
    link.setAttribute("data-role", activity.role);
    link.setAttribute("data-description", activity.descriptionTwo);
    link.setAttribute("data-link", activity.link);

    const image = document.createElement("img");
    image.classList.add("activity-image");
    image.src = activity.image;
    image.alt = activity.alt;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(link);

    container.appendChild(card);
  });

  // Animação de exibição dos cards
  const cards = document.querySelectorAll(".activity-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 300); // O tempo de delay para cada card (300ms entre cada um)
  });
}

function initModal() {
  const projects = document.querySelectorAll(".activity-link");
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlayImg");
  const overlayName = document.getElementById("overlayName");
  const overlayDescription = document.getElementById("overlayDescription");
  const closeBtn = document.getElementById("closeBtn");
  const techContainer = document.getElementById("modal-tech-badges");
  const overlayContent = document.querySelector(".overlay-content");

  const link = document.querySelector(".overlay-content > a");
  link.classList.add("activity-link");
  link.textContent = "Visualizar";

  projects.forEach((project) => {
    project.addEventListener("click", (event) => {
      event.preventDefault(); // Evita redirecionamento padrão

      // Preenche os dados do modal
      overlayImg.src = project.getAttribute("data-img");
      overlayName.textContent = project.getAttribute("data-name");
      overlayDescription.textContent = project.getAttribute("data-description");

      // Limpa as badges anteriores
      techContainer.innerHTML = "";

      // Adiciona as badges de tecnologia
      const technologies = activities.find(
        (activity) => activity.title === project.getAttribute("data-name")
      ).technologies;
      technologies.forEach((tech) => {
        const badge = document.createElement("span");
        badge.classList.add("badge");

        const img = document.createElement("img");
        img.src = tech.link;
        img.alt = tech.nome;
        img.classList.add("tech-logo");

        const techName = document.createElement("span");
        techName.textContent = tech.nome;
        techName.classList.add("tech-name");

        badge.appendChild(img);
        badge.appendChild(techName);
        techContainer.appendChild(badge);
      });

      link.href = project.getAttribute("data-link"); // Define o link da atividade
      link.target = "_blank"; // Abre em nova aba

      overlay.classList.add("active"); // Exibe o modal

      // Adiciona uma pequena animação de crescimento suave ao conteúdo do modal
      setTimeout(() => {
        overlayContent.style.transform = "scale(1)";
        overlayContent.style.opacity = "1";
      }, 100); // Um pequeno delay para suavizar a transição
    });
  });

  // Fecha o modal ao clicar no botão de fechar
  closeBtn.addEventListener("click", () => {
    overlayContent.style.transform = "translateY(100px)";
    overlayContent.style.opacity = "0";

    // Depois de um pequeno atraso, fecha o overlay completamente
    setTimeout(() => {
      overlay.classList.remove("active");
    }, 300); // Tempo suficiente para a animação ser concluída
  });

  // Fecha o modal ao clicar fora do conteúdo do modal
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlayContent.style.transform = "translateY(100px)";
      overlayContent.style.opacity = "0";

      setTimeout(() => {
        overlay.classList.remove("active");
      }, 300);
    }
  });
}

function animateHeader() {
  const header = document.querySelector("header");
  header.classList.add("visible");
}

window.addEventListener("load", () => {
  renderActivities();
  animateHeader();
  initModal();
});
