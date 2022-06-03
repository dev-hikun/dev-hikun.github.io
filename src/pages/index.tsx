import React from 'react';
import Text from 'components/text';
import Header from 'components/common/Header';
import { Global } from '@emotion/react';
import GlobalStyle from 'assets/styles/globals';
const indexPage: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Header />
      <Text text="Hello Gatsby" />
    </>
  );
};
export default indexPage;
