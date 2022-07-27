import React from 'react';
import Typography from 'components/Typography';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
import { ColorDic } from 'assets/styles/theme/colors';
import { keyframes } from '@emotion/react';
import { Link } from 'gatsby';
import { AllMarkdownResult } from 'interfaces';
import { IndexQueryData } from 'pages';
import { getImage, IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';

export interface PostListProps extends AllMarkdownResult<IndexQueryData> {
  title?: string;
}

export interface IPostItem {
  title: string;
  slug: string;
  tags: string[];
  content: string;
  date: string;
  image?: IGatsbyImageData;
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
  backgroundColor: 'var(--content-background-color)',
  overflow: 'hidden',
  listStyle: 'none',
  transition: 'all .15s',
  display: 'flex',
  flexDirection: 'column',
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
  [mixins.breakpoints.sm]: {
    border: 0,
    borderRadius: 0,
  },
}));

const PostItemHeader = styled('div')(() => ({
  borderBottom: '1px solid var(--hr-color)',
  display: 'flex',
  flexDirection: 'column',
  flex: '0 1 100%',
}));

const PostItemImageWrapper = styled(Link)(() => ({
  height: 160,
  flexBasis: '160px',
  minHeight: 160,
  backgroundColor: 'var(--hr-color)',
  overflow: 'hidden',
  display: 'block',
  [mixins.breakpoints.sm]: {
    height: 'auto',
  },
}));

const PostItemDescription = styled(Link)(() => ({
  padding: '24px 24px 0 24px',
  display: 'block',
  flex: '0 1 100%',
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
  flex: '0 1 70px',
  padding: 24,
  minHeight: 70,
  margin: '0px -3px',
  overflowX: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: 0,
    height: 0,
  },
  span: {
    display: 'block',
    padding: '2px 6px',
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
  const { title, data } = props;

  const posts: Array<IPostItem> = data.allMarkdownRemark.edges.map(edge => {
    const { excerpt, frontmatter } = edge.node;
    const { date, slug, tags, title, featuredImage } = frontmatter;
    return {
      title,
      tags,
      slug,
      date,
      content: excerpt,
      ...(featuredImage ? { image: getImage(featuredImage) } : {}),
    };
  });
  return (
    <PostWrap>
      {title ? <Typography variant="headline-h5">{title}</Typography> : null}
      <PostList>
        {posts.map(item => {
          return (
            <PostItem key={item.title} className={!item.image ? 'no-image' : ''}>
              <PostItemHeader>
                {item.image && (
                  <PostItemImageWrapper to={item.slug}>
                    <GatsbyImage css={{ height: '100%', width: '100%' }} image={item.image} alt={item.title} />
                  </PostItemImageWrapper>
                )}
                <PostItemDescription to={item.slug}>
                  <Typography
                    className="post-title"
                    variant="subhead-subhead3"
                    as="h3"
                    ellipsis={{
                      default: 2,
                      sm: 1,
                    }}
                    css={{ maxHeight: '48px', [mixins.breakpoints.sm]: { maxHeight: '24px' } }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    className="post-description"
                    variant="interface-body2"
                    themeColor="gray-500"
                    as="div"
                    ellipsis={{
                      default: 4,
                      md: 3,
                      sm: 2,
                    }}
                    css={{
                      maxHeight: '88px',
                      [mixins.breakpoints.md]: {
                        maxHeight: '66px',
                      },
                      [mixins.breakpoints.sm]: { maxHeight: '44px' },
                    }}
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
export default Posts;
