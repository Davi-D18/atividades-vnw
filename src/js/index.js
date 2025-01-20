import { activities } from "./info-atividades.js";
import { observarCards } from "./observer.js";

function renderActivities(category = "todos") {
  const container = document.getElementById("activities-container");
  container.innerHTML = "";

  activities
    .filter(activity => category === "todos" || activity.category === category)
    .forEach(activity => {
      const card = document.createElement("article");
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
      link.setAttribute("data-img", activity.image);
      link.setAttribute("data-name", activity.title);
      link.setAttribute("data-description", activity.descriptionTwo);
      link.setAttribute("data-link", activity.link);

      if (activity.linkRepositorio) {
        link.setAttribute("data-link-repositorio", activity.linkRepositorio);
      }

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

  observarCards();
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
  const containerButtons = document.querySelector(".overlay-content > .container-buttons");

  projects.forEach((project) => {
    project.addEventListener("click", (event) => {
      event.preventDefault();

      overlayImg.src = project.getAttribute("data-img");
      overlayName.textContent = project.getAttribute("data-name");
      overlayDescription.textContent = project.getAttribute("data-description");
      techContainer.innerHTML = "";
      containerButtons.innerHTML = "";

      const activity = activities.find((act) => act.title === project.getAttribute("data-name"));
      activity.technologies.forEach((tech) => {
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

      const viewLink = document.createElement("a");
      viewLink.classList.add("activity-link");
      viewLink.textContent = "Visualizar Projeto";

      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-up-right-from-square");

      viewLink.appendChild(icon);
      viewLink.href = activity.link;
      viewLink.target = "_blank";
      containerButtons.appendChild(viewLink);

      if (activity.linkRepositorio) {
        const repoLink = document.createElement("a");
        repoLink.classList.add("activity-link");
        repoLink.textContent = "Visualizar Repositório";
        repoLink.href = activity.linkRepositorio;
        repoLink.target = "_blank";

        const icon = document.createElement("i");
        icon.classList.add("fa-brands", "fa-github");

        repoLink.appendChild(icon);
        containerButtons.appendChild(repoLink);
      }

      overlay.classList.add("active");
      setTimeout(() => {
        overlayContent.style.transform = "translateY(0)";
      }, 10);
    });
  });

  closeBtn.addEventListener("click", () => {
    overlayContent.style.transform = "translateY(100%)";
    setTimeout(() => {
      overlay.classList.remove("active");
    }, 300);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlayContent.style.transform = "translateY(100%)";
      setTimeout(() => {
        overlay.classList.remove("active");
      }, 300);
    }
  });
}

const buttons = document.querySelectorAll(".filter-buttons button");

document.querySelector("#all").style.backgroundColor = "#188030";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.getAttribute("data-category");

    buttons.forEach((btn) => {
      btn.style.backgroundColor = ""
    })

    button.style.backgroundColor = "#188030";

    filterActivities(selectedCategory);
  });
});


function animateHeader() {
  const header = document.querySelector("header");
  header.classList.add("visible");
}

function filterActivities(category) {
  renderActivities(category);
  initModal();
}

window.addEventListener("load", () => {
  renderActivities();
  animateHeader();
  initModal();
});
