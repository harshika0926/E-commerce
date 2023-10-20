import React from 'react';
import './middle4.css';

const FrontDSection = () => {
  return (
    <div className='front-sec'>
      <div className='front-halve'>
        <div className='front-itm'>
          <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/powerbank-300x300.png' alt='Item 1' />
          <h2>Header 1</h2>
          <p>Description 1</p>
          <p>Price 1</p>
        </div>
        <div className='front-itm'>
          <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png' alt='Item 2' />
          <h2>Header 2</h2>
          <p>Description 2</p>
          <p>Price 2</p>
        </div>
      </div>
      <div className='front-halve full-width'>
        <div className='front-itm'>
          <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal.png' alt='Item 3' />
          <div className='small-images'>
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/gadtet-150x150.png' alt='Small Item 1' />
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/gade1-150x150.png' alt='Small Item 2' />
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png' alt='Small Item 3' />
          </div>
          <h2>Header 3</h2>
          <p>Description 3</p>
          <p>Price 3</p>
        </div>
      </div>
      <div className='front-halve'>
        <div className='front-itm'>
          <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/gamecabin-300x300.png' alt='Item 4' />
          <h2>Header 4</h2>
          <p>Description 4</p>
          <p>Price 4</p>
        </div>
        <div className='front-itm'>
          <img src='https://electro.madrasthemes.com/wp-content/uploads/2016/03/widetv-300x300.png' alt='Item 5' />
          <h2>Header 5</h2>
          <p>Description 5</p>
          <p>Price 5</p>
        </div>
      </div>
    </div>
  );
};

export default FrontDSection;
