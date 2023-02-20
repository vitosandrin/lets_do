# 💻 Lets Do App
Uma aplicação de gerenciamento de projetos e tarefas, onde o usuário pode cadastrar seus projetos e tarefas, excluir, alterar suas informações e seu status caso tenha finalizado ou esteja em atraso.
## ✨ Techs
  * Back-end:
    -  [ ] NodeJS (express)
    -  [ ] Typescript
    -  [ ] MongoDB
    -  [ ] Mongoose
    -  [ ] md5
    -  [ ] Ramda
    -  [ ] Json Web Token
  * Front-end:
    -  [ ] React
    -  [ ] Typescript
    -  [ ] Redux Toolkit
    -  [ ] Vite
    -  [ ] Axios
    -  [ ] File-Saver
    -  [ ] Styled Components
    -  [ ] React-icons
    
<hr />

## 1 - Backend
- Rotas de cadastro, login, exclusão e atualização do usuário.
- Rota de criação de projetos do usuário, passando o nome do projeto e descrição do projeto.
- Rota de criação de tarefas do usuário, passando o nome da tarefa, descrição da tarefa e status da tarefa.
- Rota de atualização de tarefa do usuário através do id da tarefa.
- Rota de atualização do projeto do usuário através do id do projeto.
- 
    ## 1.1 - Banco de dados
    - Collection de usuário
        - name
        - email
        - password
        - _id
        - createdAt
        - updatedAt
    - Collection de projeto
        - name
        - description
        - createdAt
        - updatedAt
        - user
        - tasks[{name, description, completed}]
     
    
