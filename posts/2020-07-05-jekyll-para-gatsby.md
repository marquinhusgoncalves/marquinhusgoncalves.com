---
title: Mudança de Jekyll para Gatsby
date: 2020-07-05 20:00:00
---

![Mudanças](/assets/img/jekyllparagatsby/change.jpg) Photo by
[Ross Findon](https://unsplash.com/@rossf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
on
[Unsplash](https://unsplash.com/s/photos/change?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Bom a alguns anos atrás queria ter um blog para tentar escrever sobre coisas que
estava estudando, aprendendo e trabalhando e também queria publicar projetos que
estava fazendo e estudando.

Na época pesquisei sobre o que usaria de stack, o Wordpress era o mais usado mas
queria algo “simples”. Foi então que achei alguns geradores estáticos, como
Jekyll e o Hexo. Além dos 2 atenderem bem o que eu estava planejando, outras
vantagens eram, a escrita ser em markdowns e a publicação poder ser no Github
Pages.

Com a stack decidida planejei a UI e sai codando. Assim que terminei o que tinha
planejado para um primeira versão fui evoluindo, conforme estava aprendendo
sobre o Jekyll e basicamente fiz isso olhando o code de outros blogs e
principalmente um curso que o Willian Justen publicou nessa mesma época
compartilhando seu aprendizado quando também desenvolveu seu blog. Após muitas
mudanças e chegar no enfim pronto, escrevi 2 artigos e publiquei diversos
projetos que fiz. E só também, sempre tenho ideia de algo para escrever mas
deixo para depois e acabo nunca escrevendo.

O Jekyll nunca foi um problema inclusive usava o Gulp para automatizar diversas
tarefas. A alguns meses atrás fui atualizar as libs usadas no blog ainda em
Jekyll e o Gulp teve uma grande atualização, fiz as mudanças necessárias, vocês
podem ver o commit
[aqui](https://github.com/marquinhusgoncalves/marquinhusgoncalves.com/commit/238971b5953978877d5cf16f8c67f242e31e990f).
O Gulp esta bem bacana e caso precisem usar algum automatizador para algum
projeto vale a pena dar uma estudada, as configurações são declarativas. As
configurações estão mais simples e tem diversos plugins para atender a diversos
casos.

Nessa ocasião já estava vendo muitas coisas sobre o Gastby, que é um gerador de
site estático porém em React, isso foi o que me motivou a fazer a mudança. Como
eu disse o Jekyll atendia as necessidades do blog, com o Gulp fiz todas
automaizações necessárias mas a stack estava longe do que faço no meu dia a dia.
O Jekyll é em Ruby e toda vez que precisava fazer alguma alteração tinha que
subir o ambiente que não é meu padrão e uma vez configurado até que era
tranquilo o problema era quando tinha que montar o ambiente do 0.

Assim que decidi fazer a mudança para Gatsby, li toda a documentação, fiz alguns
cursos no [EggHead](https://egghead.io/) e mais uma vez um curso do Willian.

Para colocar em prática o aprendizado fiz a mudança de 2 sites simples que tenho
para Gatsby, aproveitei e usei o Netlify para o build e deploy.

Em meu blog decidi manter a UI, subir no Netlify e usar o Netlify CMS, fiz o
planejamento da mudança usando o
[projects do Github](https://github.com/marquinhusgoncalves/marquinhusgoncalves.com/projects/1).
Falaremos um pouco Netlify e Netlify CMS mais para frente.

A mudança em si foi bem tranquila porque o CSS já estava todo pronto, não fiz
nenhuma alteração na UI como comentei, fiz apenas mudanças para atender o
Gatsby, e isso eu achei sensacional. A maior dificuldade que tive, foi
componentizar todo o blog, porque não estava quando era em Jekyll.

Alguns pontos que gostei demais

- Documentação do Gatsby

  A documentação é excelente, além de ser completa tem diversos exemplos e
  referências.

- Usar o Javascript com React que estou acostumado a mexer no dia a dia

  Posso aplicar o que já ttenho conhecimento e inclusive as novidades do React
  como React Hooks

- GraphQL

  Usar o GraphQL faacilita muito quando você precisa criar páb=ginas
  personalizadas e fazer querys com filtros e etc.

- Imagens

  Imagens são o que mais deixam o bundle de um site pesado, a otimização é feita
  por default no Gatsby.

- PWA

  Com apenas um plugin o blog oferece ao usuário a facilidade de ter acesso
  offline uma vez que o blog já foi acessado

## Netlify

Aproveitei que mudaria para Gatsby e também mudei de Github Pages para o Netlily
também por nenhum problema específico pelos testes que fiz gostei muito do
processo de build e facilidade de configuração porém nada impede que volte ao
Github Pages essa facilidade de mudança é ótima fora que o Netlify tem algumas
limitações na versão gratuita.

## Netlify CMS

Também aproveitando a mudança adicionei o Netlify CMS para ter um admin para a
criação de posts e projetos. Não sei se usarei tanto mas foi bem legal ver que
temos podemos ter um CMS em um site estático e funciona super bem. Ainda tem
algumas coisas que preciso ajustar mas consegui subir nesse PR e agora fica mais
fácil fazer as alterações
