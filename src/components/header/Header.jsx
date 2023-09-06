import moon from './moon.png'; // Tell Webpack this JS file uses this image
import sun from './sun.png';
import gr from './gr.png';
import elipse from './elipse.png';
import downArrow from './downArrow.png';

const HeaderCom = () => {
  const headerStyle = {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    justifyContent: 'end',
     // Add spacing to the right side
    paddingRight: '40px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
     // Add spacing to the right side
  };

  const themeStyle = {
    opacity: '0.7', // Set opacity
  };

  const sunStyle = {
    fill: 'darkmagenta',
    background: '#ff4081',
    opacity: '0.7', // Set opacity
    zIndex: '2', // Set z-index
    borderRadius:"50%"
  };

  const profileStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };
  const onOffButton = {
    width: '50px',
    height: '30px',
    borderRadius: '50%', // This creates an ellipse shape
    background: 'lightgray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <div className="header" style={headerStyle}>
      <div className="theme" style={onOffButton}>
        <img src={moon} alt="Moon" />
        <img src={sun} alt="Sun" style={sunStyle} />
      </div>
      <div>
        <img src={gr} alt="GR" />
      </div>
      <div className="profile" style={profileStyle}>
        <p>Jessica Jones</p>
        <img src={elipse} alt="Ellipse" style={{ opacity: '0.7' }} />
        <img src={downArrow} alt="Moon" style={{ zIndex: '10' }} />
      </div>
    </div>
  );
};

export default HeaderCom;
