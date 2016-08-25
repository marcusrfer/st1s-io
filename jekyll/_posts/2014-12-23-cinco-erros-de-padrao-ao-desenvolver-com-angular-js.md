---
layout: post
title:  "5 erros de padrão ao desenvolver com angular.js"
subtitle: "Dicas para iniciantes em angular"
date:   2014-12-23
category: angularjs
categories: [angularjs]
tags: [angularjs]
featured: false
image: false
comments: true
description: O angular.js simplesmente não dá erro, é impressionante como você pode escrever um verdadeiro spaguetti.js que tudo funciona, em termos. [update 25/08/2016]
---

Quando realmente comecei a trabalhar com angular.js, digo utilizando ele somente como framework para todo o frontend, e não somente como uma coisinha legal dentro de alguma outra coisa qualquer, achava incrível a capacidade de escrever tudo e resolver problemas sem muitos erros, durante a fase de prototipação. O angular simplesmente não dá erro, é impressionante como você pode fazer um verdadeiro spaguetti.js que tudo vai funcionar, em termos.

O problema do macarrão.js está na fase em que você precisa crescer ~~seu code~~ sua aplicação, imagina um sistema com várias rotas, módulos, diretivas, services, componentes, etc.. 
Fora que uma coisa é escrever pra você entender, outra é para que o cara la do outro lado continente entenda.

um exemplo de como seria essa organização por features, recomendada por um dos maiores evangelistas sobre angular, [@johnpapa](https://twitter.com/john_papa).

```                            
├── Login
|   ├── login.module.js      
│   ├── login.factory.js
│   ├── login.service.js
│   └── etc..
├── Dashboard
|   ├── dashboard.module.js      
│   ├── login.factory.js
│   ├── login.service.js
│   └── etc..
├── Cliente
|   ├── cliente.module.js      
│   ├── cliente.factory.js
│   ├── cliente.service.js
│   └── etc..
└── .gitignore                                  
```

Além de organizar nossas pastas por features, você terá que evoluir, testar e dar manutenção. Se não seguir alguns padrões de desenvolvimento, com certeza terá problemas

Baseando-me no style guide do Papa, resolvi apontar 5 erros de padrão, que na minha opnião, são os mais críticos para quem está começando a trilhar este caminho.


# 1 - Princípio da responsabilidade única

Primeira regra

- Defina um componente por arquivo

O exemplo abaixo define um módulo app e sua dependência (ngRoute), controlador, factory tudo no mesmo arquivo.

```javascript
/* evitar */
angular
      .module('app', ['ngRoute'])
      .controller('SomeController', SomeController)
      .factory('someFactory', someFactory);

function SomeController() { }

function someFactory() { }
```

Agora o mesmo só que separando em seus próprios arquivos.

```javascript
/* recomendado */

// app.module.js
angular
      .module('app', ['ngRoute']);

/* recomendado */

// someController.js
angular
      .module('app')
      .controller('SomeController', SomeController);

function SomeController() { }

/* recomendado */

// someFactory.js
angular
      .module('app')
      .factory('someFactory', someFactory);

function someFactory() { }
```

# 2 - IIFE
### Javascript Closures

- Envolva seus componentes AngularJS em uma "Immediately Invoked Function Expression" - IIFE.

**Por que?:** Uma expressão invocada imediatamente, ajuda a prevenir colisões fazendo com que variáveis deixem de existir além do esperado no escopo global.

**Por que?** Quando seu código é minificado e distribuído em um único arquivo, você poderá ter colisões entre nomes de varáveis. O IIFE irá proteger, promovendo um escopo de variáveis para cada arquivo.

```javascript
/* evitar */
// logger.js
angular
    .module('app')
    .factory('logger', logger);

// a função logger é adicionada como uma variável global
function logger() { }

// storage.js
angular
    .module('app')
    .factory('storage', storage);

// a função storage é adicionada como uma variável global 
function storage() { }

/**
* recomendado 
*
* com 'use strict' as variáveis trabalham de forma isolada
*/

// logger.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('logger', logger);

    function logger() { }
})();

// storage.js
(function() {
    'use strict';

    angular
        .module('app')
        .factory('storage', storage);

    function storage() { }
})();
```

# 3 - Diretivas
- Crie uma diretiva por arquivo, com o mesmo nome.

**Por que?:** É muito mais fácil juntar tudo em um arquivo só, porém difícil de dar manutenção e reutilizar em diferentes módulos.

```javascript
/* evitar */
/* directives.js */

angular
    .module('app.widgets')

    /* uma diretiva específica */
    .directive('orderCalendarRange', orderCalendarRange)

    /* uma diretiva que pode ser bastante reutilizada */
    .directive('salesCustomerInfo', salesCustomerInfo)

    /* uma diretiva que pode ser bastante reutilizada */
    .directive('sharedSpinner', sharedSpinner);


function orderCalendarRange() {
    /* implementação */
}

function salesCustomerInfo() {
    /* implementação */
}

function sharedSpinner() {
    /* implementação */
}

/* recomendado */
/* calendarRange.directive.js */

/**
* @doc
* @example <div acme-order-calendar-range></div>
*/
angular
    .module('sales.order')
    .directive('acmeOrderCalendarRange', orderCalendarRange);

function orderCalendarRange() {
    /* implementação */
}

/* recomendado */
/* customerInfo.directive.js */

/**
* @doc
* @example <div acme-sales-customer-info></div>
*/    
angular
    .module('sales.widgets')
    .directive('acmeSalesCustomerInfo', salesCustomerInfo);

function salesCustomerInfo() {
    /* implementação */
}

/* recomendado */
/* spinner.directive.js */

/**
* @doc
* @example <div acme-shared-spinner></div>
*/
angular
    .module('shared.widgets')
    .directive('acmeSharedSpinner', sharedSpinner);

function sharedSpinner() {
    /* implementação */
}
```

**Nota:** Existem muitas opções para nomear diretivas, escolha uma que a torne limpa e distinta.


### Prefixo único para a diretiva

- Forneça um prefixo curto, único e descritivo, como `acmeSalesCustomerInfo` que é declarado no HTML como `acme-sales-customer-info`.

**Por que?:** Um prefixo identifica a origem e contexto da diretiva. Por exemplo um prefixo `cc` pode indicar que a diretiva foi originalmente criada como parte de "CodeCamper", tal como `acme-` pode indicar a diretiva como da empresa "Acme".

**Nota:** Evite utilizar `ng-` pois este prefixo é reservado as diretivas do AngularJS, assim como `ion-` para o framework Ionic.

# 4 - Controllers

### controllerAs View Syntax

- Ao invés do clássico `$scope` pra tudo quanto é lado, utilize o `controllerAs` syntax.

**Por que?:** Controller são construídos, renovados e provêem de uma instância única. Sendo assim o `controllerAs` é mais próximo de um construtor JavaScript do que `$scope`.

**Por que?:** Ele promove o uso de binding com objetos na view através de pontos, ex. `customer.name` ao invés de `name`, isto facilita leitura, contexto e evita problemas de referência que ocorrem frequentemente sem uso de "pontos".

**Por que?:** Ajuda evitar a necessidade de ficar chamando `$parent` toda hora em nested controllers.

### controllerAs Controller Syntax

- Utilize controllerAs ao invés do modo clássico com `$scope`.

**Por que?:** controllerAs é sintático e mais contextual que o `$scope`. Nada muda em relação ao acesso dos métodos do `$scope`.

**Por que?:** Ajuda contra a tentação de usar métodos do `$scope` no controller, quando na verdade poderia estar em uma factory, ou simplesmente não existir. Considere sempre utilizar `$scope` em um factory, no controlador apenas quando for extremamente necessário. Ex: Quando precisar publicar ou acessar eventos usando `$emit`, `$broadcast` ou `$on`, pense em mover a lógica para uma factory e invocar pelo controller.

```javascript
/* evitar */
function Customer($scope) {
    $scope.name = {};
    $scope.sendMessage = function() { };
}

/* recomendado - mas tem como melhorar */
function Customer() {
    this.name = {};
    this.sendMessage = function() { };
}
```

# controllerAs, com "vm"

- Utilize uma variável de captura quando estiver usando controllerAs syntax. Defina um nome de variável consistente como "vm", que representa o padrão ViewModel.

**Por que?:** A keyword `this` é contextual e quando usado em uma função dentro de um controlador, o mesmo poderá alterar o seu contexto. Capturando o valor de `this` e atribuindo em outra variável, você continuará tendo acesso ao contexto principal.

```javascript
/* evitar */
function Customer() {
    this.name = {};
    this.sendMessage = function() { };
}

/* recomendado */
function Customer() {
    var vm = this;
    vm.name = {};
    vm.sendMessage = function() { };
}
```

**Nota:** Você pode anular qualquer jshint warning colocando o comentário abaixo.

```javascript
/* jshint validthis: true */
var vm = this;
```

**Nota:** Quando criar watches em um controlador que utiliza controllerAs syntax, você pode observar qualquer membro da variável `vm`, usando a syntax do exemplo abaixo. (Cuidado ao criar watches pois eles adicionam mais carga ao diggest cycle)

```html
<input ng-model="vm.title"/>
```

```javascript
function SomeController($scope, $log) {
    var vm = this;
    vm.title = 'Some Title';

    $scope.$watch('vm.title', function(current, original) {
        $log.info('vm.title was %s', original);
        $log.info('vm.title is now %s', current);
    });
}
```

# 5 - Estrutura das pastas por feature

- Crie pastas com o nome da feature que ela representa.

**Por que?:** A estrutura é legível, não existem nomes redundantes e repetitivos. O desenvolvedor consegue localizar rapidamente o código e identificar o que cada arquivo representa.

```javascript
/**
 * recomendado
 */

    ├── Login
    |   ├── login.module.js      
    │   ├── login.factory.js
    │   ├── login.service.js
    │   └── etc..
    ├── Dashboard
    |   ├── dashboard.module.js      
    │   ├── login.factory.js
    │   ├── login.service.js
    │   └── etc..
    ├── Cliente
    |   ├── cliente.module.js      
    │   ├── cliente.factory.js
    │   ├── cliente.service.js
    │   └── etc..
    └── .gitignore                                  
```

**Nota:** Utilizar o modelo folder-by-type representado acima, requer um trabalho muito maior para localizar e trabalhar em vários recursos ao mesmo tempo

# Conclusão
Para quem está iniciando com angular.js, seguir estes 5 pontos vai evitar muita dor de cabeça. Porém recomendo intensamente que leia e siga o [Style Guide](https://github.com/johnpapa/angularjs-styleguide) completo de [@jhonpapa](https://twitter.com/john_papa).

#### [update 26/08/2016]

Atualmente utilizo uma estrutura de pasta hibrida, baseada em modulos e com outros niveis de abstrações.

No caso seria algo parecido com:

```
├── README.md
├── gulpfile.js                               
├── package.json                                 <- dependencias de desenvolvimento                             
├── client
|   ├── bower.json                               <- dependencias do cliente          
│   └── src                                      <- código fonte do cliente
│       ├── app
│       │   └── modules                      
│       │   │   ├── home
│       │   │   │   ├── home.config.js
│       │   │   │   ├── home.component.js
│       │   │   │   ├── home.spec.js
│       │   │   │   ├── home.html
│       │   │   │   ├── home.css
│       │   └── themes         
│       │   │   ├── default
│       │   │   │   ├── theme.html
│       │   ├── app.config.js                    <- config phase do angular
│       │   ├── app.run.js                       <- run phase do angular
│       │   ├── app.module.js                    <- carregamento de modulos
│       ├── assets
│       └── index.html                           <- template principal
└── .gitignore                                  
```