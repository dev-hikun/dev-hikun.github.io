import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
import { MdOutlineWbSunny as LightThemeIcon } from 'react-icons/md';
import { RiMoonFill as DarkThemeIcon } from 'react-icons/ri';
import { Theme } from 'assets/styles/theme';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from 'components/Typography';
import Button from 'components/Button';
import useUtils from 'hooks/useUtils';
import { useBlogSettingsContext } from 'contexts';

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

const HeaderTextArea = styled('div')(({ theme }: NavigationProps) => ({
  width: theme.size.siteWidth,
  margin: '0 auto',
  padding: '25rem 100px 0',
  position: 'relative',
  zIndex: 3,
  color: theme.color.gray['050'],
  [mixins.breakpoints.md]: {
    padding: '15rem 20px 0',
  },
  [mixins.breakpoints.sm]: {
    padding: '7.5rem 20px 0',
  },
}));

const SmSizeBr = styled('br')(() => ({
  display: 'none',
  [mixins.breakpoints.sm]: {
    display: 'initial',
  },
}));

interface HeaderProps {
  navigationClassName?: string;
  headerClassName?: string;
}

const Header: React.FC<HeaderProps> = ({ navigationClassName = '', headerClassName = '' }) => {
  const { isDarkMode, setDarkMode } = useBlogSettingsContext();
  const { useClassName } = useUtils();
  const [isTop, setIsTop] = useState(true);
  const handleFollow = useCallback(() => {
    if (!window) return;
    if (window.scrollY > 0) setIsTop(true);
    else setIsTop(false);
  }, [window]);

  useEffect(() => {
    window?.addEventListener('scroll', handleFollow);
    return () => {
      window?.removeEventListener('scroll', handleFollow);
    };
  }, []);

  return (
    <>
      <Navigation>
        <NaviWrap className={useClassName([navigationClassName, isTop ? 'is-top' : ''])}>
          <span>이희현</span>
          <Button
            variant="none"
            themeColor="gray"
            size="tiny"
            className="toggleButton"
            onClick={() => setDarkMode && setDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <LightThemeIcon /> : <DarkThemeIcon />}
          </Button>
        </NaviWrap>
      </Navigation>
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
            이희현의 <SmSizeBr />
            제멋대로 블로그
          </Typography>
          <Typography
            themeColor="gray-300"
            variant="subhead-subhead4"
            md="subhead-subhead6"
            sm="subhead-subhead8"
            as="h3"
          >
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
