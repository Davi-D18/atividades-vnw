export function aparecerSpinner(botao, exibir) {
  const spinner = document.querySelector(`${botao} > .spinner`);
  const botaoClicado = document.querySelector(botao);

  if (exibir) {
    botaoClicado.style.backgroundColor = "#959595";
    botaoClicado.style.color = "transparent";
    spinner.style.display = "inline-block"; // Exibe o spinner
  } else {
    spinner.style.display = "none"; // Oculta o spinner
    botaoClicado.style.backgroundColor = "";
    botaoClicado.style.color = "";
  }
}
