import React from 'react';
import Text from 'components/text';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';
import SmSizeBr from 'components/common/SmSizeBr';
import styled from '@emotion/styled';

const EmailLink = styled('a')(() => ({
  '&:link, &:visited': {
    color: 'var(--blue-400)',
  },
  '&:hover': {
    color: 'var(--blue-200)',
  },
}));

const aboutPage: React.FC = WithThemes(() => (
  <>
    <Header
      title={
        <>
          이희현
          <SmSizeBr />
          {` (Harry, ひー君)`}
        </>
      }
      description={
        <>
          <EmailLink href="mailto:dev.hikun@gmail.com">dev.hikun@gmail.com</EmailLink>
          <SmSizeBr />
          {` / Software Engineer `}
          <SmSizeBr />
          {' / '}
          {`1992.10.24`}
        </>
      }
    />
    <Text text={`this page is not maked yet`} />
  </>
));
export default aboutPage;
