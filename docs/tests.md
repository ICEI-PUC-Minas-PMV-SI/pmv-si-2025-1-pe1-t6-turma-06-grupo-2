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

**Caso de Teste** | **CT01 - Criação de conta**
:--------------: | ------------
**Procedimento**  | 1) Acesse a página inicial do sistema <br> 2) Clique em "Criar conta" <br> 3) Preencha os campos obrigatórios (nome, empresa, email, senha) <br> 4) Clique em "Criar"
**Requisitos associados** | 
**Resultado esperado** | Conta criada com sucesso, e ir para página principal
**Dados de entrada** | Nome: João Silva, Email emailteste@gmail.com, Empresa: EmpresaTeste, Senha ******
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Cadastro de novo aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a página principal do sistema <br> 2) Clique em "Novo Aluno" <br> 3) Preencha os campos obrigatórios (nome, telefone, ) <br> 4) Clique em "Cadastrar"
**Requisitos associados** | RF-01, RF-10
**Resultado esperado** | Aluno cadastrado com sucesso e listado na página inicial
**Dados de entrada** | Nome: João Silva, Telefone: (31) 99999-9999.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Exclusão de aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a lista de alunos <br> 2) Selecione um aluno <br> 3) Clique em "Excluir" <br> 4) Confirme a exclusão
**Requisitos associados** | RF-02
**Resultado esperado** | Aluno removido da lista
**Dados de entrada** | Aluno previamente cadastrado
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Edição de dados do aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a lista de alunos <br> 2) Clique em "Editar" no aluno desejado <br> 3) Modifique os dados <br> 4) Clique em "Salvar"
**Requisitos associados** | RF-03
**Resultado esperado** | Informações atualizadas com sucesso
**Dados de entrada** | Novo telefone: (31) 98888-8888
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Busca de aluno**
:--------------: | ------------
**Procedimento**  | 1) Acesse a lista de alunos <br> 2) Use a barra de busca para digitar o nome/telefone. <br> 3) Clique em "Buscar"
**Requisitos associados** | RF-04
**Resultado esperado** | Exibição dos resultados correspondentes à busca
**Dados de entrada** | Nome: João
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Listar todos os alunos**
:--------------: | ------------
**Procedimento**  | 1) Acesse o sistema com login válido <br> 2) Vá até a página de alunos
**Requisitos associados** | RF-05
**Resultado esperado** | Listagem completa dos alunos cadastrados
**Dados de entrada** | Acesso simples à interface
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Filtro por plano**
:--------------: | ------------
**Procedimento**  | 1) Vá até a listagem de alunos <br> 2) Utilize o filtro de plano (mensal, trimestral, anual)
**Requisitos associados** | RF-06
**Resultado esperado** | Alunos com o plano selecionado são listados
**Dados de entrada** | Filtro: Plano mensal
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Login de usuários**
:--------------: | ------------
**Procedimento**  | 1) Acesse a tela de login <br> 2) Digite e-mail e senha válidos <br> 3) Clique em "Entrar"
**Requisitos associados** | RF-07
**Resultado esperado** | Redirecionamento para o sistema
**Dados de entrada** | Email: teste@gmail.com, Senha: teste
**Resultado obtido** | Sucesso



**Caso de Teste** | **CT09 - Mensagem de confirmação**
:--------------: | ------------
**Procedimento**  | 1) Execute ação de excluir aluno
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






**Caso de Teste** | **CT11 - Compatibilidade com navegadores**
:--------------: | ------------
**Procedimento**  | 1) Acesse o sistema nos navegadores Chrome, Firefox, Edge e Safari
**Requisitos associados** | RNF-02
**Resultado esperado** | Funcionamento correto em todos os navegadores
**Dados de entrada** | Acesso via navegador
**Resultado obtido** | Sucesso



**Caso de Teste** | **CT12 - Contraste e acessibilidade**
:--------------: | ------------
**Procedimento**  | 1) Verifique se há contraste suficiente entre texto e fundo
**Requisitos associados** | RNF-04
**Resultado esperado** | Texto legível e interface acessível
**Dados de entrada** | Cores da interface
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT13 - Performance com até vários cadastros**
:--------------: | ------------
**Procedimento**  | 1) Cadastre até 10 alunos <br> 2) Meça o tempo de carregamento
**Requisitos associados** | RNF-05
**Resultado esperado** | Carregamento inferior a 3 segundos
**Dados de entrada** | 10 registros
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT14 - Armazenamento LocalStorage**
:--------------: | ------------
**Procedimento**  | 1) Cadastrar aluno e recarregar a página <br> 2) Verificar persistência dos dados
**Requisitos associados** | RNF-06, RNF-07
**Resultado esperado** | Dados mantidos após o fechamento da aba
**Dados de entrada** | Cadastro de aluno
**Resultado obtido** | Sucesso

| *Caso de Teste* | *CT15 - Edição de funcionário* |
|-----------------|-------------------------------|
| Procedimento | 1) Acesse a lista de funcionários  <br> 2) Clique em "Editar" no funcionário desejado <br> 3) Modifique os dados (ex.: cargo ou e-mail) <br> 4) Clique em "Salvar" |
| Requisitos associados | RF-14 |
| Resultado esperado | Informações do funcionário atualizadas corretamente |
| Dados de entrada | Novo cargo: Coordenador |
| Resultado obtido | Sucesso |

| *Caso de Teste* | *CT16 - Exclusão de funcionário* |
|-----------------|-------------------------------|
| Procedimento | 1) Acesse a lista de funcionários <br> 2) Selecione um funcionário <br> 3) Clique em "Excluir" <br> 4) Confirme a exclusão |
| Requisitos associados | RF-15 |
| Resultado esperado | Funcionário removido da base de dados |
| Dados de entrada | Funcionário previamente cadastrado |
| Resultado obtido | Sucesso |

| *Caso de Teste* | *CT17 - Listagem de funcionários* |
|-----------------|-------------------------------|
| Procedimento | 1) Acesse a área administrativa <br> 2) Clique em "Funcionários" |
| Requisitos associados | RF-16 |
| Resultado esperado | Todos os funcionários cadastrados são exibidos na tela |
| Dados de entrada | Acesso à área de funcionários |
| Resultado obtido | Sucesso |

| *Caso de Teste* | *CT18 - Login de funcionário* |
|-----------------|-------------------------------|
| Procedimento | 1) Acesse a tela de login <br> 2) Digite o e-mail e senha do funcionário <br> 3) Clique em "Entrar" |
| Requisitos associados | RF-17 |
| Resultado esperado | Funcionário autenticado com sucesso e redirecionado para a área interna |
| Dados de entrada | Email: ana.costa@empresa.com, Senha: 123456 |
| Resultado obtido | Sucesso |


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

## Registro dos Testes de Software

Esta seção apresenta o relatório com evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Cada caso de teste documenta um vídeo ou animação que comprove o funcionamento da funcionalidade.

| *Caso de Teste* | *CT01 - Criar conta* |
|-----------------|----------------------|
| Requisito Associado | RF-01 - O sistema deve permitir a criação de contas |
| Link do vídeo do teste realizado: | https://1drv.ms/v/c/fe358090ac8b669f/ES9GbvDrepNGvquqxsXaJbUBy-wHcFOFTpsX7UnMhWg_Hw?e=XSXcHL |

| *Caso de Teste* | *CT02 - Cadastro de aluno* |
|-----------------|---------------------------|
| Requisito Associado | RF-01 - O sistema deve permitir o cadastro de novos alunos, incluindo nome, telefone e e-mail |
| Link do vídeo do teste realizado: |https://1drv.ms/v/c/fe358090ac8b669f/EexnRakhQtFPgimIc7M9o9YBG3Fp4hcv1cHIaXwrwN_WNg?e=oVodeC |

| *Caso de Teste* | *CT03 - Exclusão de aluno* |
|-----------------|---------------------------|
| Requisito Associado | RF-02 - O sistema deve permitir a exclusão de cadastros de alunos que não frequentam mais a academia |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EcNnPtVNlZRJmbHMZRI1KZoBOhTFFXcim4PHc8KPCQctHQ?e=5PCLzH] |

| *Caso de Teste* | *CT04 - Edição de dados* |
|-----------------|---------------------------|
| Requisito Associado | RF-03 - O sistema deve permitir a edição de informações dos alunos |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EbnyKDPcPW1ImlNd1ExABdcBhGwCLm5AmYMUi0X2H2IIgw?e=YfTbc3] |

| *Caso de Teste* | *CT05 - Busca de alunos* |
|-----------------|---------------------------|
| Requisito Associado | RF-04 - O sistema deve permitir a busca de alunos por nome, telefone ou e-mail |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EaLo_RtSnrNBsazY_MjVoNcBlNoigH-qloprmcCgB_93tg?e=HgWBew] |

| *Caso de Teste* | *CT06 - Exibir lista de alunos* |
|-----------------|---------------------------|
| Requisito Associado | RF-05 - O sistema deve exibir uma lista de todos os alunos cadastrados |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EWf2ZquEegFHonPtCulr0f4BUe2FfzUtxyXtAKwd1ywlKA?e=KBAMlO] |

| *Caso de Teste* | *CT07 - Filtragem por plano* |
|-----------------|---------------------------|
| Requisito Associado | RF-06 - O sistema deve permitir a filtragem de alunos por plano |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EeWeR0uXUapPsfkGjVoxy-8BlQEtpQyfDn_X1w7H_KR-kg?e=3bHFbO] |

| *Caso de Teste* | *CT08 - Login de usuário* |
|-----------------|---------------------------|
| Requisito Associado | RF-07 - O sistema deve permitir o login de usuários com senha |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EZvoXNm6dB1AtQvE06PRMUgBq_W72Oznbta3sqtjhIMf8A?e=onCRmH] |



| *Caso de Teste* | *CT09 - Mensagem de confirmação* |
|-----------------|---------------------------|
| Requisito Associado | RF-09 - O sistema deve exibir uma mensagem de confirmação ao excluir um aluno |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/ETf4B6hvWohNqGYQ6wheEqkBPW2B628uHkbiPXPcPN2dVA?e=ePd5Mi] |

| *Caso de Teste* | *CT10 - Validação de campos obrigatórios* |
|-----------------|---------------------------|
| Requisito Associado | RF-10 - O sistema deve validar campos obrigatórios durante o cadastro |
| Link do vídeo do teste realizado: | [[Inserir link do vídeo aqui]](https://sgapucminasbr-my.sharepoint.com/personal/784254_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=Efbc6KDTLFNFhrnhpSbTxX0BY0tHnLYaII1E3w0K67ydbA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=PRLDFt) |



| *Caso de Teste* | *CT11 - Compatibilidade com navegadores* |
|-----------------|---------------------------|
| Requisito Associado | RF-12 - O sistema deve oter um funcionamento correto em todos os navegadores |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EX_q0fBOtU1GqISWk_VRzNYBygoSd8Ll_zYdmvNq2JuuWw?e=su1QUk] |



| *Caso de Teste* | *CT12 - Contraste e acessibilidade* |
|-----------------|---------------------------|
| Requisito Associado | RF-12 - O sistema deve ter oexto legível e interface acessível |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EeR0oNKBoz1BgmxK2ZV08VIBH_JlgvSHsSGaVmkX2SVy8g?e=SkjRzc] |

| *Caso de Teste* | *CT13 - Performance com vários cadastros* |
|-----------------|---------------------------|
| Requisito Associado | RF-12 - O sistema deve ter carregamento inferior a 3 segundos |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/EXGzrNrhZHlMhuY7XYay59YBPy3zv5Unj455drMgXyr6gg?e=siU1c4] |

| *Caso de Teste* | *CT14 - Armazenamento LocalStorage* |
|-----------------|---------------------------|
| Requisito Associado | RF-12 - O sistema deve ter dados mantidos após o fechamento da aba |
| Link do vídeo do teste realizado: | [https://1drv.ms/v/c/fe358090ac8b669f/ESz7ybplHB9OpDS-gVRMnccBAJZpw47awO5J57Er4gQiag?e=OMWPLq] |
---

| *Caso de Teste* | *CT15 - Edição de funcionário* |
|-----------------|-------------------------------|
| Requisito Associado | RF-14 - O sistema deve permitir a edição de dados dos funcionários |
| Link do vídeo do teste realizado: | https://1drv.ms/v/c/fe358090ac8b669f/EY45koNyumtFh1JoN7ga2QMBIjnMXBMkEZAJV3s3SPKsxg?e=DckiVb |

| *Caso de Teste* | *CT16 - Exclusão de funcionário* |
|-----------------|-------------------------------|
| Requisito Associado | RF-15 - O sistema deve permitir a exclusão de registros de funcionários |
| Link do vídeo do teste realizado: | https://1drv.ms/v/c/fe358090ac8b669f/ERc9GHIBDbVEhJ4hbXBI9bUB4B4Ceg0h-uhS8ILnXYXJtg?e=R7Xu6F |

| *Caso de Teste* | *CT17 - Listagem de funcionários* |
|-----------------|-------------------------------|
| Requisito Associado | RF-16 - O sistema deve listar todos os funcionários cadastrados |
| Link do vídeo do teste realizado: |https://1drv.ms/v/c/fe358090ac8b669f/EYb6nm7QH_FMqTw5BIpwunsB-00z24542LjY4JB_htOJMw?e=8sHM7P  |

| *Caso de Teste* | *CT18 - Login de funcionário* |
|-----------------|-------------------------------|
| Requisito Associado | RF-17 - O sistema deve permitir o login de funcionários com credenciais válidas |
| Link do vídeo do teste realizado: |  |

Caso deseje, posso atualizar os links conforme os vídeos forem sendo gravados. É só me enviar!




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



