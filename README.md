# Neste projeto:

- Primeiro curso:

  - Angular: Design de componentes com acessibilidade
  - https://cursos.alura.com.br/course/angular-introducao-componentes-acessibilidade

- Segundo curso:

  - Angular: Avançando no design de componentes com acessibilidade
  - https://cursos.alura.com.br/course/angular-avancando-componentes-acessibilidade

## A11yFormacaoAngularAlura

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
- o `forwardRef()` é utilizado quando o `acessor token` é declarado mas ainda não foi definido, seria a referência de algo que ainda está para existir;
- Quando é preciso fazer o `data binding` com atributos das tags, é necessário utilizar o `attr.` (exemplo: `[attr.aria-checked]`);
- Na parte do inspecionar do google, tem as funcionalidades do `Lighthouse` que pode ser utilizada para a verificação do site, essa verificação dará uma nota para o mesmo, pode-se fazer essa verificação/teste para os diversos fins, (exemplo: acessibilidade, melhores práticas, performance);
- É recomendável isolar a biblioteca que gera ids únicos, isso facilitará a manutenção do código;
- Quando está trabalhando com atributos das tags que só a presença dos mesmos já ativa a função (exemplo: disabled, checked), é necessário fazer `[attr.disabled]="disabled ? disabled : null"` e NÃO assim `[attr.disabled]="disabled"`, pois quando é adicionado `null` a atributos, os mesmo não serão criados, OBS: caso seja feita a lógica `[attr.disabled]="disabled ? disabled : false"`, o atributo será criado e com isso, nesse exemplo, será desativado, é preciso utilizar `null` para informar que não é necessário criar essa propriedade no elemento;
- Dica da alura: se você precisa de um botão que esteja desabilitado mas que ainda possa ganhar foco, utilize o atributo `aria-disabled`, `screen readers` irão anunciar o elemento como `disabled`, mas lembre-se: você precisará garantir que a ação do botão só seja disparada quando ele estiver habilitado novamente, geralmente no método chamado pelo botão;
- Quando o nome de uma propriedade da diretiva é o mesmo nome do selector da diretiva, pode-se utilizá-la da seguinte forma no html: `[appDisableControl]="false"` caso contrário, teria de ser utilizada assim: `appDisableControl [teste]="false"`, ou seja, teria de declarar a diretiva e passar o valor do parâmetro desejado;
- Tentar utilizar ao máximo as tags padrões do html, pois pode ser menos trabalhoso mas nem sempre será possível utilizar elas, há casos que não será possível;
- Para que navegadores antigos suportem o `animation module` (que o angular utiliza o `web animations`) é necessário ir no arquivo `polyfills.ts` e descomentar `import "web-animations-js";` (no vídeo, é na linha 29) e depois rodar o comando `npm install --save web-animations-js`;
- Para adicionar uma animação a um elemento normal (não sendo o `host element`), é adicionado desta maneira `<div [@fade] *ngIf="true">` (nesse exemplo a animação chama-se `fade` e o `*ngIf` está controlando quando aquele determinado elemento aparecerá na DOM), pode-se fazer um `bidding` para ativar e desativar a animação, assim `<div [@fade]="active" *ngIf="true">` (nesse exemplo a variável `active` é quem define quando a animação será ativa);
- O `(click)="$event.stopPropagation()"` faz com que pare a propagação do click, ou seja, quando clicado dentro do modal, ele não vai fechar pois com essa linha de código, o click não vai ser propagado até o overlay e com isso não vai acessar o click do overlay, que é quem faz o modal fechar, isso funciona para parar a propagação de eventos em árvores de filhos para pais;
- O angular só começa a tomar conta do ciclo de vida do seu componente a partir do `ngOnInit` o `constructor` do componente o angular não tem controle nenhum, quem tem o controle é o `Typescript/Javascript`, se tem alguma inicialização que o angular precisa saber se deu algum tipo de problema, é preciso colocá-la no `ngOnInit`;
- Alguns leitores de tela: `Jaws Screen Reader` (é pago e mais utilizado no ambiente corporativo, só para o windows), `NVDA Screen Reader` (é apenas para o firefox e só para windows), `VoiceOver Screen Reader` (só para mac) e o utilizado no curso, chamado de `ChromeVox Screen Reader` (é uma extensão para o chrome e completamente gratuita, quando eu fiz as aulas, esta já se chamava apenas `Screen Reader`);

## Extensão utilizada para Screen Reader

- https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/related?hl=pt-BR

## Documentação das normas de acessibilidade

- https://www.w3.org/WAI/standards-guidelines/wcag/
