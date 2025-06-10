# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Cadastro de novo aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a página principal do sistema <br> 2) Clique em "Novo Aluno" <br> 3) Preencha os campos obrigatórios (nome, telefone, e-mail) <br> 4) Clique em "Cadastrar"
**Requisitos associados** | RF-01, RF-10
**Resultado esperado** | Aluno cadastrado com sucesso e listado na página inicial
**Dados de entrada** | Nome: João Silva, Telefone: (31) 99999-9999, Email: joao@email.com
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Exclusão de aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a lista de alunos <br> 2) Selecione um aluno <br> 3) Clique em "Excluir" <br> 4) Confirme a exclusão
**Requisitos associados** | RF-02
**Resultado esperado** | Aluno removido da lista
**Dados de entrada** | Aluno previamente cadastrado
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Edição de dados do aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a lista de alunos <br> 2) Clique em "Editar" no aluno desejado <br> 3) Modifique os dados <br> 4) Clique em "Salvar"
**Requisitos associados** | RF-03
**Resultado esperado** | Informações atualizadas com sucesso
**Dados de entrada** | Novo telefone: (31) 98888-8888
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Busca de aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a lista de alunos <br> 2) Use a barra de busca para digitar o nome/telefone/e-mail <br> 3) Clique em "Buscar"
**Requisitos associados** | RF-04
**Resultado esperado** | Exibição dos resultados correspondentes à busca
**Dados de entrada** | Nome: João
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Listar todos os alunos**
:--------------: | ------------
**Procedimento**  | 1) Acesse o sistema com login válido <br> 2) Vá até a página de alunos
**Requisitos associados** | RF-05
**Resultado esperado** | Listagem completa dos alunos cadastrados
**Dados de entrada** | Acesso simples à interface
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Filtro por plano**
:--------------: | ------------
**Procedimento**  | 1) Vá até a listagem de alunos <br> 2) Utilize o filtro de plano (mensal, trimestral, anual)
**Requisitos associados** | RF-06
**Resultado esperado** | Alunos com o plano selecionado são listados
**Dados de entrada** | Filtro: Plano mensal
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Login de usuários**
:--------------: | ------------
**Procedimento**  | 1) Acesse a tela de login <br> 2) Digite e-mail e senha válidos <br> 3) Clique em "Entrar"
**Requisitos associados** | RF-07
**Resultado esperado** | Redirecionamento para o sistema
**Dados de entrada** | Email: admin@email.com, Senha: 123456
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Alteração de senha**
:--------------: | ------------
**Procedimento**  | 1) Acesse configurações da conta <br> 2) Clique em "Alterar senha" <br> 3) Digite a nova senha e confirme <br> 4) Salve
**Requisitos associados** | RF-08
**Resultado esperado** | Senha alterada com sucesso
**Dados de entrada** | Nova senha: 654321
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Mensagens de confirmação**
:--------------: | ------------
**Procedimento**  | 1) Execute ações como cadastrar, editar ou excluir aluno
**Requisitos associados** | RF-09, RNF-08
**Resultado esperado** | Exibição de mensagens claras de confirmação ou erro
**Dados de entrada** | Diversos
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - Validação de campos obrigatórios**
:--------------: | ------------
**Procedimento**  | 1) Tente cadastrar aluno sem preencher nome ou telefone
**Requisitos associados** | RF-10
**Resultado esperado** | Exibição de mensagem de erro indicando os campos obrigatórios
**Dados de entrada** | Campos vazios
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT11 - Exportação de lista de alunos (CSV)**
:--------------: | ------------
**Procedimento**  | 1) Acesse a página de listagem de alunos <br> 2) Clique em "Exportar CSV"
**Requisitos associados** | RF-11
**Resultado esperado** | Download do arquivo CSV com os dados
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT12 - Impressão da lista de alunos**
:--------------: | ------------
**Procedimento**  | 1) Acesse a listagem de alunos <br> 2) Clique em "Imprimir"
**Requisitos associados** | RF-12
**Resultado esperado** | Exibição da interface de impressão do navegador
**Dados de entrada** | Nenhum
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT13 - Responsividade do sistema**
:--------------: | ------------
**Procedimento**  | 1) Acesse o sistema em dispositivos móveis e desktops
**Requisitos associados** | RNF-01
**Resultado esperado** | Interface adaptada corretamente ao tamanho da tela
**Dados de entrada** | Diversos dispositivos
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT14 - Compatibilidade com navegadores**
:--------------: | ------------
**Procedimento**  | 1) Acesse o sistema nos navegadores Chrome, Firefox, Edge e Safari
**Requisitos associados** | RNF-02
**Resultado esperado** | Funcionamento correto em todos os navegadores
**Dados de entrada** | Acesso via navegador
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT15 - Publicação em ambiente web**
:--------------: | ------------
**Procedimento**  | 1) Verifique se o sistema está acessível em ambiente público (GitHub Pages ou outro)
**Requisitos associados** | RNF-03
**Resultado esperado** | Sistema disponível publicamente
**Dados de entrada** | URL do projeto
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT16 - Contraste e acessibilidade**
:--------------: | ------------
**Procedimento**  | 1) Verifique se há contraste suficiente entre texto e fundo
**Requisitos associados** | RNF-04
**Resultado esperado** | Texto legível e interface acessível
**Dados de entrada** | Cores da interface
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT17 - Performance com até 500 cadastros**
:--------------: | ------------
**Procedimento**  | 1) Cadastre até 500 alunos <br> 2) Meça o tempo de carregamento
**Requisitos associados** | RNF-05
**Resultado esperado** | Carregamento inferior a 3 segundos
**Dados de entrada** | 500 registros
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT18 - Armazenamento LocalStorage**
:--------------: | ------------
**Procedimento**  | 1) Cadastrar aluno e recarregar a página <br> 2) Verificar persistência dos dados
**Requisitos associados** | RNF-06, RNF-07
**Resultado esperado** | Dados mantidos após o fechamento da aba
**Dados de entrada** | Cadastro de aluno
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta parte 1*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Criar conta parte 2*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



