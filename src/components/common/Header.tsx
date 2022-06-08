import React from 'react';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
import { MdOutlineWbSunny as LightThemeIcon } from 'react-icons/md';
import { RiMoonFill as DarkThemeIcon } from 'react-icons/ri';
import { Theme } from 'assets/styles/theme';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from 'components/Typography';
interface HeaderProps {
  themeChanged?: () => void;
  isDark: boolean;
}

type NavigationProps = {
  theme: Theme;
};
const Navigation = styled('nav')(({ theme }: NavigationProps) => {
  return {
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 10,
    span: {
      color: theme.color.gray['050'],
      fontWeight: 'bold',
    },
  };
});

const NaviWrap = styled('div')(({ theme }: NavigationProps) => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: theme.size.siteWidth,
  margin: '0 auto',
  padding: '10px 20px',
  '.toggleButton': {
    borderRadius: 5,
    background: 'transparent',
    height: 34,
    width: 34,
    border: 0,
    color: theme.color.gray['050'],
    padding: '6px 0',
    textAlign: 'center',
    svg: {
      width: 20,
      height: 20,
    },
  },
}));

const HeaderComponent = styled('header')(() => ({
  display: 'flex',
  position: 'relative',
  height: 600,
  overflow: 'hidden',
  [mixins.breakpoints.md]: {
    height: 400,
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

const HeaderTextArea = styled('div')(({ theme }: NavigationProps) => ({
  width: theme.size.siteWidth,
  margin: '0 auto',
  padding: '15rem 20px 0',
  position: 'relative',
  zIndex: 3,
  color: theme.color.gray['050'],
  [mixins.breakpoints.md]: {
    padding: '12rem 20px 0',
  },
}));

const SmSizeBr = styled('br')(() => ({
  display: 'none',
  [mixins.breakpoints.sm]: {
    display: 'initial',
  },
}));

const Header: React.FC<HeaderProps> = ({ isDark, themeChanged }) => {
  return (
    <>
      <Navigation>
        <NaviWrap>
          <span>이희현</span>
          <button className="toggleButton" onClick={themeChanged}>
            {isDark ? <LightThemeIcon /> : <DarkThemeIcon />}
          </button>
        </NaviWrap>
      </Navigation>
      <HeaderComponent>
        <HeaderImageWrap>
          <StaticImage
            style={{ width: '100%', height: '100%' }}
            src="../../assets/images/header-background.jpg"
            alt="header background image"
          />
        </HeaderImageWrap>
        <HeaderTextArea>
          <Typography color="gray-050" variant="headline-h1" md="headline-h2" sm="headline-h3" as="h1">
            {' '}
            이희현의 <SmSizeBr />
            제멋대로 블로그{' '}
          </Typography>
          <Typography color="gray-200" variant="subhead-subhead4" md="subhead-subhead6" sm="subhead-subhead8" as="h3">
            The difference <SmSizeBr />
            between a dream and a goal <SmSizeBr />
            is a plan
          </Typography>
        </HeaderTextArea>
      </HeaderComponent>
    </>
  );
};
export default Header;
