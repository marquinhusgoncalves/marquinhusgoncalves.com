import React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Titles from '../components/Titles';
import PostInfo from '../components/PostInfo';
import Comments from '../components/Comments';
import RelatedPosts from '../components/RelatedPosts';
import AdsenseArticle from '../components/GoogleAdsense/article';
import ShareButtons from '../components/ShareButtons';
import NewsletterSignup from '../components/NewsletterSignup';

import { MainContent } from '../styles/base';
import * as S from './post.styled';

interface RelatedPost {
  slug: string;
  title: string;
}

interface PostContext {
  slug: string;
  relatedPosts: RelatedPost[];
  language: string;
  collectionBase?: string;
}

interface PostData {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: string;
      slug: string;
      image?: string;
    };
    timeToRead: number;
    html: string;
  };
}

const Post: React.FC<PageProps<PostData, PostContext>> = (props) => {
  const { i18n } = useTranslation();
  const {
    data: { markdownRemark },
    pageContext: {
      slug,
      relatedPosts = [],
      language,
      collectionBase = '/blog',
    },
  } = props;

  React.useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  const {
    frontmatter: { title, date },
    timeToRead,
    html,
  } = markdownRemark;

  const base = language === 'en' ? `/en${collectionBase}` : collectionBase;
  const localizedRelatedPosts = relatedPosts.map((post) => ({
    title: post.title,
    slug: `${base}${post.slug}`,
  }));

  return (
    <Layout>
      <S.PostContainer>
        <Titles title={title} />
        <PostInfo date={date} timeToRead={timeToRead.toString()} />
        <MainContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainContent>

        <ShareButtons
          url={`${language === 'en' ? '/en' : ''}/blog${slug}`}
          title={title}
          description={`Post sobre ${title} - Blog de Marcus Gonçalves`}
          hashtags={[]}
          via="marquinhusgonc"
        />

        <NewsletterSignup variant="post-end" />
        <AdsenseArticle />
        <RelatedPosts posts={localizedRelatedPosts} />
        <Comments
          url={`${language === 'en' ? '/en' : ''}/blog${slug}`}
          title={title}
        />
      </S.PostContainer>
    </Layout>
  );
};

export const query = graphql`
  query Post($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      timeToRead
      html
    }
  }
`;

export default Post;

export const Head: HeadFC<PostData, PostContext> = ({ data, pageContext }) => {
  const title = data?.markdownRemark?.frontmatter?.title || 'Post';
  const date = data?.markdownRemark?.frontmatter?.date;
  const slug = data?.markdownRemark?.frontmatter?.slug;
  const image = data?.markdownRemark?.frontmatter?.image;
  const { language } = pageContext;

  const ogImage = image
    ? `https://www.marquinhusgoncalves.com${image}`
    : undefined;

  return (
    <SEO
      title={title}
      type="article"
      url={`https://www.marquinhusgoncalves.com${language === 'en' ? '/en' : ''}/blog${slug}`}
      image={ogImage}
      author="Marcus Gonçalves"
      datePublished={date}
      dateModified={date}
      tags={['blog', 'desenvolvimento', 'tecnologia']}
    />
  );
};
