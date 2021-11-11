
<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="../agenda-cultural-frontend/src/assets/LogoMatheus/logoAgendaCultural.png" />
</h1>

<h4 align="center"> 
	  Agenda Cultural de Vilhena - FrontEnd - Concluído
</h4>
<p align="center">
 <a href="./README.md#projeto">Sobre</a> •
 <a href="./README.md#funcionalidades">Funcionalidades</a> •
 <a href="./README.md##layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#licença">Licença</a>
 <a href="./Licença">Licença</a>
</p>


## Projeto

Agenda Cultural de VILHENA - sistema criado para promover a divulgação de eventos culturais da cidade de Vilhena, por meio da divulgação de eventos por meio de aplicativo.

Este projeto criou o FrontEnd do sistema, tanto o sistema Web, quanto o sitema Mobile. 

## Funcionalidades

- [x] Um organizador pode criar ou alterar eventos culturais no sistema adminstrador através da inserção dos seguintes dados:
  - [x] Nome do Evento
  - [x] Endereço, horário, localização
  - [x] Logo do evento para divulgação
  - [x] Telefone 
  
- [x] Um organizador pode criar ou alterar categorias no sistema adminstrador através da inserção dos seguintes dados:
  - [x] Nome da categoria
  - [x] Descrição
  - [x] Logo da categoria  

- [x] Um organizador pode alterar seus dados no sistema adminstrador através da inserção dos seguintes dados:
  - [x] Nome 
  - [x] Email
  - [x] Endereço 
  - [X] Telefone
  
Atenção: para alterar a senha, o usuário envia um email para o desenvolvedor e ele altera no servidor.

- [x] Os usuários tem acesso ao aplicativo móvel, onde podem:
  - [x] Ver eventos cadastrados
  - [x] Pesquisar eventos por data ou por categoria

---

## Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/Pirx3BruqzcKK5wbmZUNQy/Agenda-Cultural-(Copy)?node-id=92%3A2">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>



### Mobile

<p align="center">
  <img alt="Tela Inicial" title="TelaInicial" src="../agenda-cultural-frontend/src/assets/LogoMatheus/tela%20inicial.jpg" width="150px">
  <img alt="Pesquisar Categorias" title="Pesquisar Categorias" src="../agenda-cultural-frontend/src/assets/LogoMatheus/mobile.jpg" width="150px">
</p>


### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Página Cadastrar Evento"  src="../agenda-cultural-frontend/src/assets/LogoMatheus/Screenshot%20(4).png" width="600px">

</p>
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Página Dados Organizador" src="../agenda-cultural-frontend/src/assets/LogoMatheus/Screenshot%20(7).png" width="600px">
</p>
---

## Como executar o projeto

Este projeto é divido em três partes:
1. Backend (Desenvolvildo separadamente) 
2. Frontend (pasta Agenda-cultural-frontend)
3. Mobile (pasta mobile)

Atenção: Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

É necessário ter instalado as seguintes ferramentas no seu computador:
[Expo](https://expo.dev/), [Node.js](https://nodejs.org/en/),[Yarn](https://yarnpkg.com/). 
[VSCode](https://code.visualstudio.com/)


#### Rodando a aplicação web (Frontend)

```bash

# Clone ou faça download deste repositório 
https://github.com/ADS-VILHENA/agenda-cultural-frontend.git

# Pelo terminal terminal/cmd, acesse a pasta do projeto e instale as dependências através do comando:
yarn install

# Após ter instalado, utilize o comando abaixo para executar a aplicação
yarn start

# O projeto será aberto na porta:3000 - acesse http://localhost:3000

```
#### Rodando a aplicação mobile (Frontend)

```bash

# Clone ou faça download deste repositório 
https://github.com/ADS-VILHENA/agenda-cultural-frontend.git

# Pelo terminal terminal/cmd, acesse a pasta do projeto mobile e use o comando:
expo start

# O projeto será aberto na porta:3000 - acesse http://localhost:3000

```
---

## Tecnologias

Foram utilizadas as seguintes tecnologias abaixo para a construção do projeto:

#### **Sistema Organizador - WEB**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))
-   **[React Router Dom](https://yarnpkg.com/package/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React-Bootstrap](react-bootstrap.github.io/)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/web/package.json)


#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[DatePicker](https://github.com/react-native-datetimepicker/datetimepicker)**

> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/mobile/package.json)

#### **Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  (https://www.figma.com/file/Pirx3BruqzcKK5wbmZUNQy/Agenda-Cultural-(Copy)?node-id=92%3A2)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  
-   Markdown:  **[StackEdit](https://stackedit.io/)**



---






---

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---

