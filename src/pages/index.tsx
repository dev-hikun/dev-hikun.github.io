import React from 'react';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
import MainProfile from 'components/MainProfile';
import { graphql } from 'gatsby';
import Posts from 'components/Posts';
import { AllMarkdownResult } from 'interfaces';
import { ImageDataLike } from 'gatsby-plugin-image';

const Aside = styled('aside')(() => ({
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '250px',
  [mixins.breakpoints.md]: {
    flexGrow: 0,
    flexBasis: '100%',
    paddingBottom: '20px',
  },
  [mixins.breakpoints.sm]: {
    padding: '0 20px 20px',
  },
}));

const AsideSection: React.FC = () => {
  return (
    <Aside>
      <MainProfile />
    </Aside>
  );
};

const MainLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: theme.size.siteWidth,
  margin: '0 auto',
  columnGap: '15px',
  padding: '20px 20px',
  [mixins.breakpoints.md]: {
    flexWrap: 'wrap',
    padding: '20px 20px',
  },
  [mixins.breakpoints.sm]: {
    padding: '20px 0',
  },
}));

export type IndexQueryData = {
  edges: Array<{
    node: {
      excerpt: string;
      frontmatter: {
        date: string;
        title: string;
        tags: string[];
        slug: string;
        featuredImage?: ImageDataLike;
      };
    };
  }>;
};

const indexPage: React.FC<AllMarkdownResult<IndexQueryData>> = WithThemes(({ data }) => {
  return (
    <>
      <Header />
      <MainLayout>
        <AsideSection />
        <Posts data={data} />
      </MainLayout>
    </>
  );
});

export const query = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default indexPage;
