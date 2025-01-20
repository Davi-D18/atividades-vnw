const fs = require('fs');
const puppeteer = require('puppeteer');

const formatDate = () => {
  const now = new Date();
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
};

const generateReport = (url, results, resources, consoleErrors) => {
  let report = `==============================\n`;
  report += `📄 Relatório de Validação da Página\n`;
  report += `==============================\n\n`;
  report += `🔗 URL: ${url}\n`;
  report += `📅 Data e Hora: ${formatDate()}\n\n`;

  report += `------------------------------\n`;
  report += `🔍 Resultados da Validação\n`;
  report += `------------------------------\n`;
  report += results;

  report += `\n------------------------------\n`;
  report += `📦 Recursos Carregados\n`;
  report += `------------------------------\n`;
  if (resources.length > 0) {
    resources.forEach((res, index) => {
      report += `${index + 1}. ${res}\n`;
    });
  } else {
    report += `Nenhum recurso encontrado.\n`;
  }

  report += `\n------------------------------\n`;
  report += `❌ Erros no Console\n`;
  report += `------------------------------\n`;
  if (consoleErrors.length > 0) {
    consoleErrors.forEach((err, index) => {
      report += `${index + 1}. ${err}\n`;
    });
  } else {
    report += `Nenhum erro no console encontrado.\n`;
  }

  report += `\n------------------------------\n`;
  report += `📊 Conclusão\n`;
  report += `------------------------------\n`;
  const hasErrors = results.includes('❌') || consoleErrors.length > 0;
  report += hasErrors
    ? `Status final: ❌ FALHA\nProblemas identificados: veja os detalhes acima.\n`
    : `Status final: ✅ OK\nTodos os testes passaram com sucesso.\n`;

  return report;
};

(async () => {
  const url = 'http://localhost:4173';
  const summaryFile = 'validation_report.txt';

  try {
    console.log('🔍 Iniciando validação da página...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    console.log('✅ Página carregada.');

    const checks = [
      { selector: 'title', description: 'Título da página' },
      { selector: 'link[rel="stylesheet"]', description: 'CSS carregado' },
      { selector: 'script[src]', description: 'JavaScript carregado' },
    ];

    let validationResults = '';
    for (const { selector, description } of checks) {
      const element = await page.$(selector);
      const status = element ? '✅ OK' : '❌ FALHA';
      validationResults += `${description}: ${status}\n`;
    }

    const images = await page.$$('img:not([alt]), img[alt=""]');
    validationResults += `Imagens: ${images.length > 0 ? '❌ Existem tags img sem atributo alt ou com ele vazio. Corrija antes de efetuar o push' : '✅ OK'
      }\n`;

    const resources = await page.evaluate(() =>
      Array.from(document.querySelectorAll('link[rel="stylesheet"], script[src]')).map(
        (el) => el.href || el.src
      )
    );

    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    // Gere o relatório e salve no arquivo
    const report = generateReport(url, validationResults, resources, consoleErrors);
    fs.writeFileSync(summaryFile, report);

    console.log(`📄 Relatório salvo em: ${summaryFile}`);

    const hasErrors = validationResults.includes('❌') || consoleErrors.length > 0;
    process.exit(hasErrors ? 1 : 0);
  } catch (error) {
    console.error('❌ Erro durante a validação:', error.message);
    fs.writeFileSync(summaryFile, `Erro durante a validação:\n${error.stack}`);
    process.exit(1);
  }
})();