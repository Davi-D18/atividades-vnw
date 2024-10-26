import { aparecerSpinner } from "./function-spinner.js";

const botao = document.querySelector("#temperatura");
const resultadoTemperatura = document.querySelector("#resultadoTemperatura");
let cidadePesquisar;

botao.addEventListener("click", () => {
  resultadoTemperatura.textContent = "";
  cidadePesquisar = document.querySelector("#tempInput").value;

  resultadoTemperatura.className = "resultado";
  resultadoTemperatura.classList.remove("resultado-erro");

  if (cidadePesquisar.length < 3) {
    resultadoTemperatura.innerHTML = `
      <p class="resultado-erro">Insira um nome com pelo menos 3 caracteres </p>
    `;
    return;
  }

  buscarTemperatura(cidadePesquisar);
});

// Função para verificar a temperatura de uma cidade
async function buscarTemperatura(cidade) {
  aparecerSpinner("#temperatura", true);

  // Remove espaços em branco antes e depois da string
  const cidadeComEncoding = encodeURIComponent(cidade.trim());

  // Verifica se a string está vazia após o trim
  if (!cidadeComEncoding) {
    alert("Por favor, insira o nome de uma cidade válida.");
    aparecerSpinner("#temperatura", false); // Oculta o spinner
    return; // Para a execução da função se a cidade não for válida
  }

  // Substitui os espaços por '+' para garantir que a URL esteja correta
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeComEncoding.replace(/%20/g, '+')}&appid=e06329eac585b1d59cc630ab7f7b4729&lang=pt_br&units=metric`;

  try {
    // Faz a requisição para a API e aguarda a resposta
    const response = await fetch(
      `${url}`
    );

    // Converte a resposta para JSON
    const data = await response.json();
    const cidadeComNomeFormatado = data.name;

    console.log(data);

    // Verifica se houve erro na requisição
    if (!response.ok) {
      throw new Error(`Erro: ${data.message}`);
    }

    const temperatura = Math.round(data.main.temp);

    verificarTemperatura(temperatura, cidadeComNomeFormatado);
  } catch (error) {
    resultadoTemperatura.innerHTML = `<p class="error">Erro ao buscar a temperatura. Tente novamente mais tarde :(</p>`;
  } finally {
    aparecerSpinner("#temperatura", false); // Oculta o spinner
    document.querySelector("#tempInput").value = "";
  }
}

function verificarTemperatura(temperatura, cidadeComNomeFormatado) {
  if (temperatura > 30) {
    resultadoTemperatura.textContent = `${cidadeComNomeFormatado} Está quente! (${temperatura}°C) Mantenha-se hidratado e aproveite o sol!`;
    resultadoTemperatura.className = "resultado resultado-quente";
  } else if (temperatura >= 20 && temperatura <= 30) {
    resultadoTemperatura.textContent = `${cidadeComNomeFormatado} está com Temperatura agradável! (${temperatura}°C) Aproveite o clima ameno.`;
    resultadoTemperatura.className = "resultado resultado-agradavel";
  } else {
    resultadoTemperatura.textContent = `${cidadeComNomeFormatado} Está frio! (${temperatura}°C) Prepare o casaco.`;
    resultadoTemperatura.className = "resultado resultado-frio";
  }
}
