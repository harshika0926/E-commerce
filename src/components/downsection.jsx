import React, { useState } from 'react';

const DownSection = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);

  const toggleDropdown1 = () => setDropdown1Open(!dropdown1Open);
  const toggleDropdown2 = () => setDropdown2Open(!dropdown2Open);
  const toggleDropdown3 = () => setDropdown3Open(!dropdown3Open);
  const toggleDropdown4 = () => setDropdown4Open(!dropdown4Open);

  // Define inline styles
  const styles = {
    downSection: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
    },
    verticalTiles: {
      display: 'flex',
      flexDirection: 'column',
    },
    tile: {
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      cursor: 'pointer',
      background:'#ccc',
      justifyContent:'center',
    },
    dropdownMenu: {
      display: 'block',
      margin: '10px',
    },
    horizontalTiles: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    horizontalTile: {
      border: '1px solid #ccc',
      padding: '10px',
      margin: '0 10px',
    },
  };

  return (
    <div style={styles.downSection}>
      <div style={styles.verticalTiles}>
        <div style={styles.tile} onClick={toggleDropdown1}>
          We Recommend
        </div>
        {dropdown1Open && (
          <div style={styles.dropdownMenu}>
            <div>v1</div>
            <div>v2</div>
            <div>v3</div>
            <div>v4</div>
            <div>v5</div>
          </div>
        )}
        <div style={styles.tile} onClick={toggleDropdown2}>
          My Account
        </div>
        {dropdown2Open && (
          <div style={styles.dropdownMenu}>
            <div>v1</div>
            <div>v2</div>
            <div>v3</div>
            <div>v4</div>
            <div>v5</div>
          </div>
        )}
        <div style={styles.tile} onClick={toggleDropdown3}>
          Customer Care 
        </div>
        {dropdown3Open && (
          <div style={styles.dropdownMenu}>
            <div>v1</div>
            <div>v2</div>
            <div>v3</div>
            <div>v4</div>
            <div>v5</div>
          </div>
        )}
        <div style={styles.tile} onClick={toggleDropdown4}>
          About Us
        </div>
        {dropdown4Open && (
          <div style={styles.dropdownMenu}>
            <div>v1</div>
            <div>v2</div>
            <div>v3</div>
            <div>v4</div>
            <div>v5</div>
          </div>
        )}
      </div>

      </div>
  );
};

export default DownSection;
