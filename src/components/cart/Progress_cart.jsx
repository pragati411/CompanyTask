import React from 'react';

const Progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
   
    overflow: 'hidden', // Add overflow: 'hidden' to hide the overflowing part
  };

  const Childdiv = {
    height: '100%',
    width: `${100 - progress}%`, // Adjust width to hide the specified percentage
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default Progress_bar;
