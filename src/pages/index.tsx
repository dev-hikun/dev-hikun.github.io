import React from 'react';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';
import Typography from 'components/Typography';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
import MainProfile from 'components/MainProfile';

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
  title: string;
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

const PostList: React.FC<PostListProps> = props => {
  const { title } = props;
  return (
    <PostWrap>
      <Typography variant="headline-h4">{title}</Typography>
    </PostWrap>
  );
};

const MainLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: theme.size.siteWidth,
  margin: '0 auto',
  columnGap: '20px',
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
      <PostList title={`Recent Post`} />
    </MainLayout>
  </>
));
export default indexPage;
