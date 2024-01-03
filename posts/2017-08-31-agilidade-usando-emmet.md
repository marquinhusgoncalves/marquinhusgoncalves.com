---
title: Escreva HTML com mais agilidade usando Emmet
date: 2017-08-31 20:00:00
---

E ai pessoal tudo bem?

Neste post quero comentar sobre o plugin [Emmet](https://emmet.io/).

Bom o Emmet é um plugin para HTML e CSS, que digitando menos você consegue
escrever mais código, com pequenas sentenças você cria estruturas grandes,
ganhando agilidade, produtividade e evitando ter que reescrever códigos.

Bom em primeiro lugar é possível instalar o Emmet em diversos editores como
[VSCode](https://code.visualstudio.com/),
[Sublime](https://www.sublimetext.com/), [Atom](https://atom.io/),
[Brackets](http://brackets.io/) e etc, você pode baixar e instalar
[por aqui](https://emmet.io/download/) ou instalar diretamente no seu editor.

Alguns serviços online como [JSFinddle](https://jsfiddle.net/) e
[Codepen](https://codepen.io/) também são possíveis de utilizar.

Depois de instalado.... vamos aos exemplos para ficar mais claro.

A sintaxe é fácil ao final de cada sentença use o TAB.

Usando apenas

```html
html:5 ou !
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

```html
script:src
```

```html
<script src=""></script>
```

Com essa sentença

```html
header#header+(main.main>h1.title{Emmet}+section.container>ul>li>a{Item $}*5)+footer.footer
```

Olha que é gerado

```html
<header id="header"></header>
<main class="main">
  <h1 class="title">Emmet</h1>
  <section class="container">
    <ul>
      <li>
        <a href="">Item 1</a>
        <a href="">Item 2</a>
        <a href="">Item 3</a>
        <a href="">Item 4</a>
        <a href="">Item 5</a>
      </li>
    </ul>
  </section>
</main>
<footer class="footer"></footer>
```

Para qualquer tag HTML:

```html
div
```

```html
<div></div>
```

Para uma tag com id:

```html
div#container
```

```html
<div id="name-id"></div>
```

Para uma tag com class:

```html
div.class div.class1.class2
```

```html
<div class="class"></div>

<div class="class1 class2"></div>
```

Se caso for digitado apenas `.class` ou `#id` a TAG `<div>` é adicionada
automáticamente.

```html
#name-id .name-class
```

```html
<div id="name-id"></div>

<div class="name-class"></div>
```

Para criar uma árvore de elementos você utiliza `>` para que o próximo elemento
fique dentro da TAG anterior (filho ) e `+` para ficar após a TAG anterior
(irmão)

Vamos aos exemplos:

```html
section>p
```

```html
<section>
  <p></p>
</section>
```

```html
section+p
```

```html
<section></section>
<p></p>
```

O símbolo `^` faz com que os elementos fiquem irmãos da última sentença.

```html
section>p>a{link}^section
```

```html
<section>
  <p><a href="">Link</a></p>
  <section></section>
</section>
```

Obs.: O símbolo `^` pode ser útilizado mais de uma vez assim a cada vez usado
sobe um nível na árvore

```html
section>p>a{link}^^section
```

```html
<section>
  <p><a href="">link</a></p>
</section>
<section></section>
```

O símbolo `*` multiplica o elemento declarado pelo n vezes.

```html
ul>li*3
```

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Os parenteses `()`servem para agrupar um conjunto de sentença.

```html
header.header(article>p+span)+footer>p
```

```html
<header class="header"></header>
<article>
  <p></p>
  <span></span>
</article>
<footer>
  <p></p>
</footer>
```

E pode melhorar adicionada

```html
(section>ul>(li>p+a)*3)+footer>p
```

```html
<section>
  <ul>
    <li>
      <p></p>
      <a href=""></a>
    </li>
    <li>
      <p></p>
      <a href=""></a>
    </li>
    <li>
      <p></p>
      <a href=""></a>
    </li>
    <footer></footer>
  </ul>
</section>
```

Com o `$` você pode numerar elementos que oram criado com a repetição `*`.

```html
ul>li.item$*3
```

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

Pode ser usado `$` em sequência

```html
ul>li.item$$$*3
```

```html
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
</ul>
```

Com o uso `@-` voc6e muda a ordenação, podendo ser crescente (default) e
decrescente.

```html
ul>li.item$@-*3
```

```html
<ul>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```

Para mudar o contador base use `@N`

```html
ul>li.item$@3*3
```

```html
<ul>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```

E também pode inverter

```html
ul>li.item$@-3*3
```

```html
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
</ul>
```

Para adicionar texto use ` {} ``

```html
a{Clique aqui}
```

```html
<a href="">Click me</a>
```

Também pode adicionar textos que fiquem dentro do elemento anterior ou após

```html
a{Clique}+b{aqui} a>{Clique}+b{aqui}
```

```html
<a href="">Clique</a><b>aqui</b>

<a href="">Clique<b>aqui</b></a>
```

Pode ser gerado um [Lorem Ipsum](http://br.lipsum.com/) por default é gerado com
30 linhas mas é possível personalizar

```html
p*4>lorem
```

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
```

Alguns Lorem Ipsum online:

[Bacon](https://baconipsum.com/)

[Mussum](https://mussumipsum.com/)

## Emmet para CSS

Bom acredito que para o CSS o Emmet não será muito útil porque os editores já
oferecem um auxílio para a escrita sugerindo com o auto-complete.

```css
-display
```

```css
-webkit-display: ;
-moz-display: ;
-ms-display: ;
-o-display: ;
display: ;
```

Também podemos passar valores.

```css
-flex: 10px;
```

```css
-webkit-flex: 10px;
-moz-flex: 10px;
-ms-flex: 10px;
-o-flex: 10px;
flex: 10px;
```

E a referência de valores fica

- p → %
- e → em
- x → ex

Podemos usar com cores e abreviações

```css
bd5#0s
```

```css
border: 5px #000 solid;
```

- \#1 → \#111111
- \#e0 → \#e0e0e0
- \#fc0 → \#ffcc00

## Recomendações finais

Para o Emmet poder parsear não pode haver espaços nas sentenças.

Esse é um overview básico porém essencial para poder usar o Emmet, a ideia é
trazer praticidade e não complexividade por isso que o Emmet não é recomendado
para estruturas complexas e grandes.

E por experiência própria aqui estão o que é mais usado no dia a dia porém
[nessa documentação](https://docs.emmet.io/cheat-sheet/) você encotrará todas as
abreviações e talvez alguma que não expliquei possa ser útil vale a pena dar uma
olhada.

Espero que tenham gostado e ajudado !!!

De qualquer forma caso precisem de uma ajuda podem deixar um comentário ou me
procurar nas redes sociais.

## Referências

[Documentação Emmet](https://docs.emmet.io/abbreviations/syntax/)

[Documentação Emmet - CSS](https://docs.emmet.io/css-abbreviations/)
