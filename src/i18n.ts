import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      // Menu
      'menu.home': 'Início',
      'menu.about': 'Sobre',
      'menu.blog': 'Blog',
      'menu.projects': 'Projetos',
      'menu.tips': 'Dicas',
      'menu.travels': 'Viagens',
      'menu.newsletter': 'Newsletter',

      // Nomes das páginas
      'pages.home.name': 'Início',
      'pages.about.name': 'Sobre',
      'pages.blog.name': 'Blog',
      'pages.projects.name': 'Projetos',
      'pages.tips.name': 'Dicas',
      'pages.travels.name': 'Viagens',
      'pages.newsletter.name': 'Newsletter',

      // Páginas
      'pages.home.title': 'Marquinhus Gonçalves - Software Engineer',
      'pages.home.description':
        'Oi! Sou o Marquinhus Gonçalves, engenheiro de software.',
      'pages.home.profile.text1':
        'Oi !!! sou o Marquinhus Gonçalves, engenheiro de software, curto viajar, escutar música, estudar, praticar esportes, tocar guitarra e violão.',
      'pages.home.profile.text2':
        'Apaixonado por tecnologia, gosto de solucionar problemas e para me manter atualizado na área leio artigos, vou a eventos, conferências e meetups sobre temas relacionados.',

      'pages.about.title': 'Sobre Mim',
      'pages.about.content':
        'Bom meu nome é Marcus Vinicius Gonçalves sou nascido e criado em São Bernardo do Campo / SP. Com 14 anos ganhei meu primeiro computador, um 486, com o na época recente Windows 3.11, que ainda não era um sistema operacional e rodava no DOS. A tela preta e a linha de comando linha de comando faziam eu ficar horas no computador, nem desligava. A internet ainda não tinha chego porém tinha <a href="https://pt.wikipedia.org/wiki/Bulletin_board_system" rel="noreferrer" target="_blank">BBS</a> e o acesso era discado como seria a internet. Alguns meses depois comecei o curso de informática na <a href="http://www.sos.com.br" rel="noreferrer" target="_blank">S.O.S Computadores</a> onde tirei nota máxima em todos os cursos e ainda recebi o convite de dar aulas, a paixão só aumentou e meu conhecimento também. Junto ao ensino médio estudei técnico em Informática no <a href="http://www.portalanchieta.com.br" rel="noreferrer" target="_blank">Colégio Anchieta</a> fui bolsista integral, onde tive bastante contato com Hardware e Programação, então nem tive dúvidas do que estudar na faculdade, Ciência da Computação na <a href="http://portal.metodista.br" rel="noreferrer" target="_blank">Universidade Metodista</a> passei entre os 20 primeiros e fui bolsista. E como a vida são cheias de surpresas, minha minha vida mudou totalmente mesmo amando o que estudava tive difuldades com algumas matérias acabei pegando DP´s, perdendo a bolsa e nesse tempo já procurava emprego mas a dificuldade de conseguir emprego na área e os salários de estágio eram baixos e não pagavam a mensalidade, acabei indo para o comércio e trancando meus estudos. Foram mais de 10 anos totalmente fora da área. Nesse período trabalhei na <a href="http://www.tentbeach.com.br" rel="noreferrer" target="_blank">Tent Beach</a> (não vou comentar toda história porque seria muito longa), mas resumindo fui muito feliz tive diversas promoções, premiações, fiz muitas amizades e cresci muito como pessoa, mas chegou uma hora que eu queria crescer mais profissionalmente, foi então que resolvi voltar para área porém estava totalmente desatualizado. Primeira coisa que fiz foi, matricular na faculdade, dessa vez na <a href="http://www.anhembi.br" rel="noreferrer" target="_blank">Anhembi Morumbi</a> no curso de Análise e Desenvolvimento de Sistemas. Hoje sou formado e atuando como engenheiro de software, estudando muito, fazendo muitos cursos e participando de vários eventos da área, inclusive esse blog é um motivo para eu estudar mais e sempre estar buscando as novas tecnologias, novos métodos, testando o que há de novo no mercado ampliando meu network e me divertindo. Curto música pra c... toco violão, guitarra e percurssão. Curto muito praticar esportes correr, nadar, pedalar, bate uma bola, academia, surf, skate, patins e sou fascinado por esportes radicais. Leitura, filmes e séries sempre que sobra um tempo.',

      'pages.blog.title': 'Blog',
      'pages.blog.description':
        'Artigos sobre desenvolvimento web, tecnologia e experiências pessoais. Compartilhando conhecimento e aprendizado na área de software.',

      'pages.projects.title': 'Projetos',
      'pages.projects.description':
        'Portfólio de projetos desenvolvidos por Marquinhus Gonçalves.',

      'pages.tips.title': 'Dicas',
      'pages.tips.content': 'Aqui você encontrará dicas valiosas gerais.',

      'pages.travels.title': 'Viagens e Experiências',
      'pages.travels.content':
        'Compartilho aqui minhas experiências de viagem e as lições que aprendi pelo caminho.',

      'pages.newsletter.title': 'Newsletter',
      'pages.newsletter.description':
        'Inscreva-se na minha newsletter e receba as melhores dicas sobre tecnologia, desenvolvimento e viagens diretamente no seu email.',
      'pages.newsletter.content.intro':
        'Oi! 👋 Quer ficar por dentro das últimas novidades sobre tecnologia, desenvolvimento web e minhas aventuras pelo mundo?',
      'pages.newsletter.content.benefits': 'O que você vai receber:',
      'pages.newsletter.content.benefit1':
        '📚 Artigos exclusivos sobre desenvolvimento',
      'pages.newsletter.content.benefit2':
        '🛠️ Dicas práticas e ferramentas úteis',
      'pages.newsletter.content.benefit3':
        '🌍 Histórias de viagens e experiências',
      'pages.newsletter.content.benefit4': '🎯 Conteúdo selecionado e sem spam',
      'pages.newsletter.content.frequency':
        'Frequência: Envios quinzenais (ou quando tiver algo realmente interessante para compartilhar)',
      'pages.newsletter.content.privacy':
        'Seus dados estão seguros e você pode cancelar a inscrição a qualquer momento.',

      // Componentes
      'components.comments.title': 'Comentários',
      'components.relatedPosts.title': 'Posts Relacionados',

      // Páginas de erro
      'pages.notFound.title': '404 - Página não encontrada',
      'pages.notFound.seoTitle': 'Página não encontrada',
      'pages.notFound.photoBy': 'Foto por',
      'pages.notFound.on': 'em',

      // Componentes de post
      'components.postInfo.readingTime': 'min de leitura',
      'components.postInfo.publishedOn': 'Publicado em',
      'components.postInfo.updatedOn': 'Atualizado em',
      'components.postInfo.author': 'Por',
      'components.postInfo.readMore': 'Ler mais',
      'components.postInfo.backToList': 'Voltar à lista',

      // Componentes de compartilhamento
      'components.shareButton.linkCopied': 'Link copiado!',
      'components.shareButton.shareOnFacebook': 'Compartilhar no Facebook',
      'components.shareButton.shareOnTwitter': 'Compartilhar no Twitter',
      'components.shareButton.shareOnLinkedIn': 'Compartilhar no LinkedIn',
      'components.shareButton.shareOnReddit': 'Compartilhar no Reddit',
      'components.shareButton.shareOnTelegram': 'Compartilhar no Telegram',
      'components.shareButton.copyLink': 'Copiar link',

      // Componentes de compartilhamento (ShareButtons)
      'components.shareButtons.title': 'Compartilhe este conteúdo:',
      'components.shareButtons.facebook': 'Facebook',
      'components.shareButtons.twitter': 'Twitter',
      'components.shareButtons.linkedin': 'LinkedIn',
      'components.shareButtons.whatsapp': 'WhatsApp',
      'components.shareButtons.email': 'Email',
      'components.shareButtons.reddit': 'Reddit',
      'components.shareButtons.telegram': 'Telegram',
      'components.shareButtons.copyLink': 'Copiar Link',
      'components.shareButtons.copied': 'Copiado!',
      'components.shareButtons.linkCopiedMessage':
        'Link copiado para a área de transferência!',

      // Textos de email
      'components.shareButtons.emailSubject': 'Confira:',
      'components.shareButtons.emailBody': 'Leia mais em:',

      // Componente de busca
      'components.search.openSearch': 'Abrir busca',
      'components.search.closeSearch': 'Fechar busca',
      'components.search.placeholder': 'Buscar posts, projetos, dicas...',
      'components.search.filters.all': 'Todos',
      'components.search.filters.blog': 'Blog',
      'components.search.filters.projects': 'Projetos',
      'components.search.filters.tips': 'Dicas',
      'components.search.filters.travels': 'Viagens',

      // Nomes das coleções
      'collections.blog': 'Blog',
      'collections.projects': 'Projetos',
      'collections.tips': 'Dicas',
      'collections.travels': 'Viagens',
      'components.search.emptyState.minChars':
        'Digite pelo menos 2 caracteres para buscar...',
      'components.search.emptyState.noResults':
        'Nenhum resultado encontrado para',
      'components.search.resultsCount.singular': 'resultado encontrado',
      'components.search.resultsCount.plural': 'resultados encontrados',

      // Componente de links sociais
      'components.socialLinks.email': 'E-mail',
      'components.socialLinks.linkedin': 'LinkedIn',
      'components.socialLinks.twitter': 'Twitter',
      'components.socialLinks.github': 'GitHub',
      'components.socialLinks.facebook': 'Facebook',
      'components.socialLinks.instagram': 'Instagram',
      'components.socialLinks.rssFeed': 'RSS Feed',

      // Componente Avatar
      'components.avatar.alt': 'Marquinhus Gonçalves',

      // Template de tag
      'components.tag.foundWithTag': 'encontrado com a tag',
      'components.tag.foundWithTagPlural': 'encontrados com a tag',
      'components.tag.noPostsFound': 'Nenhum post encontrado com esta tag.',

      // Componente TagCloud
      'components.tagCloud.popularTags': 'Tags populares',
      'components.tagCloud.popularBlogTags': 'Tags populares do blog',
      'components.tagCloud.popularProjectTags': 'Tags populares dos projetos',

      // Navegação entre posts
      'components.postNavigation.previous': 'Post anterior',
      'components.postNavigation.next': 'Próximo post',
      'components.postNavigation.backToBlog': 'Voltar ao blog',
      'components.postNavigation.backToProjects': 'Voltar aos projetos',

      // Newsletter
      'components.newsletter.variants.home.title': 'Fique por dentro!',
      'components.newsletter.variants.home.description':
        'Receba as melhores dicas sobre tecnologia e viagens',
      'components.newsletter.variants.compact.title': 'Newsletter',
      'components.newsletter.variants.compact.description':
        'Receba atualizações por email',
      'components.newsletter.variants.postEnd.title': 'Gostou do conteúdo?',
      'components.newsletter.variants.postEnd.description':
        'Inscreva-se para receber mais posts como este',
      'components.newsletter.variants.listEnd.title':
        'Não perca nenhuma novidade!',
      'components.newsletter.variants.listEnd.description':
        'Receba os últimos posts e projetos no seu email',
      'components.newsletter.form.emailPlaceholder': 'Seu melhor email',
      'components.newsletter.form.submitButton': 'Inscrever',
      'components.newsletter.form.submittingButton': 'Inscrevendo...',
      'components.newsletter.form.termsText': 'Aceito os',
      'components.newsletter.form.termsLink': 'termos e condições',
      'components.newsletter.form.and': 'e',
      'components.newsletter.form.privacyLink': 'política de privacidade',
      'components.newsletter.messages.emailRequired':
        'Por favor, insira um email',
      'components.newsletter.messages.emailInvalid':
        'Por favor, insira um email válido',
      'components.newsletter.messages.termsRequired':
        'Você deve aceitar os termos e condições',
      'components.newsletter.messages.error':
        'Erro ao inscrever. Tente novamente.',
      'components.newsletter.messages.success':
        '✅ Inscrição realizada com sucesso! Verifique seu email para confirmar.',

      // SEO
      'seo.about.title': 'Sobre - Marquinhus Gonçalves',
      'seo.about.description':
        'Conheça mais sobre Marquinhus Gonçalves, engenheiro de software.',
      'seo.blog.title': 'Blog - Marquinhus Gonçalves',
      'seo.blog.description':
        'Artigos sobre desenvolvimento web, tecnologia e experiências pessoais. Compartilhando conhecimento e aprendizado na área de software.',
      'seo.projects.title': 'Projetos - Marquinhus Gonçalves',
      'seo.projects.description':
        'Portfólio de projetos desenvolvidos por Marquinhus Gonçalves.',
      'seo.newsletter.title': 'Newsletter - Marquinhus Gonçalves',
      'seo.newsletter.description':
        'Inscreva-se na newsletter e receba as melhores dicas sobre tecnologia, desenvolvimento e viagens.',
    },
  },
  en: {
    translation: {
      // Menu
      'menu.home': 'Home',
      'menu.about': 'About',
      'menu.blog': 'Blog',
      'menu.projects': 'Projects',
      'menu.tips': 'Tips',
      'menu.travels': 'Travels',
      'menu.newsletter': 'Newsletter',

      // Nomes das páginas
      'pages.home.name': 'Home',
      'pages.about.name': 'About',
      'pages.blog.name': 'Blog',
      'pages.projects.name': 'Projects',
      'pages.tips.name': 'Tips',
      'pages.travels.name': 'Travels',
      'pages.newsletter.name': 'Newsletter',

      // Páginas
      'pages.home.title': 'Marquinhus Gonçalves - Software Engineer',
      'pages.home.description':
        "Hi! I'm Marquinhus Gonçalves, a software engineer.",
      'pages.home.profile.text1':
        "Hi!!! I'm Marquinhus Gonçalves, a software engineer, I love traveling, listening to music, studying, practicing sports, playing guitar and acoustic guitar .",
      'pages.home.profile.text2':
        'Passionate about technology, I like solving problems and to keep myself updated in the area I read articles, go to events, conferences and meetups on related topics.',

      'pages.about.title': 'About Me',
      'pages.about.content':
        'Hello! My name is Marcus Vinicius Gonçalves, I was born and raised in São Bernardo do Campo / SP. At 14 years old I got my first computer, a 486, with the then recent Windows 3.11, which was not yet an operating system and ran on DOS. The black screen and command line made me spend hours on the computer, I wouldn\'t even turn it off. The internet hadn\'t arrived yet but there were <a href="https://pt.wikipedia.org/wiki/Bulletin_board_system" rel="noreferrer" target="_blank">BBS</a> and access was dial-up like the internet would be. A few months later I started the computer course at <a href="http://www.sos.com.br" rel="noreferrer" target="_blank">S.O.S Computadores</a> where I got top grades in all courses and even received an invitation to teach, the passion only increased and so did my knowledge. Along with high school I studied Computer Technician at <a href="http://www.portalanchieta.com.br" rel="noreferrer" target="_blank">Colégio Anchieta</a> where I was a full scholarship student, where I had a lot of contact with Hardware and Programming, so I had no doubts about what to study in college, Computer Science at <a href="http://portal.metodista.br" rel="noreferrer" target="_blank">Universidade Metodista</a> where I was among the top 20 and was a scholarship student. And as life is full of surprises, my life changed completely even though I loved what I was studying I had difficulties with some subjects and ended up getting failing grades, losing the scholarship and at that time I was already looking for a job but the difficulty of getting a job in the area and the internship salaries were low and didn\'t pay the tuition, I ended up going into commerce and putting my studies on hold. It was more than 10 years completely out of the field. During this period I worked at <a href="http://www.tentbeach.com.br" rel="noreferrer" target="_blank">Tent Beach</a> (I won\'t comment on the whole story because it would be too long), but in summary I was very happy, had several promotions, awards, made many friends and grew a lot as a person, but there came a time when I wanted to grow more professionally, so I decided to return to the field but I was completely outdated. The first thing I did was enroll in college, this time at <a href="http://www.anhembi.br" rel="noreferrer" target="_blank">Anhembi Morumbi</a> in the Systems Analysis and Development course. Today I am graduated and working as a software engineer, studying a lot, taking many courses and participating in several events in the area, including this blog is a reason for me to study more and always be seeking new technologies, new methods, testing what\'s new in the market expanding my network and having fun. I love music, I play guitar, guitar and percussion. I really like practicing sports running, swimming, cycling, playing ball, gym, surfing, skating, rollerblading and I\'m fascinated by extreme sports. Reading, movies and series whenever there\'s time left.',

      'pages.blog.title': 'Blog',
      'pages.blog.description':
        'Articles about web development, technology and personal experiences. Sharing knowledge and learning in the software area.',

      'pages.projects.title': 'Projects',
      'pages.projects.description':
        'Portfolio of projects developed by Marquinhus Gonçalves.',

      'pages.tips.title': 'Tips',
      'pages.tips.content': 'Here you will find valuable general tips.',

      'pages.travels.title': 'Travels and Experiences',
      'pages.travels.content':
        'I share here my travel experiences and the lessons I learned along the way.',

      'pages.newsletter.title': 'Newsletter',
      'pages.newsletter.description':
        'Subscribe to my newsletter and receive the best tips about technology, development and travels directly in your email.',
      'pages.newsletter.content.intro':
        'Hi! 👋 Want to stay up to date with the latest news about technology, web development and my adventures around the world?',
      'pages.newsletter.content.benefits': 'What you will receive:',
      'pages.newsletter.content.benefit1':
        '📚 Exclusive articles about development',
      'pages.newsletter.content.benefit2': '🛠️ Practical tips and useful tools',
      'pages.newsletter.content.benefit3': '🌍 Travel stories and experiences',
      'pages.newsletter.content.benefit4': '🎯 Curated content and no spam',
      'pages.newsletter.content.frequency':
        'Frequency: Biweekly sends (or when I have something really interesting to share)',
      'pages.newsletter.content.privacy':
        'Your data is safe and you can unsubscribe at any time.',

      // Componentes
      'components.comments.title': 'Comments',
      'components.relatedPosts.title': 'Related Posts',

      // Páginas de erro
      'pages.notFound.title': '404 - Page not found',
      'pages.notFound.seoTitle': 'Page not found',
      'pages.notFound.photoBy': 'Photo by',
      'pages.notFound.on': 'on',

      // Componentes de post
      'components.postInfo.readingTime': 'min read',
      'components.postInfo.publishedOn': 'Published on',
      'components.postInfo.updatedOn': 'Updated on',
      'components.postInfo.author': 'By',
      'components.postInfo.readMore': 'Read more',
      'components.postInfo.backToList': 'Back to list',

      // Componentes de compartilhamento
      'components.shareButton.linkCopied': 'Link copied!',
      'components.shareButton.shareOnFacebook': 'Share on Facebook',
      'components.shareButton.shareOnTwitter': 'Share on Twitter',
      'components.shareButton.shareOnLinkedIn': 'Share on LinkedIn',
      'components.shareButton.shareOnReddit': 'Share on Reddit',
      'components.shareButton.shareOnTelegram': 'Share on Telegram',
      'components.shareButton.copyLink': 'Copy link',

      // Componentes de compartilhamento (ShareButtons)
      'components.shareButtons.title': 'Share this content:',
      'components.shareButtons.facebook': 'Facebook',
      'components.shareButtons.twitter': 'Twitter',
      'components.shareButtons.linkedin': 'LinkedIn',
      'components.shareButtons.whatsapp': 'WhatsApp',
      'components.shareButtons.email': 'Email',
      'components.shareButtons.reddit': 'Reddit',
      'components.shareButtons.telegram': 'Telegram',
      'components.shareButtons.copyLink': 'Copy Link',
      'components.shareButtons.copied': 'Copied!',
      'components.shareButtons.linkCopiedMessage': 'Link copied to clipboard!',

      // Textos de email
      'components.shareButtons.emailSubject': 'Check out:',
      'components.shareButtons.emailBody': 'Read more at:',

      // Componente de busca
      'components.search.openSearch': 'Open search',
      'components.search.closeSearch': 'Close search',
      'components.search.placeholder': 'Search posts, projects, tips...',
      'components.search.filters.all': 'All',
      'components.search.filters.blog': 'Blog',
      'components.search.filters.projects': 'Projects',
      'components.search.filters.tips': 'Tips',
      'components.search.filters.travels': 'Travels',

      // Nomes das coleções
      'collections.blog': 'Blog',
      'collections.projects': 'Projects',
      'collections.tips': 'Tips',
      'collections.travels': 'Travels',
      'components.search.emptyState.minChars':
        'Type at least 2 characters to search...',
      'components.search.emptyState.noResults': 'No results found for',
      'components.search.resultsCount.singular': 'result found',
      'components.search.resultsCount.plural': 'results found',

      // Componente de links sociais
      'components.socialLinks.email': 'Email',
      'components.socialLinks.linkedin': 'LinkedIn',
      'components.socialLinks.twitter': 'Twitter',
      'components.socialLinks.github': 'GitHub',
      'components.socialLinks.facebook': 'Facebook',
      'components.socialLinks.instagram': 'Instagram',
      'components.socialLinks.rssFeed': 'RSS Feed',

      // Componente Avatar
      'components.avatar.alt': 'Marquinhus Gonçalves',

      // Template de tag
      'components.tag.foundWithTag': 'found with tag',
      'components.tag.foundWithTagPlural': 'found with tag',
      'components.tag.noPostsFound': 'No posts found with this tag.',

      // Componente TagCloud
      'components.tagCloud.popularTags': 'Popular tags',
      'components.tagCloud.popularBlogTags': 'Popular blog tags',
      'components.tagCloud.popularProjectTags': 'Popular project tags',

      // Navegação entre posts
      'components.postNavigation.previous': 'Previous post',
      'components.postNavigation.next': 'Next post',
      'components.postNavigation.backToBlog': 'Back to blog',
      'components.postNavigation.backToProjects': 'Back to projects',

      // Newsletter
      'components.newsletter.variants.home.title': 'Stay in the loop!',
      'components.newsletter.variants.home.description':
        'Get the best tips about technology and travels',
      'components.newsletter.variants.compact.title': 'Newsletter',
      'components.newsletter.variants.compact.description': 'Get email updates',
      'components.newsletter.variants.postEnd.title': 'Liked the content?',
      'components.newsletter.variants.postEnd.description':
        'Subscribe to receive more posts like this',
      'components.newsletter.variants.listEnd.title': "Don't miss any updates!",
      'components.newsletter.variants.listEnd.description':
        'Get the latest posts and projects in your email',
      'components.newsletter.form.emailPlaceholder': 'Your best email',
      'components.newsletter.form.submitButton': 'Subscribe',
      'components.newsletter.form.submittingButton': 'Subscribing...',
      'components.newsletter.form.termsText': 'I accept the',
      'components.newsletter.form.termsLink': 'terms and conditions',
      'components.newsletter.form.and': 'and',
      'components.newsletter.form.privacyLink': 'privacy policy',
      'components.newsletter.messages.emailRequired': 'Please enter an email',
      'components.newsletter.messages.emailInvalid':
        'Please enter a valid email',
      'components.newsletter.messages.termsRequired':
        'You must accept the terms and conditions',
      'components.newsletter.messages.error':
        'Error subscribing. Please try again.',
      'components.newsletter.messages.success':
        '✅ Successfully subscribed! Check your email to confirm.',

      // SEO
      'seo.about.title': 'About - Marquinhus Gonçalves',
      'seo.about.description':
        'Learn more about Marquinhus Gonçalves, software engineer.',
      'seo.blog.title': 'Blog - Marquinhus Gonçalves',
      'seo.blog.description':
        'Articles about web development, technology and personal experiences. Sharing knowledge and learning in the software area.',
      'seo.projects.title': 'Projects - Marquinhus Gonçalves',
      'seo.projects.description':
        'Portfolio of projects developed by Marquinhus Gonçalves.',
      'seo.newsletter.title': 'Newsletter - Marquinhus Gonçalves',
      'seo.newsletter.description':
        'Subscribe to the newsletter and get the best tips about technology, development and travels.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
