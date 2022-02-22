# POC-NGRX
Essa prova de conceito foi desenvolvida para simplificar a utilização do gerenciamento de estado para aplicações em Angular. Através da biblioteca NgRx foi possível criar uma estrutura reativa para gerenciar um CRUD referente cadastramento e alteração de perfis.

Para exemplificar a ideia dessa POC, foram criadas 4 rotas do Angular para representar as operações básicas do CRUD (criação, consulta, atualização e destruição de dados). Dessa forma é possível mostrar a estrutura referente ao gerenciamento de estado que a tecnologia do NgRx disponibiliza.

A POC conta com um layout responsivo utilizando a tecnologia do Angular Material UI, além é claro das próprias funções do Angular.

## O que é NgRx?
NgRx é um framework para construir aplicações reativas em Angular. O NgRx fornece bibliotecas para:

* Gerenciando o estado global e local.
* Isolamento de efeitos colaterais para promover uma arquitetura de componentes mais limpa.
* Gestão de coleção de entidades.
* Integração com o Roteador Angular.
* Ferramentas do desenvolvedor que aprimoram a experiência do desenvolvedor ao criar muitos tipos diferentes de aplicativos.

### Pacotes
Os pacotes NgRx são divididos em algumas categorias principais

### Store
* [@ngrx/store:](https://ngrx.io/guide/store) Gerenciamento de estado global com tecnologia RxJS para aplicativos Angular, inspirados no Redux.
* [@ngrx/effects:](https://ngrx.io/guide/effects) Modelo de efeito colateral para @ngrx/store.
* [@ngrx/router-store:](https://ngrx.io/guide/router-store) Ligações para conectar o roteador angular ao @ngrx/store.
* [@ngrx/entity:](https://ngrx.io/guide/entity) Adaptador Entity State para gerenciar coleções de registros.
* [@ngrx/component-store:](https://ngrx.io/guide/component-store) Biblioteca autônoma para gerenciar o estado local/componente.

### Data
* [@ngrx/data:](https://ngrx.io/guide/data) Extensão para gerenciamento simplificado de dados de entidades.

### View
* [@ngrx/component:](https://ngrx.io/guide/component) Extensão para aplicativos Angular totalmente reativos.

### Developer Tooling
* [@ngrx/store-devtools:](https://ngrx.io/guide/store-devtools) Instrumentação para @ngrx/store que permite rastreamento visual de estado e depuração de viagem no tempo.
* [@ngrx/schematics:](https://ngrx.io/guide/schematics) Biblioteca de andaimes para aplicativos Angular usando bibliotecas NgRx.

# Referências 
* [Angular](https://angular.io/)
* [NGRX](https://ngrx.io/)
* [Angular Material](https://material.angular.io/)