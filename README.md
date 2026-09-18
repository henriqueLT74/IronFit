# 🏋️‍♂️ IronFit

O **IronFit** é uma aplicação Full-Stack desenvolvida para o gerenciamento de fichas de treino personalizadas, com suporte a autenticação de usuários via tokens JWT e persistência em banco NoSQL.

## 🚀 Tecnologias

### Backend
- **Java 21** & **Spring Boot 3**
- **Spring Security** com autenticação **JWT**
- **Spring Data MongoDB**
- **Maven**

### Frontend
- **React** + **Vite**
- **TypeScript**
- **Axios** para requisições HTTP
- **React Router DOM** para navegação

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- **JDK 21** instalado
- **Node.js** (versão 18+)
- Instância do **MongoDB** em execução (local ou Atlas)

### 1. Rodar o Backend
```bash
cd backend
# Windows:
.\mvnw spring-boot:run
# Linux/macOS:
./mvnw spring-boot:run

📌 Funcionalidades
[x] Cadastro e Login de usuários com JWT

[x] Proteção de rotas no Frontend

[x] Criação e listagem de fichas de treino vinculadas ao usuário

[x] Remoção de fichas de treino

---

### 2.Comandos

Crie um novo repositório **vazio** no seu GitHub (sem marcar a opção de criar README automático por lá). Em seguida, abra o terminal na pasta raiz do seu projeto (`ironfit`) e execute:

```bash
# Inicializa o repositório Git
git init

# Adiciona todos os arquivos preparados
git add .

# Cria o commit inicial
git commit -m "feat: estrutura inicial do IronFit com Auth JWT e Fichas de Treino"

# Define a branch principal como main
git branch -M main

# Conecta ao seu repositório remoto (substitua com o seu link do GitHub)
git remote add origin https://github.com/SEU_USUARIO/ironfit.git

# Envia os arquivos para o GitHub
git push -u origin main