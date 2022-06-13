import React from 'react';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from 'components/Typography';
import useUtils from 'hooks/useUtils';
import { Theme } from 'assets/styles/theme';
import Navigation from 'components/common/Header/Navigation';
import SmSizeBr from 'components/common/SmSizeBr';

type HeaderComponentProps = { theme: Theme };
const HeaderComponent = styled('header')(() => ({
  display: 'flex',
  position: 'relative',
  height: 600,
  overflow: 'hidden',
  [mixins.breakpoints.md]: {
    height: 400,
  },
  [mixins.breakpoints.sm]: {
    height: 320,
  },
}));

const HeaderImageWrap = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  '&::after': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    display: 'block',
    content: '""',
    backdropFilter: 'blur(2px)',
  },
}));

const HeaderTextArea = styled('div')(({ theme }: HeaderComponentProps) => ({
  width: theme.size.siteWidth,
  margin: '0 auto',
  padding: '25rem 20px 0',
  position: 'relative',
  zIndex: 3,
  color: 'var(--gray-050)',
  [mixins.breakpoints.md]: {
    padding: '15rem 20px 0',
  },
  [mixins.breakpoints.sm]: {
    padding: '7.5rem 20px 0',
  },
}));

interface HeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  navigationClassName?: string;
  headerClassName?: string;
}

const Header: React.FC<HeaderProps> = ({ navigationClassName = '', headerClassName = '', ...props }) => {
  const { useClassName } = useUtils();
  const {
    title = (
      <>
        이희현의 <SmSizeBr />
        제멋대로 블로그
      </>
    ),
    description = (
      <>
        The difference <SmSizeBr />
        between a dream and a goal <SmSizeBr />
        is a plan
      </>
    ),
  } = props;

  return (
    <>
      <Navigation className={useClassName([navigationClassName])} />
      <HeaderComponent className={useClassName([headerClassName])}>
        <HeaderImageWrap>
          <StaticImage
            css={{ width: '100%', height: '100%' }}
            src="../../assets/images/header-background.jpg"
            layout="fullWidth"
            alt="header background image"
          />
        </HeaderImageWrap>
        <HeaderTextArea>
          <Typography themeColor="gray-100" variant="headline-h1" md="headline-h2" sm="headline-h3" as="h1">
            {title}
          </Typography>
          <Typography
            themeColor="gray-300"
            variant="subhead-subhead4"
            md="subhead-subhead6"
            sm="subhead-subhead8"
            as="h3"
          >
            {description}
          </Typography>
        </HeaderTextArea>
      </HeaderComponent>
    </>
  );
};
export default Header;
