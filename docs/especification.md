# Especificações do Projeto



## Personas

Nome: Carlos Souza
Idade: 45 anos
Profissão: Proprietário e gestor de uma academia de médio porte
Experiência: 13 anos no setor fitness
Desafios: Antes do sistema, Carlos enfrentava dificuldades para organizar os
cadastros dos alunos, perdia tempo com anotações manuais e tinha dificuldades
para acessar informações rapidamente.
Objetivo: Melhorar a gestão da academia com um sistema simples e eficiente para
cadastrar, buscar e atualizar informações dos alunos sem complicação.
Solução: Com o sistema, Carlos agora pode gerenciar os cadastros de forma rápida
e organizada, garantindo mais eficiência no seu dia a dia e melhorando a
experiência dos alunos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Gestor da academia | Cadastrar novos alunos de forma rápida e facíl          | evitar a perda de tempo com processos manuais e reduzir erros de cadastro.            |
|Recepcionista      | Buscar informações de alunos em segundos                | Atender os alunos de forma ágil e eficiente durante os horários de pico.|

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

ID | Descrição | Prioridade |
| :---- | :---- | :---- |
| RF-01 | O sistema deve permitir o cadastro de novos alunos, incluindo nome, telefone e e-mail. | ALTA |
| RF-02 | O sistema deve permitir a exclusão de cadastros de alunos que não frequentam mais a academia. | ALTA |
| RF-03 | O sistema deve permitir a edição de informações dos alunos, como telefone, nome, e-mail. | ALTA |
| RF-04 | O sistema deve permitir a busca de alunos por nome, telefone ou e-mail. | ALTA |
| RF-05 | O sistema deve exibir uma lista de todos os alunos cadastrados. | ALTA |
| RF-06 | O sistema deve permitir a filtragem de alunos por plano (mensal, trimestral, anual). | ALTA |
| RF-07 | O sistema deve permitir o login de usuários (gestores e recepcionistas) com senha. | ALTA |
| RF-08 | O sistema deve permitir a alteração de senha dos usuários (gestores e recepcionistas). | MÈDIA |
| RF-09 | O sistema deve exibir uma mensagem de confirmação ao cadastrar, editar ou excluir um aluno. | BAIXA |
| RF-10 | O sistema deve validar campos obrigatórios durante o cadastro (ex.: nome e telefone). | ALTA |
| RF-11 | O sistema deve permitir a exportação da lista de alunos para um arquivo CSV. | BAIXA |
| RF-12 | O sistema deve permitir a impressão da lista de alunos. | BAIXA |


### Requisitos não Funcionais

| ID | DESCRIÇÃO | PRIORIDADE |
| :---- | :---- | :---- |
| RNF-01 | O sistema deve ser responsivo, funcionando corretamente em dispositivos móveis e desktops. | ALTA |
| RNF-02 | O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Edge e Safari). | MALTA |
| RNF-03 | O sistema deve ser publicado em um ambiente público, como GitHub Pages ou um servidor web. | ALTA |
| RNF-04 | O sistema deve ter um bom nível de contraste entre texto e fundo, garantindo acessibilidade.  | MÉDIA |
| RNF-05 | O sistema deve carregar em menos de 3 segundos, mesmo com até 500 cadastros. | MÉDIA |
| RNF-06 | O sistema deve armazenar os dados dos alunos no LocalStorage do navegador.| ALTA |
| RNF-07 | O sistema deve garantir a persistência dos dados no navegador, mesmo após o fechamento da aba. | ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
