# 🏋️‍♂️ IronFit — Workout Management App

> Aplicação Full-Stack para criação, personalização e gestão de fichas de treino, com autenticação segura via JWT e persistência em banco NoSQL.

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-brightgreen?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)

---

## 📌 Visão Geral

O **IronFit** simplifica o acompanhamento de rotinas de exercícios de musculação. A plataforma permite que os usuários se cadastrem, realizem autenticação segura e gerenciem fichas de treino customizadas compostas por exercícios, séries, repetições e cargas.

## ✨ Funcionalidades Principais

- **Autenticação & Segurança**: Cadastro, login e geração de tokens JWT.
- **Proteção de Rotas**: Controle de acesso no frontend garantindo navegação restrita a usuários autenticados.
- **Gestão de Fichas de Treino (CRUD)**:
  - Criação de fichas personalizadas vinculadas ao perfil do usuário.
  - Listagem em tempo real de fichas e seus respectivos exercícios.
  - Remoção de fichas de treino.
- **Isolamento de Dados**: Cada usuário possui acesso exclusivo às suas próprias fichas.

---

## 🛠️ Tecnologias Utilizadas

### **Backend**
* **Linguagem**: Java 21
* **Framework**: Spring Boot 3
* **Segurança**: Spring Security + JWT (JSON Web Tokens)
* **Banco de Dados**: Spring Data MongoDB
* **Gestão de Dependências**: Maven

### **Frontend**
* **Biblioteca Base**: React + Vite
* **Linguagem**: TypeScript
* **Roteamento**: React Router DOM
* **Cliente HTTP**: Axios

---

## 🗺️ Endpoints da API

| Método | Endpoint | Descrição | Autenticação |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/register` | Cadastro de novo usuário | ❌ Pública |
| `POST` | `/api/auth/login` | Login e geração do token JWT | ❌ Pública |
| `GET` | `/api/fichas` | Lista todas as fichas do usuário autenticado | 🔒 Bearer JWT |
| `POST` | `/api/fichas` | Cadastra uma nova ficha de treino | 🔒 Bearer JWT |
| `DELETE` | `/api/fichas/{id}` | Remove uma ficha de treino pelo ID | 🔒 Bearer JWT |

---

## 📁 Estrutura do Projeto

```text
ironfit/
├── backend/               # Servidor e API REST (Spring Boot)
│   ├── src/main/java/com/ironfit/backend/
│   │   ├── controllers/   # Controllers REST
│   │   ├── domain/        # Modelos do sistema (User, FichaDeTreino, Exercicio)
│   │   ├── repositories/  # Interfaces MongoRepository
│   │   └── security/      # Configurações de segurança e filtros JWT
│   └── pom.xml
└── frontend/              # Interface do Usuário (React + Vite)
    ├── src/
    │   ├── components/    # Componentes estruturais e ProtectedRoute
    │   ├── pages/         # Telas da aplicação (Login, Register, Dashboard)
    │   └── services/      # Clientes HTTP e serviços de API
    └── package.json
