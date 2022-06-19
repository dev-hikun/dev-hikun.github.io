import useUtils from 'hooks/useUtils';
import React from 'react';

const NotFoundPage = () => {
  const { useIsSsr } = useUtils();
  const isSsr = useIsSsr();
  return (
    !isSsr && (
      <>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </>
    )
  );
};

export default NotFoundPage;
