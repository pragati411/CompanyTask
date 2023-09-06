import React from 'react';
import z from './z.png';
import d from './d.png';
import c1 from './c1.png';
import q from './q.png';
import m from './m.png';
import s from './s.png';

const AsideBar = () => {
  const imageStyle = {
    marginBottom: '10px',
    marginLeft: "30px",
    // Add spacing between images
  };

  const containerStyle = {
    backgroundColor: 'black', // Set the background color to black
    padding: '10px', // Add padding for spacing
    display: 'flex',
    flexDirection: 'column', // Display images in a column layout
    alignItems: 'flex-start', // Align images to the left side
    width: '150px', // Set a fixed width for the sidebar
    position: 'fixed', // Make the sidebar fixed for scrolling
    height: '80%', // Decrease the height to your desired value
    top: '0', // Position the sidebar at the top of the viewport
    zIndex: '1', // Set a higher z-index to overlap with the header
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img src={z} alt="zasymbol" />
      </div>
      <div style={imageStyle}>
        <img src={d} alt="dashboard" />
      </div>
      <div style={imageStyle}>
        <img src={c1} alt="component" />
      </div>
      <div style={imageStyle}>
        <img src={q} alt="question" />
      </div>
      <div style={imageStyle}>
        <img src={m} alt="metadata" />
      </div>
      <div style={imageStyle}>
        <img src={s} alt="setting" />
      </div>
    </div>
  );
};

export default AsideBar;
