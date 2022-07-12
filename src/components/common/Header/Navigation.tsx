import styled from '@emotion/styled';
import { Theme } from 'assets/styles/theme';
import React, { memo, useCallback, useEffect, useState } from 'react';
import useUtils from 'hooks/useUtils';
import Button from 'components/Button';
import { MdOutlineWbSunny as LightThemeIcon, MdMenu as HambergerIcon } from 'react-icons/md';
import { RiMoonFill as DarkThemeIcon } from 'react-icons/ri';
import Typography from 'components/Typography';
import { Link } from 'gatsby';
import mixins from 'assets/styles/mixins';
import { useDarkModeContext } from 'contexts/index';

type NavigationComponentProps = {
  theme: Theme;
};
const NavigationComponent = styled('nav')(() => ({
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: 10,
  borderWidth: 0,
  background: 'transparent',
  backdropFilter: 'initial',
  transition: 'background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease',
  willChange: 'color, background-color, border-color, backdrop-filter',

  '&.is-active': {
    borderBottom: `1px solid var(--hr-color)`,
    backgroundColor: 'var(--nav-background-color)',
    backdropFilter: 'blur(3px)',
    'h1, span': { color: 'var(--text-color)' },
    '.nav-button': {
      color: `var(--text-color)`,
    },
  },
}));

const NaviWrap = styled('div')(({ theme }: NavigationComponentProps) => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth: theme.size.siteWidth,
  margin: '0 auto',
  padding: '10px 20px',

  h1: {
    color: 'var(--gray-050)',
    margin: 0,
  },
  '.nav-button': {
    borderRadius: '50%',
    background: 'transparent',
    height: 34,
    width: 34,
    border: 0,
    color: `var(--gray-050)`,
    padding: '6px 0',
    textAlign: 'center',
    '&.hamberger': {
      display: 'none',
      [mixins.breakpoints.md]: {
        display: 'block',
      },
    },
  },

  [mixins.breakpoints.md]: {
    justifyContent: 'space-between',
  },
}));

const Logo = styled(Link)(() => ({
  marginRight: '30px',
  [mixins.breakpoints.md]: {
    margin: 0,
  },
}));

const MenuWrap = styled('ul')(() => ({
  display: 'flex',
  [mixins.breakpoints.md]: {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    top: 55,
    left: 0,
    '&.is-open': {
      display: 'block',
    },
  },
}));

const MenuItem = styled('li')(() => ({
  listStyle: 'none',
  padding: '0 10px',
  a: {
    transition: 'border-bottom 0.15s ease, color 0.25s ease',

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
  },

  [mixins.breakpoints.md]: {
    width: '100%',
    padding: '8px 10px',
    backgroundColor: 'var(--nav-background-color)',

    a: {
      display: 'block',
      padding: '5px 10px',
      span: {
        color: 'var(--text-color)',
      },
      '&:hover': {
        span: {
          color: 'var(--white-100)',
        },
        borderBottom: 0,
        borderRadius: 10,
        backgroundColor: 'var(--info)',
      },
    },
  },
}));

const Space = styled('div')(() => ({
  flexGrow: 1,
  [mixins.breakpoints.md]: {
    display: 'none',
  },
}));

const ModeChangeButton = memo(() => {
  const { isDarkMode, toggle } = useDarkModeContext();
  return (
    <Button variant="none" themeColor="gray" size="tiny" className="nav-button" onClick={() => toggle && toggle()}>
      {isDarkMode ? <LightThemeIcon size={20} /> : <DarkThemeIcon size={20} />}
    </Button>
  );
});

interface NavigationProps {
  className?: string;
}
const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { useClassName } = useUtils();
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <NavigationComponent className={useClassName([isScroll || isOpen ? 'is-active' : ''])}>
      <NaviWrap className={className}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="none"
          themeColor="gray"
          size="tiny"
          className={useClassName(['nav-button', 'hamberger'])}
        >
          <HambergerIcon size={20} />
        </Button>
        <Logo title="Home" to="/">
          <Typography variant="subhead-subhead1" as="h1">
            개발자 이희현
          </Typography>
        </Logo>
        <MenuWrap className={useClassName([!isOpen || 'is-open'])}>
          <MenuItem>
            <Link title="About" to="/about">
              <Typography variant="subhead-subhead4">ABOUT</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link title="Style guide" to="/guide">
              <Typography variant="subhead-subhead4">STYLE GUIDE</Typography>
            </Link>
          </MenuItem>
        </MenuWrap>
        <Space />
        <ModeChangeButton />
      </NaviWrap>
    </NavigationComponent>
  );
};
export default Navigation;
