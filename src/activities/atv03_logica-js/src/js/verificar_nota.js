import { aparecerSpinner } from "./function-spinner.js";

const botao = document.querySelector("#nota");
const resultadoNota = document.querySelector("#resultadoNota");

botao.addEventListener("click", () => {
  resultadoNota.textContent = ""
  const notaDoAluno = document.querySelector("#notaInput").value;
  resultadoNota.className = "resultado"

  aparecerSpinner("#nota", true);

  setTimeout(() => {
    aparecerSpinner("#nota", false);
    verificarNota(notaDoAluno)
    document.querySelector("#notaInput").value = "";
  }, 1000)
})

function verificarNota (nota) {
  if (nota >= 9) {
    resultadoNota.innerHTML = `<p>Nota A</p>`
    resultadoNota.className = "resultado resultado-nota-alta";
    return
  } 

  switch (nota) {
    case "8":
      resultadoNota.innerHTML = `<p>Nota B</p>`
      resultadoNota.className = "resultado resultado-nota-alta";
      break;

    case "7":
      resultadoNota.innerHTML = `<p>Nota C</p>`
      resultadoNota.className = "resultado resultado-nota-media";
      break
      
    case "6":
      resultadoNota.innerHTML = `<p>Nota D</p>`
      resultadoNota.className = "resultado resultado-nota-media";
      break;

    default:
      resultadoNota.innerHTML = `<p>Nota F</p>`
      resultadoNota.className = "resultado resultado-nota-baixa";
  }
}