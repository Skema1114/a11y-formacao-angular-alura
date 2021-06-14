# A11yP1FormacaoAngularAlura

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Comandos utilizados

ng g m shared/components/yes-no-button-group

ng g c shared/components/yes-no-button-group

npm i uuid@8.3.0

npm i --save-dev @types/uuid

## Anotações

- A sintaxe `[(value)]="yesNoAnswer"` só funciona trocando os valores da tela na doom porque o input chama-se `value` e o output com o event chama-se `valueChange`, este que possui o `EventEmitter`. Senão teria que ser `[value]="yesNoAnswer" (valueChange)="yesNoAnswer = $event"`;
- Com o `ngSubmit` caso ocorra algum erro, não haverá refresh na mesma, diferente se usar o `submit`;
- o `forwardRef()` é utilizado quando o `acessor token` é declarado mas ainda não foi definido, seria a referencia de algo que ainda esta para existir;
- Quando é preciso fazer o `data binding` com atributos das tags, é necessário utilizar o `attr.`, exemplo `[attr.aria-checked]`;
- Na parte do inspecionar do google, tem as funcionalidades do `Lighthouse` que pode ser utilizada para a verificação do site, essa verificação dará uma nota para o mesmo, pode-se fazer essa verificação/teste para os diversos fins, exemplo, acessibilidade, melhores prativas, performance, etc...;
- É recomendavél isolar a biblioteca que gera ids unicos, isso facilitará a manutenção do código;

## Extensão utilizada para Screen Reader

- https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/related?hl=pt-BR
