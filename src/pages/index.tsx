import React from 'react';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';
import Typography from 'components/Typography';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
import MainProfile from 'components/MainProfile';
import { StaticImage } from 'gatsby-plugin-image';
import { ColorDic } from 'assets/styles/theme/colors';
import { keyframes } from '@emotion/react';
import { graphql, Link } from 'gatsby';

const Aside = styled('aside')(() => ({
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '250px',
  [mixins.breakpoints.md]: {
    flexGrow: 0,
    flexBasis: '100%',
    paddingBottom: '20px',
  },
}));

const AsideSection: React.FC = () => {
  return (
    <Aside>
      <MainProfile />
    </Aside>
  );
};

interface PostListProps {
  title?: string;
  posts: Array<{
    title: string;
    content: string;
    tags: string[];
    date: string;
    slug: string;
  }>;
}
const PostWrap = styled('section')(() => ({
  flexBasis: '100%',
  flexShrink: 1,
  flexGrow: 2,
  [mixins.breakpoints.md]: {
    minWidth: '100%',
    flexGrow: 0,
  },
}));

const PostList = styled('ul')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 15,
  rowGap: 15,
  [mixins.breakpoints.md]: {
    rowGap: 20,
  },
}));

const PostItem = styled('li')(({ theme }) => ({
  borderRadius: theme.size.sectionBorderRadius,
  backgroundColor: 'var(--profile-background-color)',
  border: '1px solid var(--hr-color)',
  overflow: 'hidden',
  listStyle: 'none',
  transition: 'all .15s',
  boxShadow: `10px 20px 20px 0 ${theme.isDark ? 'rgba(255,255,255, .08)' : 'rgba(92, 95, 112, .08)'}`,
  '&:hover': {
    boxShadow: `10px 20px 30px 0 ${theme.isDark ? 'rgba(255,255,255, .16)' : 'rgba(92, 95, 112, .16)'}`,
    transform: 'translate3d(0,-4px,0)',

    img: {
      animation: `${keyframes`
      from { transform: scale(1) }
      to { transform: scale(1.1) }
    `} 1s ease-in forwards`,
    },
  },

  maxWidth: `calc(33.3% - 10px)`,
  flexBasis: '33.3%',
  [mixins.breakpoints.xl]: {
    flexBasis: '50%',
    maxWidth: `calc(50% - 7.5px)`,
  },
  [mixins.breakpoints.md]: {
    flexBasis: '100%',
    maxWidth: '100%',
  },
}));

const PostItemHeader = styled('div')(() => ({
  borderBottom: '1px solid var(--hr-color)',
}));

const PostItemImageWrapper = styled(Link)(() => ({
  height: 160,
  backgroundColor: 'var(--hr-color)',
  overflow: 'hidden',
  display: 'block',
}));

const PostItemDescription = styled(Link)(() => ({
  padding: '24px 24px 0 24px',
  display: 'block',
  '.post-title': {
    margin: 0,
    color: 'var(--text-color)',
  },
  '.post-description': {
    marginTop: 8,
  },
}));

const PostItemTags = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: 24,
  margin: '0px -3px',
  span: {
    display: 'inline-block',
    maxWidth: '23%',
    overflow: 'hidden',
    padding: '2px 6px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: '0px 3px',
    borderRadius: '8px',
    backgroundColor: theme.isDark ? ColorDic['gray-500'] : ColorDic['gray-200'],
    color: theme.isDark ? ColorDic['gray-200'] : ColorDic['gray-500'],
  },
}));

const PostItemFooter = styled('div')(() => ({
  display: 'flex',
  padding: '10px 24px',
}));

const Posts: React.FC<PostListProps> = props => {
  const { posts, title } = props;
  return (
    <PostWrap>
      {title ? <Typography variant="headline-h5">{title}</Typography> : null}
      <PostList>
        {posts.map((item, i) => {
          return (
            <PostItem key={item.title}>
              <PostItemHeader>
                <PostItemImageWrapper to={item.slug}>
                  <StaticImage
                    src={'../assets/images/sample-image.svg'}
                    alt={'ㅁㅇㄴㄹㅁㅇㄴㄹㅁㄴㄹㄹㅁ'}
                    layout="fullWidth"
                  />
                </PostItemImageWrapper>
                <PostItemDescription to={item.slug}>
                  <Typography
                    className="post-title"
                    variant="subhead-subhead3"
                    as="h3"
                    ellipsis={2}
                    css={{ height: '48px' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="post-description"
                    variant="interface-body2"
                    themeColor="gray-500"
                    as="div"
                    ellipsis={4}
                    css={{ height: '88px' }}
                  >
                    {item.content}
                  </Typography>
                </PostItemDescription>
                <PostItemTags>
                  {item.tags.map(tag => (
                    <Typography variant="interface-description" key={tag}>
                      {tag}
                    </Typography>
                  ))}
                </PostItemTags>
              </PostItemHeader>
              <PostItemFooter>
                <Typography variant="interface-description" themeColor="gray-500">
                  {item.date}
                </Typography>
              </PostItemFooter>
            </PostItem>
          );
        })}
      </PostList>
    </PostWrap>
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
}));

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          excerpt: string;
          frontmatter: {
            date: string;
            title: string;
            tags: string[];
            slug: string;
          };
        };
      }>;
    };
  };
}

const indexPage: React.FC<IndexPageProps> = WithThemes(({ data }) => {
  const posts: PostListProps['posts'] = data.allMarkdownRemark.edges.map(item => {
    const {
      node: { excerpt, frontmatter },
    } = item;
    const { date, tags, title, slug } = frontmatter;
    return {
      title,
      tags,
      date,
      slug,
      content: excerpt,
    };
  });
  return (
    <>
      <Header />
      <MainLayout>
        <AsideSection />
        <Posts posts={posts} />
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
          }
        }
      }
    }
  }
`;
export default indexPage;
