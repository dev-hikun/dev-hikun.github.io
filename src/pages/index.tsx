import React from 'react';
import Text from 'components/text';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';

const indexPage: React.FC = WithThemes(() => (
  <>
    <Header />
    <Text text={`Hello Gatsby`} />
  </>
));
export default indexPage;
