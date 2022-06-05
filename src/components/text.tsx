import React from 'react';

const Text: React.FC<{ text: string }> = props => {
  return <div style={{ height: '900px' }}>{props.text}</div>;
};
export default Text;
