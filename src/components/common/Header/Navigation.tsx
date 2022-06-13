import styled from '@emotion/styled';
import { Theme } from 'assets/styles/theme';
import { useBlogSettingsContext } from 'contexts';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import useUtils from 'hooks/useUtils';
import Button from 'components/Button';
import { MdOutlineWbSunny as LightThemeIcon } from 'react-icons/md';
import { RiMoonFill as DarkThemeIcon } from 'react-icons/ri';
import Typography from 'components/Typography';
import { Link } from 'gatsby';
import mixins from 'assets/styles/mixins';

type NavigationComponentProps = {
  theme: Theme;
};
const NavigationComponent = styled('nav')(() => {
  return {
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 10,
  };
});

const NaviWrap = styled('div')(({ theme }: NavigationComponentProps) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: theme.size.siteWidth,
  margin: '0 auto',
  padding: '10px 20px',
  borderWidth: 0,
  background: 'transparent',
  backdropFilter: 'initial',
  transition: 'background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease',
  willChange: 'color, background-color, border-color, backdrop-filter',

  a: {
    h1: {
      color: 'var(--gray-050)',
    },
    span: {
      color: 'var(--gray-050)',
    },
    '&:hover': {
      span: {
        color: 'var(--info)',
        textShadow: '0 2px 8px 0 var(--black-100)',
      },
      borderBottom: '3px solid var(--info)',
    },
    '*': { margin: 0 },
  },
  '.toggleButton': {
    borderRadius: 5,
    background: 'transparent',
    height: 34,
    width: 34,
    border: 0,
    color: `var(--gray-050)`,
    padding: '6px 0',
    textAlign: 'center',
  },

  '&.is-scroll': {
    borderBottom: `1px solid var(--hr-color)`,
    backgroundColor: 'var(--nav-background-color)',
    backdropFilter: 'blur(3px)',
    span: { color: 'var(--text-color)' },
    '.toggleButton': {
      color: `var(--text-color)`,
    },
  },
}));

const MenuWrap = styled('ul')(() => ({
  display: 'flex',
  '& > :first-of-type': {
    padding: '0 30px 0 0',
  },
  [mixins.breakpoints.md]: {
    display: 'none',
  },
}));

const MenuItem = styled('li')(() => ({
  listStyle: 'none',
  padding: '0 10px',
}));

interface NavigationProps {
  className?: string;
}
const ModeChangeButton = memo(() => {
  const { isDarkMode, setDarkMode } = useBlogSettingsContext();
  return (
    <Button
      variant="none"
      themeColor="gray"
      size="tiny"
      className="toggleButton"
      onClick={() => setDarkMode && setDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <LightThemeIcon size={20} /> : <DarkThemeIcon size={20} />}
    </Button>
  );
});

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { useClassName } = useUtils();
  const [isScroll, setIsScroll] = useState(false);

  const handleFollow = useCallback(() => {
    if (window?.scrollY > 0) setIsScroll(true);
    else setIsScroll(false);
  }, []);

  useEffect(() => {
    handleFollow();
    window?.addEventListener('scroll', handleFollow);
    return () => {
      window?.removeEventListener('scroll', handleFollow);
    };
  }, []);

  return (
    <NavigationComponent>
      <NaviWrap className={useClassName([className, isScroll ? 'is-scroll' : ''])}>
        <MenuWrap>
          <MenuItem>
            <Link title="Home" to="/">
              <Typography variant="subhead-subhead1" as="h1">
                이희현
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link title="About" to="/about">
              <Typography variant="subhead-subhead3">About</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link title="Tech" to="/tech">
              <Typography variant="subhead-subhead3">Tech</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link title="Life" to="/life">
              <Typography variant="subhead-subhead3">Life</Typography>
            </Link>
          </MenuItem>
        </MenuWrap>
        <ModeChangeButton />
      </NaviWrap>
    </NavigationComponent>
  );
};
export default Navigation;
