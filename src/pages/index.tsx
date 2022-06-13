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

export async function getServerData() {
  await new Promise(resolve => {
    console.log('server side rendering');
    resolve(undefined);
  });
  return {
    props: {},
  };
}
export default indexPage;
