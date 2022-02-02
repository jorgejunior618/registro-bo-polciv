# Registro de Boletim de ocorrência

## Estrutura do Banco de Dados

  <h3 id="registro">Registro</h3>

  ```
  (
    id SERIAL UNIQUE,
    
  )
  ```


## Rotas da API

 ### Usuário

  - ```GET```: "/registros" (Lista dos Registros cadastrados)
  
  - ```POST```: "/registros" (Atualização de dados do usuário)
    - Body: { email: string, name: string, password: string }

## Configurar na Máquina pessoal

  É necessário ter o [Node](https://nodejs.org/en/) instalado na sua máquina
  Abrir console no diretório de sua preferência e digitar o comando `git clone https://github.com/jorgejunior618/registro-bo-polciv` para clonar o repositório
  Ao finalizar o Download, utilizar o comando `npm install` para instalar todas as dependências, e, apõs a instalação editar o arquivo `db.ts` na pasta `.\back-end\src\dataBase\db.ts`:
  ```
import { Pool } from "pg";

const connectionString = 'SUA_STRING_DE_CONEXÃO_COM_BANCO_DE_DADOS';
const db = new Pool({ connectionString });

export default db;
  ```
  **Importante:** possuir uma estrutura de banco de dados semelhante à [demonstrada acima](#registro)

  Utilizar o comando `npm run dev` para inicializar o projeto em modo de desenvolvimento, ou `npm run build` seguido de `npm start` para gerar o arquivo em modo de produção, e simulá-lo localmente.
