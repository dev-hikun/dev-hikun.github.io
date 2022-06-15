import React from 'react';
import Text from 'components/text';
import Header from 'components/common/Header';
import WithThemes from 'components/common/WithThemes';

const techPage: React.FC = WithThemes(() => (
  <>
    <Header />
    <Text text={`tech`} />
  </>
));
export default techPage;
