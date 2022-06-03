import React from 'react';
import styled from '@emotion/styled';
import mixins from 'assets/styles/mixins';
interface HeaderProps {
}
const Header = styled('header')((props: HeaderProps) => ({
  display: 'flex',
  backgroundColor: 'gray',
  height: 150,
  [mixins.breakpoints.md]: {
    height: 250,
  }
}));
const HeaderComponent: React.FC<HeaderProps> = () => {
  return <Header>
    
  </Header>;
}
export default HeaderComponent;