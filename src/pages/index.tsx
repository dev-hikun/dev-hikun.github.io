import React from 'react';
import Text from 'components/text';
import { Global } from '@emotion/react';
import GlobalStyle from 'styles/globals';

const indexPage: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Text text="Hello Gatsby" />
    </>
  );
};
export default indexPage;
