module.exports = {
  types: [
    { value: 'build', name: 'build: Mudanças no sistema de build ou dependências externas.' },
    { value: 'chore', name: 'chore: Tarefas de manutenção.' },
    { value: 'ci', name: 'ci: Mudanças em arquivos de configuração de CI.' },
    { value: 'config', name: 'config: Alterações nas configurações do projeto.' },
    { value: 'data', name: 'data: Alterações na estrutura ou no conteúdo dos dados.' },
    { value: 'deps', name: 'deps: Adição ou atualização de dependências.' },
    { value: 'design', name: 'design: Alterações no design visual ou UX/UI.' },
    { value: 'docs', name: 'docs: Alterações na documentação.' },
    { value: 'feat', name: 'feat: Nova funcionalidade.' },
    { value: 'fix', name: 'fix: Correção de bug.' },
    { value: 'locale', name: 'locale: Alterações relacionadas à localização (i18n).' },
    { value: 'perf', name: 'perf: Melhoria de performance.' },
    { value: 'refactor', name: 'refactor: Refatoração de código.' },
    { value: 'revert', name: 'revert: Reversão de commits anteriores.' },
    { value: 'security', name: 'security: Alterações relacionadas à segurança.' },
    { value: 'style', name: 'style: Estilos (sem alteração de lógica).' },
    { value: 'temp', name: 'temp: Alterações temporárias.' },
    { value: 'test', name: 'test: Testes.' },
    { value: 'ux', name: 'ux: Melhorias na experiência do usuário.' },
    { value: 'wip', name: 'wip: Trabalho em progresso.' }
  ],
  messages: {
    type: 'Selecione o tipo de alteração que você está commitando:',
    subject: 'Escreva uma descrição breve:',
    body: 'Escreva uma descrição longa (opcional):',
    footer: 'Adicione alguma informação no rodapé (opcional):',
    confirmCommit: 'Você confirma o commit acima?'
  },
  subjectLimit: 100 // Limite para o título do commit
};