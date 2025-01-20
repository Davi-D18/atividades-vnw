export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Define os tipos permitidos para commits
    'type-enum': [
      2,
      'always',
      [
        'build', // Mudanças no sistema de build ou dependências externas
        'chore', // Tarefas de manutenção
        'ci', // Mudanças em arquivos de configuração de CI
        'config', // Alterações nas configurações do projeto
        'data', // Alterações na estrutura ou no conteúdo dos dados
        'deps', // Adição ou atualização de dependências
        'design', // Alterações no design visual ou UX/UI
        'docs', // Documentação
        'feat', // Nova funcionalidade
        'fix', // Correção de bug
        'locale', // Adições ou modificações relacionadas à localização (i18n)
        'perf', // Melhoria de performance
        'refactor', // Refatoração de código
        'revert', // Reversão de commits anteriores
        'security', // Alterações relacionadas à segurança
        'style', // Estilos (sem alteração de lógica)
        'temp', // Alterações temporárias
        'test', // Testes
        'ux', // Melhorias na experiência do usuário
        'wip' // Trabalho em progresso
      ]
    ],
    // Regras personalizada para verificar se há uma mensagem após o prefixo
    'subject-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 3], // Mensagem do commit deve ter no mínimo 3 caracteres após o prefixo
    'header-max-length': [2, 'always', 72] // Tamanho máximo do título (mensagem)
  }
}
