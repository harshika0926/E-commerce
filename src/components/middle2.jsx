import React from 'react';
import './middle2.css';

const FrontSection = () => {
  return (
    <div className="front-section">
      <div className="left-section">
        <div className="product">
          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png"
            alt="Product"
            className="product-image"
          />
          <h2 className="product-title">Product Title</h2>
          <p className="product-description">
            Product description goes here.
          </p>
          <p className="product-price">$99.99</p>
        </div>
      </div>
      <div className="right-section">
        
        <div className="product-row">
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/WirelessSound-300x300.png"
              alt="Product 1"
              className="product-image"
            />
            <h2 className="product-title">Product 1</h2>
            <p className="product-description">
              Description for Product 1 goes here.
            </p>
            <p className="product-price">$49.99</p>
          </div>
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png"
              alt="Product 2"
              className="product-image"
            />
            <h2 className="product-title">Product 2</h2>
            <p className="product-description">
              Description for Product 2 goes here.
            </p>
            <p className="product-price">$59.99</p>
          </div>
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/uniheadphone-300x300.png"
              alt="Product 3"
              className="product-image"
            />
            <h2 className="product-title">Product 3</h2>
            <p className="product-description">
              Description for Product 3 goes here.
            </p>
            <p className="product-price">$69.99</p>
          </div>
        </div>
        <div className="product-row">
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/GoldPhone-1-300x300.png"
              alt="Product 4"
              className="product-image"
            />
            <h2 className="product-title">Product 4</h2>
            <p className="product-description">
              Description for Product 4 goes here.
            </p>
            <p className="product-price">$79.99</p>
          </div>
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/camera2-300x300.png"
              alt="Product 5"
              className="product-image"
            />
            <h2 className="product-title">Product 5</h2>
            <p className= "product-description">
              Description for Product 5 goes here.
            </p>
            <p className="product-price">$89.99</p>
          </div>
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/printer-300x300.png"
              alt="Product 6"
              className="product-image"
            />
            <h2 className="product-title">Product 6</h2>
            <p className="product-description">
              Description for Product 6 goes here.
            </p>
            <p className="product-price">$99.99</p>
          </div>
        </div>
        <div className="product-row">
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png"
              alt="Product 7"
              className="product-image"
            />
            <h2 className="product-title">Product 7</h2>
            <p className="product-description">
              Description for Product 7 goes here.
            </p>
            <p className="product-price">$109.99</p>
          </div>
          <div className="product">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/videocamera-300x300.png"
              alt="Product 8"
              className="product-image"
            />
            <h2 className="product-title">Product 8</h2>
            <p className="product-description">
              Description for Product 8 goes here.
            </p>
            <p className="product-price">$119.99</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FrontSection;
