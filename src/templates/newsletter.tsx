import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import PostInfo from '../components/PostInfo';
import ShareButtons from '../components/ShareButtons';
import NewsletterSignup from '../components/NewsletterSignup';
import { MainContent } from '../styles/base';
import * as S from './newsletter.styled';

interface NewsletterEditionContext {
  slug: string;
  language: string;
  collectionBase: string;
}

interface NewsletterEditionData {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: string;
      description: string;
      subject: string;
    };
    timeToRead: number;
    html: string;
  };
}

const NewsletterEdition: React.FC<
  PageProps<NewsletterEditionData, NewsletterEditionContext>
> = (props) => {
  const { t, i18n } = useTranslation();
  const {
    data: { markdownRemark },
    pageContext: { slug, language, collectionBase = '/newsletter' },
  } = props;

  React.useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  const {
    frontmatter: { title, date, subject },
    timeToRead,
    html,
  } = markdownRemark;

  const collectionPath =
    language === 'en' ? `/en${collectionBase}` : collectionBase;

  return (
    <Layout>
      <S.NewsletterEditionContainer>
        <Titles title={title} />
        {subject && <S.SubjectLabel>{subject}</S.SubjectLabel>}
        <PostInfo date={date} timeToRead={timeToRead.toString()} />
        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainContent>
        <ShareButtons
          url={`${collectionPath}${slug}`}
          title={title}
          description={t('pages.newsletter.edition.shareDescription', {
            title,
          })}
          hashtags={[]}
          via="marquinhusgonc"
        />
        <NewsletterSignup variant="post-end" />
      </S.NewsletterEditionContainer>
    </Layout>
  );
};

export const query = graphql`
  query NewsletterEditionQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        subject
      }
      timeToRead
      html
    }
  }
`;

export default NewsletterEdition;

export const Head: HeadFC<NewsletterEditionData, NewsletterEditionContext> = ({
  data,
  pageContext,
}) => {
  const title = data?.markdownRemark?.frontmatter?.title || 'Newsletter';
  const description = data?.markdownRemark?.frontmatter?.description;
  const date = data?.markdownRemark?.frontmatter?.date;
  const { language, slug, collectionBase = '/newsletter' } = pageContext;

  return (
    <SEO
      title={`${title} — Newsletter · Marcus Gonçalves`}
      description={description}
      type="article"
      url={`https://www.marquinhusgoncalves.com${language === 'en' ? '/en' : ''}${collectionBase}${slug}`}
      author="Marcus Gonçalves"
      datePublished={date}
      dateModified={date}
    />
  );
};
