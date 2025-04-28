**Projeto FIT CONTROL**

**Integrantes:**  
- Anderson Henrique Costa Carvalho
- Eduardo Pereira Oliveira
- Eric Oliveira Vila Real
- Diogo Garcia Silva de Paula
- Maria Luisa da Silva Romancini

# Problema

A gestão manual dos cadastros de alunos em academias gera uma série de desafios, como desorganização, perda de tempo, dificuldades no acesso às informações e riscos de erros humanos. Esses problemas impactam diretamente a eficiência operacional e a qualidade do atendimento ao cliente, tornando necessária a implementação de uma solução tecnológica que otimize esses processos


# Objetivos

## Objetivo Geral

Desenvolver um sistema de cadastro online para alunos de uma academia, com o intuito de modernizar e simplificar a gestão de informações, garantindo maior eficiência, segurança e acessibilidade.

## Objetivos Específicos


Coletar dados dos alunos: Criar um formulário digital para registro de informações pessoais, frequências, treinos etc.

- Coletar dados dos alunos: Criar um formulário digital para registro de informações pessoais, treinos, frequências.
- Excluir registros: Permitir a remoção de cadastros de alunos que não frequentam mais a academia.
- Organização e busca rápida: Implementar funcionalidades de filtro e busca para facilitar o acesso às informações.
- Editar e atualizar dados: Oferecer a possibilidade de atualizar informações dos alunos de forma ágil e intuitiva.
- Acessibilidade: garantir que o sistema funcione de forma responsivo para aparelhos celulares e computadores.

# Justificativa

O tema do sistema de gestão para academias foi escolhido devido à crescente
demanda por soluções tecnológicas no setor fitness, aliada à necessidade de modernização e eficiência na administração de estabelecimentos desse segmento.
Atualmente, muitas academias ainda dependem de métodos manuais para gerenciar cadastros de alunos, o que resulta em processos lentos, propensos a erros e pouco escaláveis. 
A implementação de um sistema online visa suprir essas lacunas, oferecendo uma ferramenta que centraliza e organiza as informações de forma segura e acessível.


# Público Alvo

O público-alvo do sistema inclui:
Gestores e administradores de academias: Profissionais responsáveis pela administração e organização dos estabelecimentos.
Recepcionistas e funcionários de atendimento: Pessoas que necessitam acessar e atualizar informações dos alunos diariamente.


## Persona

Nome: Carlos Souza
Idade: 45 anos
Profissão: Proprietário e gestor de uma academia de médio porte
Experiência: 13 anos no setor fitness
Desafios: Antes do sistema, Carlos enfrentava dificuldades para organizar os cadastros dos alunos, perdia tempo com anotações manuais e tinha dificuldades para acessar informações rapidamente.
Objetivo: Melhorar a gestão da academia com um sistema simples e eficiente para cadastrar, buscar e atualizar informações dos alunos sem complicação.
Solução: Com o sistema, Carlos agora pode gerenciar os cadastros de forma rápida e organizada, garantindo mais eficiência no seu dia a dia e melhorando a experiência dos alunos.


# **Requisitos funcionais e não funcionais**

## Requisitos funcionais

| ID | Descrição | Prioridade |
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

## Requisitos Não Funcionais

| ID | DESCRIÇÃO | PRIORIDADE |
| :---- | :---- | :---- |
| RNF-01 | O sistema deve ser responsivo, funcionando corretamente em dispositivos móveis e desktops. | ALTA |
| RNF-02 | O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Edge e Safari). | MALTA |
| RNF-03 | O sistema deve ser publicado em um ambiente público, como GitHub Pages ou um servidor web. | ALTA |
| RNF-04 | O sistema deve ter um bom nível de contraste entre texto e fundo, garantindo acessibilidade.  | MÉDIA |
| RNF-05 | O sistema deve carregar em menos de 3 segundos, mesmo com até 500 cadastros. | MÉDIA |
| RNF-06 | O sistema deve armazenar os dados dos alunos no LocalStorage do navegador.| ALTA |
| RNF-07 | O sistema deve garantir a persistência dos dados no navegador, mesmo após o fechamento da aba. | ALTA |
