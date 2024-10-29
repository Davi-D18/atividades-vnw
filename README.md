# Central de Atividades do Curso

Este repositório agrupa todas as atividades realizadas ao longo do curso, disponibilizadas em um site interativo para facilitar a visualização e navegação entre os projetos.

## 🔗 Acesso Rápido

👇🏻 Você pode visualizar todas as atividades no site 

[**Acesse o site com as atividades aqui**](https://davi-d18.github.io/atividades-vnw)

## 📖 Sobre o Repositório

Este repositório centraliza as atividades do curso e exibe cada uma delas como um card no site. O objetivo é fornecer uma interface visual amigável para explorar o conteúdo das atividades

### Estrutura do Repositório

```plaintext
/src
  ├── /activities
  │
  ├── /js
  │   ├── index.js           
  │   ├── info-atividades.js
  │   └── observer.js
  ├── /css
  │   ├── cards.css
  │   ├── footer.css
  │   ├── global.css
  │   └── header.css
  ├── /assets
  │   ├── # icons
  │   └── # screenshots
  └── index.html
```

- **`/src/`**: Contém os arquivos da aplicação.

  - **`/activities/`**: Armazena os dados de cada atividade, que são renderizados dinamicamente.
  - **`/js/`**: Scripts JavaScript para carregar e exibir as atividades.

    - **`index.js`**: Arquivo principal que renderiza as atividades, exibi alguns elementos na tela e exibi um card com mais informações de cada atividade.

    - **`observer.js`**: Script que exibi os cards na tela quando o usuário está rolando a página e remove os que não estão sendo exibidos na tela.

    - **`observer.js`**: Script com informações detalhadas de cada atividade.

  - **`/css/`**: Arquivo de estilos para o layout e design da página.

    - **`cards.css`**: Define os estilos para os cards de atividades.
    
    - **`footer.css`**: Estilos específicos para o rodapé da página.
    
    - **`global.css`**: Estilos globais aplicados em toda a aplicação.
    
    - **`header.css`**: Estilos específicos para o cabeçalho da página.

  - **`/assets/`**: Onde fica imagens e icones usados

    - **`/screenshots/`**: Contém capturas de tela de cada atividade, exibidas nos cards.
    
    - **`/icons/`**: Armazena os ícones, como favicon do site.
- **`index.html`**: Arquivo principal que carrega o site.


## 👨‍💻 Como Rodar Localmente

Para rodar o projeto localmente em seu ambiente, siga estes passos:

1. Clone o repositório:
    ```bash
    git clone https://github.com/Davi-D18/atividades-vnw.git
    ```
2. Navegue até a pasta do projeto:
    ```bash
    cd atividades-vnw
    ```
3. Abra o arquivo `index.html` no seu navegador.

Agora, você verá a página inicial com os cards das atividades.

## 📂 Atividades Disponíveis

As atividades estão organizadas por tópicos e você pode visualizar cada uma no site ou diretamente no repositório correspondente:

- **Atividade 1**: Projeto Get Coffe  
  - [Acesse no GitHub](https://davi-d18.github.io/atividades-vnw/src/activities/atv01_projeto-coffe)
- **Atividade 2**: Projeto Padrinhos Mágicos  
  - [Acesse no GitHub](https://davi-d18.github.io/atividades-vnw/src/activities/atv02_padrinhos-magicos)
- **Atividade 3**: Lógica JavaScript  
  - [Acesse no GitHub](https://davi-d18.github.io/atividades-vnw/src/activities/atv03_logica-js)

## ⚙️ Tecnologias Utilizadas

- **HTML** para estruturação do conteúdo
- **CSS** para estilização e design responsivo
- **JavaScript** para dinamizar a página e carregar atividades
- **GitHub Pages** para hospedar o site


