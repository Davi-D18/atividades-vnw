import { activities } from "./info-atividades.js";

// Função para renderizar as atividades no HTML
function renderActivities() {
  const container = document.getElementById('activities-container');

  activities.forEach(activity => {
    const card = document.createElement('div');
    card.classList.add('activity-card');

    const title = document.createElement('h3');
    title.classList.add('activity-title');
    title.textContent = activity.title;

    const description = document.createElement('p');
    description.classList.add('activity-description');
    description.textContent = activity.description;

    const link = document.createElement('a');
    link.classList.add('activity-link');
    link.href = activity.link;
    link.target = "_blank";
    link.textContent = 'Visualizar Atividade';

    const image = document.createElement('img');
    image.classList.add('activity-image')
    image.src = activity.image
    image.alt = activity.alt

    card.appendChild(title);
    card.appendChild(image)
    card.appendChild(description);
    card.appendChild(link);

    container.appendChild(card);

    const cards = document.querySelectorAll('.activity-card');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 300);  // O tempo de delay para cada card (300ms entre cada um)
    });
  });
}

window.addEventListener('load', () => {
  document.querySelector('header').classList.add('visible');
});


// Carregar as atividades ao iniciar
window.onload = renderActivities;
