full-test-rh.vercel.app

Frontend - full-test:
Este projeto é uma aplicação frontend construída com React, TypeScript e Vite que se conecta a um backend NestJS (Node.js) para gerenciar usuários e clientes.

Descrição do Projeto:
O projeto permite que um usuário se autentique (ou seja, entre) apenas informando seu nome. O fluxo é o seguinte:

Autenticação/Criação de Usuário:
Na tela inicial, o usuário digita seu nome. Se um usuário com esse nome já existir no backend, ele será autenticado e os clientes associados a esse usuário serão carregados. Caso contrário, um novo usuário será criado automaticamente e ele será autenticado.

Tela de Clientes:
Após a autenticação, o usuário é redirecionado para uma tela que exibe todos os clientes associados a ele. Nessa tela, o usuário pode:

Criar um novo cliente:
Adicionando o nome do cliente, salário e valor da empresa.
Editar um cliente existente:
Atualizando os dados do cliente.
Excluir um cliente:
Removendo o cliente do sistema.
Selecionar clientes:
O usuário pode adicionar um cliente a uma lista de clientes selecionados (por meio de uma ação que altera o campo isSelected para true).
Remover clientes selecionados:
O usuário pode desmarcar ou remover clientes da lista de selecionados (alterando o campo isSelected para false).
Importante:
Certifique-se de que o backend (desenvolvido com NestJS, TypeScript, Docker, Jest, Winston, PostgreSQL e TypeORM) esteja rodando antes de iniciar o frontend.

Tecnologias Utilizadas
React: Biblioteca para criação de interfaces de usuário.
TypeScript: Superset do JavaScript com tipagem estática.
Vite: Ferramenta de build moderna e rápida para desenvolvimento e produção.
Tailwind CSS: Utilitário para estilos responsivos e personalização rápida.
React Router: Navegação entre páginas.

Começando
###Pré-requisitos
Node.js
Yarn ou npm
###Instalação
Clone o repositório e, no diretório do projeto, instale as dependências:

Com Yarn:

```bash
yarn install
```

Ou com npm:

```bash
npm install
```

Rodando o Projeto
Para iniciar o servidor de desenvolvimento:

Com Yarn:

```bash
yarn dev
```

Ou com npm:

```bash
npm run dev
```

O projeto será iniciado (http://localhost:5173).

Build para Produção
Para gerar uma build otimizada para produção:

### Com Yarn:

```bash
yarn build
```

```bash
npm run build

```

Após a build, para visualizar a produção:
Com Yarn:

```bash
yarn preview
```

Ou com npm:

```bash
npm run preview
```

###Estrutura do Projeto
src/:
components/: Componentes reutilizáveis (ex.: Header, ClientCard, FormClient, MoneyInput, etc.).
pages/: Páginas da aplicação (ex.: tela de autenticação, clientes, clientes selecionados).
api/: Funções para consumir a API do backend (ex.: authenticateUser, getClients, createClient, patchClient, deleteClient).
App.tsx: Componente principal.
vite.config.ts: Configuração do Vite.
public/: Arquivos estáticos.
Funcionalidades do Projeto
Autenticação/Criação de Usuário:
O usuário entra ou é criado com base no nome digitado. Após a autenticação, o nome e o id do usuário são armazenados (no localStorage) para serem utilizados nas requisições ao backend.

###Gerenciamento de Clientes:

###Exibição:
São listados todos os clientes associados ao usuário autenticado.
Criação:
O usuário pode criar um novo cliente informando nome, salário e valor da empresa.
Edição:
O usuário pode editar os dados de um cliente existente.
Exclusão:
O usuário pode remover um cliente.
Seleção:
Um cliente pode ser marcado como selecionado (isSelected = true) e exibido em uma lista específica.
Remoção de Seleção:
O usuário pode "limpar" os clientes selecionados, definindo isSelected: false para todos.
Navegação:
O projeto utiliza React Router para navegação entre a tela inicial, a tela de clientes e a tela de clientes selecionados.

Responsividade:
O layout é responsivo, adaptando-se para dispositivos móveis utilizando Tailwind CSS.
