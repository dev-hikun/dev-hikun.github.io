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

const PostItemImageWrapper = styled('a')(() => ({
  height: 160,
  backgroundColor: 'var(--hr-color)',
  overflow: 'hidden',
  display: 'block',
}));

const PostItemDescription = styled('a')(() => ({
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
    padding: '2px 6px',
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
  const { title } = props;
  return (
    <PostWrap>
      {title ? <Typography variant="headline-h5">{title}</Typography> : null}
      <PostList>
        {Array(20)
          .fill(1)
          .map((_, i) => {
            return (
              <PostItem key={i}>
                <PostItemHeader>
                  <PostItemImageWrapper href="/">
                    <StaticImage
                      src={'../assets/images/sample-image.svg'}
                      alt={'ㅁㅇㄴㄹㅁㅇㄴㄹㅁㄴㄹㄹㅁ'}
                      layout="fullWidth"
                    />
                  </PostItemImageWrapper>
                  <PostItemDescription href="/">
                    <Typography
                      className="post-title"
                      variant="subhead-subhead3"
                      as="h3"
                      ellipsis={2}
                      css={{ height: '48px' }}
                    >
                      개츠비로 블로그를 만들면서 디자인시스템도 함께 개발하면 개발량이 어마무시해요! 두줄을 넘기기
                      위해선 텍스트를
                    </Typography>
                    <Typography
                      className="post-description"
                      variant="interface-body2"
                      themeColor="gray-500"
                      as="div"
                      ellipsis={4}
                      css={{ height: '88px' }}
                    >
                      함께 하고 있는데 개발량이 엄청 어마무시한 건에 대하여 설명을 쓰려고 하는데 두줄이 넘어가겠죠?
                      이정도 작성하면? 그렇죠? 4줄까지 나오게 하려고 해요. 그럴려면 설명이 진짜 길어야 하는데 넣기가
                      너무 힘드네요
                    </Typography>
                  </PostItemDescription>
                  <PostItemTags>
                    <Typography variant="interface-description">개발</Typography>
                    <Typography variant="interface-description">React</Typography>
                    <Typography variant="interface-description">Gatsby</Typography>
                  </PostItemTags>
                </PostItemHeader>
                <PostItemFooter>
                  <Typography variant="interface-description" themeColor="gray-500">
                    2022.06.20
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

const indexPage: React.FC = WithThemes(() => (
  <>
    <Header />
    <MainLayout>
      <AsideSection />
      <Posts />
    </MainLayout>
  </>
));
export default indexPage;
