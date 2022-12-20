---
layout: ../../layouts/BlogPostLayout.astro
title: 'Mini-manual de Vi'
author: 'Lucas Timm'
pubDate: 2007-01-21
description: 'Some first impressions on my first few days working for IBM'
tags: ['vi', 'techlife', 'tutorial', 'unix']
---

Hi folks!

Tô meio sumido, trabalhando demais e tive uns problemas pessoais, mas estão se
resolvendo.

Sem idéia do que postar (algo interessante), eu colocaria o tutorial de Screen
do meu amigo Caio, mas ainda não é tempo. Calma, Caio, colocarei em breve! Mas
hoje algo rapidinho sobre um maravilhoso editor que, muita gente (ainda) morre
de medo: O vi!!!

**Explicação:**

O editor vi é onipresente em todo sistema operacional Unix-based ou Unix-like.
Ou, pelo menos alguma forma "adulterada" dele (vim) ou algum clone (elvis).

Mas, na prática, a usuabilidade é igual. Lets go? Digite ae,
`vi /algum/arquivo.txt` ou simplesmente `vi` (para abrir um texto vazio).

**Os modos de operação**

O vi é dividido em dois modos de operação. O modo de comando (command) e o modo
de inserção (insert). Quando estiver em modo de inserção, as teclas digitadas
entrarão como caracteres no texto. Para voltar ao modo de comando, pressinar a
tecla `ESC`.

Recomendo, após qualquer caractere digitado, bater na tecla `ESC`. Não estranhe
se virar um vício.

**Enfim, os comandos \o/**

Após a noção de como a criança funciona, chegamos à parte r0x: Os comandos.

- `i` - Entar em modo de inserção
- `o` - Insere uma linha abaixo do cursor e entra em modo de inserção
- `O` - Insere uma linha acima do cursor e entra em modo de inserção
- `h` - Move o cursor pra trás
- `j` - Move o cursor pra linha de baixo
- `k` - Move o cursor pra linha de cima
- `l` - Move o cursor pra frente
- `v + h, j, k` ou `l` - Seleciona o texto (segurar o `v`)
- `y` - Copia o texto recém selecionado
- `c` - Corta o texto recém selecionado
- `p` - Cola o texto recém copiado/cortado
- `x` - Apaga um caractere (`delete`)
- `shift + x` - Apaga um caractere (`backspace`)
- `dd` - Apaga uma linha inteira
- `u` - Desfaz a última alteração recém-feita
- `/string` - Procura pela ocorrência `string` no texto
- `n` - Passa para a próxima ocorrência previamente pesquisada
- `:!` - Executa um comando
- `:x /nome/do/arquivo.txt` - Salva com o nome designado e sai do vi
- `:x!` - Salva e sai de um arquivo já nomeado (caso esteja editando um
  existente)
- `:w /nome/do/arquivo.txt` - Salva o texto com o nome especificado
- `:wq` - Salva e sai
- `:wq!` - Salva e sai sem pedir confirmação
- `ZZ` - Também, salva e sai sem pedir confirmação e sem tchauzinho
- `:e /nome/do/arquivo.txt` - Abre o arquivo para edição
- `:u` - Desfaz todas as alterações desde o último salvamento

E tá bom por hoje, vou dormir. É importante lembrar que, se você cria o arquivo
antes de editá-lo com o vi, já com uma extensão (por exemplo `touch script.c`)
ele já abrirá o arquivo com o highlight próprio pra linguagem C (extensão `.c`)
o que (obviamente) também vale pra outras extensões.

Ah, concluindo, pode parecer difícil o uso do vi no início, mas por incrível que
pareça, 20 minutos de uso e você estará craque.

Abraços,

Lucas Timm.
