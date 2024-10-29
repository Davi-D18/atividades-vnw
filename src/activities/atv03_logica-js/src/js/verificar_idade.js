import { aparecerSpinner } from "./function-spinner.js";

const botao = document.querySelector("#faixa-etaria");
const resultadoFaixaEtaria = document.querySelector("#resultadoFaixaEtaria");

botao.addEventListener("click", () => {
  resultadoFaixaEtaria.textContent = "";
  const idadeDoUsuario = document.querySelector("#idadeInput").value;

  if (idadeDoUsuario == 0) {
    resultadoFaixaEtaria.innerHTML = `
    <p class="resultado-erro">Insira um número válido</p>
    `;
    return;
  }
  resultadoFaixaEtaria.className = "resultado"

  aparecerSpinner("#faixa-etaria", true);
  
  setTimeout(() => {
    // ocultar spinner
    aparecerSpinner("#faixa-etaria", false);
    verificarIdade(idadeDoUsuario);
    document.querySelector("#idadeInput").value = ""
  }, 1000)
})


function verificarIdade (idade) {
  if (idade < 12) {
    resultadoFaixaEtaria.innerHTML = `
    <p>Você ainda é Criança</p>
    `
    resultadoFaixaEtaria.className = "resultado resultado-crianca";
  } else if (idade >= 12 && idade <= 18) {
    resultadoFaixaEtaria.innerHTML = `
    <p>Você é Adolescente</p>
    `
    resultadoFaixaEtaria.className = "resultado resultado-jovem";
  } else if (idade >= 19 && idade <= 60) {
    resultadoFaixaEtaria.innerHTML = `
    <p>Você é Adulto :)</p>
    `
    resultadoFaixaEtaria.className = "resultado resultado-adulto";
  } else {
    resultadoFaixaEtaria.innerHTML = `
    <p>Você é idoso</p>
    `
    resultadoFaixaEtaria.className = "resultado resultado-idoso";
  }
}