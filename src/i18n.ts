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
      'pages.home.title':
        'Marcus Gonçalves | Engenheiro Software Sênior · Lisboa',
      'pages.home.description':
        'Construo produtos digitais robustos e os times que os entregam. Especialista em front-end com raízes em full-stack, hoje atuo na interseção entre engenharia de alto nível e liderança técnica, definindo arquitetura, elevando padrões e ajudando times a crescer.',
      'pages.home.profile.text1':
        'Engenheiro de software sênior especialista em front-end, com visão de produto e liderança técnica',
      'pages.home.profile.text2':
        'Lisboa · 15+ anos transformando produtos digitais do código ao time',

      'pages.about.title': 'Sobre Mim',
      'pages.about.content':
        '<p>Engenheiro de software sênior baseado em Lisboa, com mais de 15 anos construindo produtos digitais de alta qualidade. Minha especialidade é front-end, Javascript, Typescript, React, Flutter, performance web, design systems, mas minha formação é full-stack, com experiência em Node, Python e Kotlin, o que me dá uma visão de sistema que vai além do browser.</p><p>Hoje atuo na interseção entre engenharia sênior e liderança técnica: defino arquitetura de projetos back e front-end, estabeleço boas práticas, faço mentoria de times e tomo decisões técnicas com impacto real no produto.</p><p>Fora do código, sou movido por desafios físicos e novas perspectivas. Esportes radicais, viagens e música são parte de quem eu sou. Essa mentalidade de explorar e superar limites se aplica ao trabalho também.</p>',

      'pages.blog.title': 'Blog',
      'pages.blog.description':
        'Artigos sobre desenvolvimento web, tecnologia e experiências pessoais. Compartilhando conhecimento e aprendizado na área de software.',

      'pages.projects.title': 'Projetos',
      'pages.projects.description':
        'Portfólio de projetos desenvolvidos por Marcus Gonçalves.',

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
      'components.avatar.alt': 'Marcus Gonçalves',

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
      'components.newsletter.messages.alreadySubscribed':
        'Este email já está inscrito na newsletter.',
      'components.newsletter.messages.timeoutError':
        'Tempo limite excedido. Verifique sua conexão e tente novamente.',
      'components.newsletter.messages.networkError':
        'Erro de conexão. Verifique sua internet e tente novamente.',
      'components.newsletter.messages.rateLimited':
        'Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.',
      'components.newsletter.messages.serverError':
        'Servidor temporariamente indisponível. Tente novamente em alguns minutos.',
      'components.newsletter.messages.invalidResponse':
        'Resposta inválida do servidor. Tente novamente.',
      'components.newsletter.messages.success':
        '✅ Inscrição realizada com sucesso! Verifique seu email para confirmar.',

      // SEO
      'seo.about.title': 'Sobre - Marcus Gonçalves',
      'seo.about.description':
        'Engenheiro de software sênior baseado em Lisboa, especialista em front-end (React, TypeScript, Flutter) com visão de produto e liderança técnica. 15+ anos de experiência.',
      'seo.blog.title': 'Blog - Marcus Gonçalves',
      'seo.blog.description':
        'Artigos sobre desenvolvimento web, tecnologia e experiências pessoais. Compartilhando conhecimento e aprendizado na área de software.',
      'seo.projects.title': 'Projetos - Marcus Gonçalves',
      'seo.projects.description':
        'Portfólio de projetos desenvolvidos por Marcus Gonçalves.',
      'seo.newsletter.title': 'Newsletter - Marcus Gonçalves',
      'seo.newsletter.description':
        'Inscreva-se na newsletter e receba as melhores dicas sobre tecnologia, desenvolvimento e viagens.',
      'seo.terms.title': 'Termos e Condições - Marcus Gonçalves',
      'seo.terms.description':
        'Termos e condições para uso da newsletter e serviços do site.',
      'seo.privacy.title': 'Política de Privacidade - Marcus Gonçalves',
      'seo.privacy.description':
        'Política de privacidade e proteção de dados pessoais.',

      // Terms and Conditions
      'pages.terms.title': 'Termos e Condições',
      'pages.terms.description': 'Termos e condições para uso da newsletter',
      'pages.terms.lastUpdated': 'Última atualização',
      'pages.terms.date': '14 de setembro de 2025',
      'pages.terms.section1.title': '1. Aceitação dos Termos',
      'pages.terms.section1.content':
        'Ao se inscrever na newsletter do Marcus Gonçalves, você concorda em cumprir e estar vinculado a estes Termos e Condições. Se você não concordar com qualquer parte destes termos, não deve se inscrever na newsletter.',
      'pages.terms.section2.title': '2. Descrição do Serviço',
      'pages.terms.section2.content':
        'A newsletter é um serviço gratuito que fornece conteúdo sobre desenvolvimento web, tecnologia, viagens e experiências pessoais. O conteúdo é fornecido "como está" e pode ser alterado ou descontinuado a qualquer momento.',
      'pages.terms.section3.title': '3. Uso Aceitável',
      'pages.terms.section3.content':
        'Você concorda em usar a newsletter apenas para fins legais e de acordo com estes termos. É proibido usar o serviço para qualquer atividade ilegal, abusiva ou que viole os direitos de terceiros.',
      'pages.terms.section4.title': '4. Cancelamento',
      'pages.terms.section4.content':
        'Você pode cancelar sua inscrição na newsletter a qualquer momento usando o link de cancelamento fornecido nos emails ou entrando em contato conosco. O cancelamento será efetivado imediatamente.',
      'pages.terms.section5.title': '5. Modificações',
      'pages.terms.section5.content':
        'Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação. O uso continuado da newsletter após as modificações constitui aceitação dos novos termos.',
      'pages.terms.section6.title': '6. Limitação de Responsabilidade',
      'pages.terms.section6.content':
        'O Marcus Gonçalves não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou incapacidade de usar a newsletter.',
      'pages.terms.contact.title': 'Contato',
      'pages.terms.contact.content':
        'Se você tiver dúvidas sobre estes Termos e Condições, entre em contato conosco através do email eu@marquinhusgoncalves.com.',

      // Privacy Policy
      'pages.privacy.title': 'Política de Privacidade',
      'pages.privacy.description':
        'Política de privacidade e proteção de dados',
      'pages.privacy.lastUpdated': 'Última atualização',
      'pages.privacy.date': '14 de setembro de 2025',
      'pages.privacy.section1.title': '1. Informações Coletadas',
      'pages.privacy.section1.content':
        'Coletamos apenas o endereço de email fornecido voluntariamente por você ao se inscrever na newsletter. Também coletamos informações técnicas básicas como endereço IP e user agent para fins de segurança e análise.',
      'pages.privacy.section2.title': '2. Uso das Informações',
      'pages.privacy.section2.content':
        'Seu email será usado exclusivamente para enviar a newsletter e comunicações relacionadas ao serviço. Não compartilhamos, vendemos ou alugamos suas informações pessoais para terceiros.',
      'pages.privacy.section3.title': '3. Armazenamento de Dados',
      'pages.privacy.section3.content':
        'Seus dados são armazenados de forma segura usando serviços confiáveis (Supabase e MailerLite) que implementam medidas de segurança adequadas para proteger suas informações.',
      'pages.privacy.section4.title': '4. Cookies e Tecnologias Similares',
      'pages.privacy.section4.content':
        'Este site pode usar cookies para melhorar sua experiência. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.',
      'pages.privacy.section5.title': '5. Seus Direitos',
      'pages.privacy.section5.content':
        'Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais a qualquer momento. Você também pode cancelar sua inscrição na newsletter usando o link fornecido nos emails.',
      'pages.privacy.section6.title': '6. Alterações na Política',
      'pages.privacy.section6.content':
        'Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através da newsletter ou por email.',
      'pages.privacy.contact.title': 'Contato',
      'pages.privacy.contact.content':
        'Para questões sobre privacidade ou para exercer seus direitos, entre em contato conosco através do email eu@marquinhusgoncalves.com.',
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
      'pages.home.title':
        'Marcus Gonçalves | Senior Software Engineer · Lisbon',
      'pages.home.description':
        'I build robust digital products and the teams that deliver them. Front-end specialist with full-stack roots, I work at the intersection of high-level engineering and technical leadership, defining architecture, raising standards and helping teams grow.',
      'pages.home.profile.text1':
        'Senior software engineer specializing in front-end, with product vision and technical leadership',
      'pages.home.profile.text2':
        'Lisbon · 15+ years transforming digital products from code to team',

      'pages.about.title': 'About Me',
      'pages.about.content':
        "<p>Senior software engineer based in Lisbon, with over 15 years building high-quality digital products. My specialty is front-end, Javascript, Typescript, React, Flutter, web performance, design systems, but my background is full-stack, with experience in Node, Python and Kotlin, giving me a system-level perspective that goes beyond the browser.</p><p>Today I work at the intersection of senior engineering and technical leadership: I define front-end and back-end architecture, establish best practices, mentor teams and make technical decisions with real product impact.</p><p>Outside of code, I'm driven by physical challenges and new perspectives. Extreme sports, travel and music are part of who I am. That mindset of exploring and pushing limits applies to my work too.</p>",

      'pages.blog.title': 'Blog',
      'pages.blog.description':
        'Articles about web development, technology and personal experiences. Sharing knowledge and learning in the software area.',

      'pages.projects.title': 'Projects',
      'pages.projects.description':
        'Portfolio of projects developed by Marcus Gonçalves.',

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
      'components.avatar.alt': 'Marcus Gonçalves',

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
      'components.newsletter.messages.alreadySubscribed':
        'This email is already subscribed to the newsletter.',
      'components.newsletter.messages.timeoutError':
        'Request timeout. Please check your connection and try again.',
      'components.newsletter.messages.networkError':
        'Network error. Please check your internet connection and try again.',
      'components.newsletter.messages.rateLimited':
        'Too many attempts. Please wait a few minutes before trying again.',
      'components.newsletter.messages.serverError':
        'Server temporarily unavailable. Please try again in a few minutes.',
      'components.newsletter.messages.invalidResponse':
        'Invalid server response. Please try again.',
      'components.newsletter.messages.success':
        '✅ Successfully subscribed! Check your email to confirm.',

      // SEO
      'seo.about.title': 'About - Marcus Gonçalves',
      'seo.about.description':
        'Senior software engineer based in Lisbon, specializing in front-end (React, TypeScript, Flutter) with product vision and technical leadership. 15+ years of experience.',
      'seo.blog.title': 'Blog - Marcus Gonçalves',
      'seo.blog.description':
        'Articles about web development, technology and personal experiences. Sharing knowledge and learning in the software area.',
      'seo.projects.title': 'Projects - Marcus Gonçalves',
      'seo.projects.description':
        'Portfolio of projects developed by Marcus Gonçalves.',
      'seo.newsletter.title': 'Newsletter - Marcus Gonçalves',
      'seo.newsletter.description':
        'Subscribe to the newsletter and get the best tips about technology, development and travels.',
      'seo.terms.title': 'Terms and Conditions - Marcus Gonçalves',
      'seo.terms.description':
        'Terms and conditions for newsletter and website services.',
      'seo.privacy.title': 'Privacy Policy - Marcus Gonçalves',
      'seo.privacy.description': 'Privacy policy and personal data protection.',

      // Terms and Conditions
      'pages.terms.title': 'Terms and Conditions',
      'pages.terms.description': 'Terms and conditions for newsletter use',
      'pages.terms.lastUpdated': 'Last updated',
      'pages.terms.date': 'September 14, 2025',
      'pages.terms.section1.title': '1. Acceptance of Terms',
      'pages.terms.section1.content':
        'By subscribing to Marcus Gonçalves newsletter, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to any part of these terms, you should not subscribe to the newsletter.',
      'pages.terms.section2.title': '2. Service Description',
      'pages.terms.section2.content':
        'The newsletter is a free service that provides content about web development, technology, travel, and personal experiences. Content is provided "as is" and may be changed or discontinued at any time.',
      'pages.terms.section3.title': '3. Acceptable Use',
      'pages.terms.section3.content':
        'You agree to use the newsletter only for lawful purposes and in accordance with these terms. It is prohibited to use the service for any illegal, abusive activity or that violates third-party rights.',
      'pages.terms.section4.title': '4. Cancellation',
      'pages.terms.section4.content':
        'You may cancel your newsletter subscription at any time using the cancellation link provided in emails or by contacting us. Cancellation will be effective immediately.',
      'pages.terms.section5.title': '5. Modifications',
      'pages.terms.section5.content':
        'We reserve the right to modify these terms at any time. Modifications will take effect immediately upon publication. Continued use of the newsletter after modifications constitutes acceptance of the new terms.',
      'pages.terms.section6.title': '6. Limitation of Liability',
      'pages.terms.section6.content':
        'Marcus Gonçalves will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the newsletter.',
      'pages.terms.contact.title': 'Contact',
      'pages.terms.contact.content':
        'If you have questions about these Terms and Conditions, contact us at eu@marquinhusgoncalves.com.',

      // Privacy Policy
      'pages.privacy.title': 'Privacy Policy',
      'pages.privacy.description': 'Privacy policy and data protection',
      'pages.privacy.lastUpdated': 'Last updated',
      'pages.privacy.date': 'September 14, 2025',
      'pages.privacy.section1.title': '1. Information Collected',
      'pages.privacy.section1.content':
        'We only collect the email address voluntarily provided by you when subscribing to the newsletter. We also collect basic technical information such as IP address and user agent for security and analysis purposes.',
      'pages.privacy.section2.title': '2. Use of Information',
      'pages.privacy.section2.content':
        'Your email will be used exclusively to send the newsletter and service-related communications. We do not share, sell, or rent your personal information to third parties.',
      'pages.privacy.section3.title': '3. Data Storage',
      'pages.privacy.section3.content':
        'Your data is stored securely using trusted services (Supabase and MailerLite) that implement adequate security measures to protect your information.',
      'pages.privacy.section4.title': '4. Cookies and Similar Technologies',
      'pages.privacy.section4.content':
        'This site may use cookies to improve your experience. You can configure your browser to refuse cookies, but this may affect site functionality.',
      'pages.privacy.section5.title': '5. Your Rights',
      'pages.privacy.section5.content':
        'You have the right to access, correct, update, or delete your personal information at any time. You can also cancel your newsletter subscription using the link provided in emails.',
      'pages.privacy.section6.title': '6. Policy Changes',
      'pages.privacy.section6.content':
        'We may update this Privacy Policy periodically. We will notify about significant changes through the newsletter or by email.',
      'pages.privacy.contact.title': 'Contact',
      'pages.privacy.contact.content':
        'For privacy questions or to exercise your rights, contact us at eu@marquinhusgoncalves.com.',
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
