---
layout: post
title:  "Dica rápida"
subtitle: "Como fechar issue no Github via commit"
date:   2016-08-27
category: github
tags: [github]
image: /static/article/github.png
comments: true
description:
---

Uma dica útil pra quem está começando nessa área da web, é de fechar issues no github via commits.

Se você não tava ligado, vamos supor que você tenha os repositórios `repo-a` e o repositório `repo-b` em uma conta de login `octo`. No `repo-a` existe a issue `#1`, e no `repo-b` issue `#2`

### Fechando uma issue

Digamos que esteja no repositório A e tenha resolvido a issue#1, basta explicitar na mensagem do commit


```shell
cd repo-a
git add -A //adiciona na arvore de alterações
git commit -am "resolvendo problema um. closes #1" //registra as alterações
git push origin master //envia para o github   
```

a palavra-chave `closes #1` é parseada pelo github e ele entende que é pra fechar a issue#1 do `repo-a`. existem outros sinônimos que também funcionam:

- close
- closes
- closed
- fix
- fixes
- fixed
- resolve
- resolves
- resolved

### Fechando uma issue de outro repositório


agora digamos que você esteja no repo a e tenha resolvido uma issue do repo b

```shell
cd repo-b
git add -A //adiciona na arvore de alterações
git commit -am "resolvendo problema dois. closes octo/repo-b#2" //registra as alterações
git push origin master //envia para o github   
```

### Fechando múltiplas issues

Pra fechar as duas issues de qualquer lugar

```shell
cd repo-b
git add -A //adiciona na arvore de alterações
git commit -am "resolvendo problemas. closes octo/repo-a#1 octo/repo-b#2" //registra as alterações
git push origin master //envia para o github   
```

Ou se for no mesmo repositório...

```shell
cd repo-b
git add -A //adiciona na arvore de alterações
git commit -am "resolvendo problemas. closes #1 closes #2" //registra as alterações
git push origin master //envia para o github   
```

E é isso ai, se curtiu deixa seu comentário.

Cya.

Fonte: [artigo do Github](https://help.github.com/articles/closing-issues-via-commit-messages/)