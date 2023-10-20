import React from 'react';
import './middle5.css';

const products = [
  {
    id: 1,
    imageSrc: 'image1.jpg',
    description: 'Product 1 description goes here.',
    price: '$100',
  },
  {
    id: 2,
    imageSrc: 'image2.jpg',
    description: 'Product 2 description goes here.',
    price: '$120',
  },
  {
    id: 3,
    imageSrc: 'image3.jpg',
    description: 'Product 3 description goes here.',
    price: '$90',
  },
  {
    id: 4,
    imageSrc: 'image4.jpg',
    description: 'Product 4 description goes here.',
    price: '$80',
  },
  {
    id: 5,
    imageSrc: 'image5.jpg',
    description: 'Product 5 description goes here.',
    price: '$110',
  },
  {
    id: 6,
    imageSrc: 'image6.jpg',
    description: 'Product 6 description goes here.',
    price: '$130',
  },
  {
    id: 7,
    imageSrc: 'image7.jpg',
    description: 'Product 7 description goes here.',
    price: '$70',
  },
  {
    id: 8,
    imageSrc: 'image8.jpg',
    description: 'Product 8 description goes here.',
    price: '$95',
  },
];

const HorizontalScrollSection = () => {
  return (
    <div className="scroll-section">
      <div className="scroll-menu">
        {products.map((product) => (
          <div key={product.id} className="menu-item">
            {product.id}
          </div>
        ))}
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="image">
              <img src={product.imageSrc} alt={`Product ${product.id}`} />
            </div>
            <div className="description">
              <h2>{product.description}</h2>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
