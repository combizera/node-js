# App

Gympass style app

## Requisitos Funcionais (RF)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas;
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## Regras de Negócio (RNs)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20min após ser criado;
- [ ] O check-in só pode ser validado por admin;
- [ ] A academia só poder ser cadastrada por admin

## Requisitos Não-funcionais (RNF)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

---

## Repository Pattern

### Vantagens:

- **Separação de Responsabilidades**: Desacopla a lógica de acesso a dados da lógica de negócios, tornando o código mais fácil de manter e testar.
- **Testabilidade**: Facilita testes unitários ao permitir o uso de repositórios mock em vez de conexões reais com o banco de dados.
- **Abstração**: Fornece uma camada clara de abstração para acesso a dados, facilitando a troca entre diferentes fontes de dados ou ORMs sem impactar a lógica de negócios.
- **Reutilização**: Promove a reutilização de código ao centralizar a lógica de acesso a dados em uma única classe de repositório.
- **Consistência**: Garante uma abordagem consistente para acesso a dados em toda a aplicação.

## Use Case Pattern

### Vantagens:

- **Isolamento da Lógica de Negócios**: Encapsula as regras de negócio em classes específicas de casos de uso, mantendo-as separadas de controladores e outras camadas.
- **Legibilidade**: Melhora a legibilidade do código ao definir claramente o propósito e o fluxo de cada caso de uso.
- **Escalabilidade**: Facilita a adição de novas funcionalidades ou a modificação de funcionalidades existentes sem impactar partes não relacionadas do código.
- **Testabilidade**: Simplifica os testes ao isolar a lógica de negócios em classes pequenas e focadas.
- **Princípio da Responsabilidade Única**: Incentiva a adesão ao Princípio da Responsabilidade Única, garantindo que cada classe de caso de uso tenha uma responsabilidade única e bem definida.

---

## TDD - Test Driven Development

Já conhecia o conceito pelo Pinguin Academy mas foi bem interessante ver a visão do Diego e também ele foi um pouco além e também apresentou o fluxo do TDD, o "Red/Green/Refactor".

1. Red: nesta fase, o desenvolvedor escreve um teste que deve falhar, ou seja, ele garante que o teste não passará sem implementar o código necessário.
2. Green: aqui, o desenvolvedor escreve a quantidade mínima de código necessária para fazer o teste passar.
3. Refactor: após o teste passar, o desenvolvedor refatora o código para melhorar a qualidade, sem alterar seu comportamento.
