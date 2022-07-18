import React from 'react';
import Text from 'components/text';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

interface PostProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
      };
      html: string;
    };
  };
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
}));

const postPage: React.FC<PostProps> = WithThemes(({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  } = data;
  return (
    <>
      <Header title={title} description={date} />
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
      }
    }
  }
`;
export default postPage;
