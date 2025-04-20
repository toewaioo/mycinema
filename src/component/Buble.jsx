import React from 'react';

const Bubble = ({ size, animationDelay }) => {
  return (
    <div
      className="rounded-full bg-blue-500 opacity-50 absolute"
      style={{
        width: size,
        height: size,
        animationDelay: `${animationDelay}s`,
      }}
    ></div>
  );
};

export default Bubble;
