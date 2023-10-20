import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#666', // Gray background color
    color: '#fff', // White text color
    textAlign: 'center',
    padding: '20px',
    fontWeight: 'bold', // Make text bold
  };

  return (
    <div style={footerStyle}>
      Electro
      <br />
      Got Questions? Call us 24/7
      <br />
       800 +123-456-7890
    </div>
  );
};

export default Footer;
