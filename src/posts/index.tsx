import React from 'react';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { MarkdownRemark } from 'interfaces';
import { ImageDataLike } from 'gatsby-plugin-image';
import mixins from 'assets/styles/mixins';

interface PostQueryData {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    category: string;
    featuredImage?: ImageDataLike;
  };
  html: string;
}

const ContentArea = styled('section')(({ theme }) => ({
  maxWidth: theme.size.siteWidth,
  margin: '0 auto',
  padding: '20px',
  fontSize: '18px',
  lineHeight: 1.7,
  [mixins.breakpoints.md]: {
    fontSize: '16px',
  },
  [mixins.breakpoints.sm]: {
    fontSize: '14px',
  },
  blockquote: {
    margin: '1em 0',
    padding: '10px 0 10px 10px',
    borderLeft: '3px solid var(--blockquote-color)',
    // color: 'var(--blockquote-color)',
    backgroundColor: 'var(--blockquote-background-color)',
    p: {
      margin: 0,
    },
  },
  a: {
    color: 'var(--blue-500)',
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
  ul: {
    margin: '0 0 0 1em',
    padding: 0,
  },
}));

const postPage: React.FC<MarkdownRemark<PostQueryData>> = WithThemes(({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, featuredImage, tags, category },
      html,
    },
  } = data;
  return (
    <>
      <Header title={title} description={`${category} / ${date}`} image={featuredImage} tags={tags} />
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
        category
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
