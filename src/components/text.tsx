import React from 'react';

const Text: React.FC<{ text: string }> = props => {
  return <div style={{ height: '1500px' }}>{props.text}</div>;
};
export default Text;
