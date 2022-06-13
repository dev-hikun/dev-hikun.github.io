import styled from '@emotion/styled';
import { Theme } from 'assets/styles/theme';
import { useBlogSettingsContext } from 'contexts';
import React, { useCallback, useEffect, useState } from 'react';
import useUtils from 'hooks/useUtils';
import Button from 'components/Button';
import { MdOutlineWbSunny as LightThemeIcon } from 'react-icons/md';
import { RiMoonFill as DarkThemeIcon } from 'react-icons/ri';

type NavigationComponentProps = {
  theme: Theme;
};
const NavigationComponent = styled('nav')(({ theme }: NavigationComponentProps) => {
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

const NaviWrap = styled('div')(({ theme }: NavigationComponentProps) => ({
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

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
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
    <NavigationComponent>
      <NaviWrap className={useClassName([className, isTop ? 'is-top' : ''])}>
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
    </NavigationComponent>
  );
};
export default Navigation;
