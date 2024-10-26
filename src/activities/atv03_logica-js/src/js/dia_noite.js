import { aparecerSpinner } from "./function-spinner.js";

const botao = document.querySelector("#dia-noite");
const resultado = document.querySelector("#resultadoDiaNoite");

botao.addEventListener("click", () => {
  resultado.textContent = "";
  resultado.className = "resultado";

  aparecerSpinner("#dia-noite", true);

  setTimeout(() => {
    verificarHorario();
    aparecerSpinner("#dia-noite", false);
  }, 1000);
});

function verificarHorario() {
  const horario = new Date().getHours();

  if (horario >= 6 && horario < 18) {
    resultadoDiaNoite.textContent = "É dia! Hora de iluminar suas ideias e colocar em prática suas habilidades!";
    resultadoDiaNoite.className = "resultado resultado-dia";
  } else {
    resultadoDiaNoite.textContent = "É noite! Momento perfeito para refletir e programar com tranquilidade.";
    resultadoDiaNoite.className = "resultado resultado-noite";
  }
}
