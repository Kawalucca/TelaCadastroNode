# TelaCadastroNode
**Descrição**

Este é um projeto simples para realizar cadastros de usuários com campos como nome, email e senha. O sistema armazena os dados no localStorage do navegador, permitindo que as informações sejam mantidas mesmo após o fechamento da página. O projeto conta com uma interface em HTML, scripts em JavaScript e um servidor local em Node.js.

**Funcionalidades**

- Cadastro de usuários: O formulário permite inserir nome, email e senha.
- Visualização de cadastros: Os cadastros realizados ficam visíveis na mesma página.
- Armazenamento Local: Utiliza o localStorage para armazenar os cadastros no navegador.
- Exclusão de cadastros: Permite excluir um cadastro clicando em um botão de exclusão.
- Visualização de senha: As senhas são inicialmente mascaradas, com uma opção para visualizar a senha.

**Estrutura do Projeto**
O projeto é dividido em três arquivos principais:

1. index.html: Contém a estrutura HTML da página, incluindo os campos de cadastro e a área de exibição dos cadastros.

2. script.js: Script JavaScript que lida com o armazenamento, visualização e exclusão dos cadastros.

3. server.js: Um servidor simples em Node.js que serve os arquivos HTML e JavaScript.

**Requisitos**

Para rodar este projeto, você precisará de:

Node.js instalado em sua máquina.

**Como Rodar o Projeto**

1. Clone o repositório para sua máquina:

git clone https://github.com/seuusuario/seuprojeto.git
cd seuprojeto

2. Execute o servidor:
   
node server.js

3. Abra o navegador e acesse:

   http://localhost:2812
   
5. A página de cadastro será carregada e você poderá testar o funcionamento do formulário e a listagem de cadastros.

**Como Funciona**

index.html: A página HTML contém um formulário simples onde o usuário pode inserir o nome, email e senha. Após o cadastro, os dados são exibidos abaixo do formulário.

script.js: Esse script lida com a lógica de cadastrar usuários, armazenar os dados no localStorage e exibi-los na página. Além disso, ele permite a exclusão de cadastros e a visualização das senhas.

server.js: O servidor básico em Node.js serve os arquivos HTML e JS. Ele roda na porta 2812 e pode ser acessado localmente.
