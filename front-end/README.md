# Frontend SPA (Single Page Application)

## Rotas da API

  - `"/"`: Landing Page que redireciona para a Tela de Registro de Boletim de Ocorrência
  
  - `"/registroBO"`: Tela com formulário para registrar um Boletim de Ocorrência

  - `"/*"` (qualquer outra rota): Tela padrão para rotas não definidas
 
## Funcionalidades principais

  - Utilização de componentes estáticos para compor Cabeçalho e barra de navegação lateral, evitandocarregamento desnecessários

  - Utilização do padrão Funcional (sem uso de classes) e uso de reactHooks

  - Gerênciamento de estados da aplicação e padrão Flux utilizando Redux

  - Uso de componentes da biblioteca [mui (material-ui para React)](https://mui.com/pt/)

  - Uso de Testes Unitários no desenvolvimento utilizando a Biblioteca [testing-library/react](https://testing-library.com/).

## Configurar na Máquina pessoal

  É necessário ter o [Node](https://nodejs.org/en/) instalado na sua máquina
  Abrir console no diretório de sua preferência e digitar o comando `git clone https://github.com/jorgejunior618/registro-bo-polciv` para clonar o repositório
  Ao finalizar o Download, utilizar o comando `yarn` na pasta `front-end` para instalar todas as dependências.
  Para realizar os teste unitários configurados, basta utilizar o comando `yarn run test`, e aguardar os resultados.

  Utilizar o comando `yarn start` para inicializar o projeto em modo de desenvolvimento, ou `yarn run build` para gerar o arquivo em modo de produção.
