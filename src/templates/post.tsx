/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { MainContent } from '../styles/base';
import * as S from './post.styled';

interface PostContext {
  slug: string;
  next: any;
  previous: any;
  language: string;
}

interface PostData {
  markdownRemark: {
    frontmatter: {
      title: string;
      date: string;
      slug: string;
    };
    timeToRead: number;
    html: string;
  };
}

const Post: React.FC<PageProps<PostData, PostContext>> = (props) => {
  const { t, i18n } = useTranslation();
  const {
    data: { markdownRemark },
    pageContext: { slug, next, previous, language },
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

  const nextPost = next && {
    fields: {
      slug: `${language === 'en' ? '/en' : ''}/blog${next.fields.slug}`,
    },
    frontmatter: {
      title: next.frontmatter.title,
    },
  };

  const previousPost = previous && {
    fields: {
      slug: `${language === 'en' ? '/en' : ''}/blog${previous.fields.slug}`,
    },
    frontmatter: {
      title: previous.frontmatter.title,
    },
  };

  return (
    <Layout>
      <S.PostContainer>
        <Titles title={title} />
        <PostInfo date={date} timeToRead={timeToRead.toString()} />
        <MainContent>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainContent>

        <ShareButtons
          url={`${language === 'en' ? '/en' : ''}/blog${slug}`}
          title={title}
          description={`Post sobre ${title} - Blog de Marquinhus Gonçalves`}
          hashtags={[]}
          via="marquinhusgonc"
        />

        <AdsenseArticle />
        <RelatedPosts next={nextPost} previous={previousPost} />
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
  const { language } = pageContext;

  return (
    <SEO
      title={title}
      type="article"
      url={`https://www.marquinhusgoncalves.com${language === 'en' ? '/en' : ''}/blog${slug}`}
      author="Marquinhus Gonçalves"
      datePublished={date}
      dateModified={date}
      tags={['blog', 'desenvolvimento', 'tecnologia']}
    />
  );
};
