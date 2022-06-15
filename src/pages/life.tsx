import React from 'react';
import Text from 'components/text';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';

const lifePage: React.FC = WithThemes(() => (
  <>
    <Header />
    <Text text={`life page`} />
  </>
));

export default lifePage;
