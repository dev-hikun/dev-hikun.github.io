import React from 'react';

const Text: React.FC<{ text: string }> = props => {
  return <div>{props.text}</div>;
};
export default Text;
