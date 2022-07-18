import React from 'react';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { MarkdownRemark } from 'interfaces';
import { ImageDataLike } from 'gatsby-plugin-image';

interface PostQueryData {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    featuredImage?: ImageDataLike;
  };
  html: string;
}

const ContentArea = styled('section')(({ theme }) => ({
  maxWidth: theme.size.siteWidth,
  margin: '0 auto',
  padding: '20px',
  blockquote: {
    margin: 0,
    padding: '0 0 0 10px',
    borderLeft: '3px solid var(--blockquote-color)',
    fontSize: '1.4rem',
    color: 'var(--blockquote-color)',
  },
  p: {
    lineHeight: 1.5,
    'a:link': {
      color: 'var(--blue-500)',
    },
  },
  pre: {
    maxWidth: '100%',
    code: {
      maxWidth: '100%',
      whiteSpace: 'break-spaces',
    },
  },
  img: {
    maxWidth: '100%',
  },
}));

const postPage: React.FC<MarkdownRemark<PostQueryData>> = WithThemes(({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, featuredImage, tags },
      html,
    },
  } = data;
  return (
    <>
      <Header title={title} description={date} image={featuredImage} tags={tags} />
      <ContentArea dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
});

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default postPage;
