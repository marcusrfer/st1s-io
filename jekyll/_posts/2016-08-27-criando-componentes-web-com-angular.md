---
layout: post
title:  "Web Component"
subtitle: "Criando componentes web com angular.js"
date:   2016-08-27
category: angularjs
tags: [angularjs]
image: /static/article/cubo-magico.jpg
comments: true
description:
---

Antes da versão 1.5 do angular.js tudo era feito com diretivas, tanto na manipulação do DOM quanto na componentização dos elementos. Agora podemos contar com uma nova feature na API, o `angular.component`. Com essa separação entre componentes e diretivas temos uma abstração melhor e mais organizada.

### Comparação

|   | Diretiva  | Componente | 
|---|---|---|
| bindings  |  Não | Sim (bind no controller)  |
| bindToController  | Sim (padrão: false)  |  Não |
| compile  |  Sim | Não  |
| controller  | Sim  | Sim (padrão function() {})  |
| controllerAs  |  Sim (padrão: false) | Sim (padrão: $ctrl)  |
| link functions  |  Sim | Não  |
| multiElement  | Sim  |  Não |
| priority  |  Sim | Não  |
| require  | Sim  |  Sim |
| restrict  |  Sim |  Não (restrito ao elemento apenas) |
| scope  | Sim (padrão: false)  |  Não (scope é sempre isolado) |
| template  | Sim  |  Sim, injetável |
| templateNamespace  |  Sim |  Não |
| templateUrl  | Sim |  Sim, injetável |
| terminal  | Sim  |  Não |
| transclude  |  Sim (padrão: false) | 	Sim (padrão: false)  |



#### Exemplo de uma diretiva que realiza uma simples contagem

```javascript
angular.directive('counter', function counter() {
  return {
    scope: {},
    bindToController: {
      count: '='
    },
    controllerAs: 'counter',
    controller: function () {
      function increment() {
        this.count++;
      }
      function decrement() {
        this.count--;
      }
      this.increment = increment;
      this.decrement = decrement;
    }   
  };
});
``` 

O mesmo exemplo em formato de componente

```javascript
angular.component('counter', {
  bindings: {
    count: '='
  },
  controller: function () {
    function increment() {
      this.count++;
    }
    function decrement() {
      this.count--;
    }
    this.increment = increment;
    this.decrement = decrement;
  }
});
```
Podemos perceber que ficou bem mais simples o uso com `component`.

Recentemente lancei um gerador javascript que possui todas a features do angular e agiliza o processo de desenvolvimento, se quiser dá uma [conferida lá](https://appfy.org).

Para maiores detalhes sobre o `component`, só [olhar na documentação](https://docs.angularjs.org/guide/component).

Se curtiu deixa um comment.

Cya.