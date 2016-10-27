---
layout: post
title:  "Dica rápida"
subtitle: "Como gerar números randômicos utilizando javascript"
date:   2016-08-27
category: javascript
tags: [javascript, lodash]
image: /static/article/lottery.jpg
comments: true
description:
---

Fala pessoALL.

Hoje vou falar de um jeito super rápido e prático de gerar números randômicos utilizando js.

Lá vai...

```javascript
 //exemplo usando node.js

 var numero = random(1, 100);
 console.log(numero);

 function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }
```

sacanagem.. esse é só o algoritimo do método `random` da biblioteca [`lodash`](https://lodash.com/docs).

utilizando pela biblioteca, se eu quisesse um número de 1 a 100, seria simplesmente

```js
//exemplo utilizando node.js

var _ = require('lodash'); // _ significa lodash
var numero = _.random(1, 100); // um inteiro entre 1 e 100
console.log(numero)    
```

Legal né?

Se quiser confere ai a [documentação do lodash](https://lodash.com/docs), tem muita coisa bacana lá.