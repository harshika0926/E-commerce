import React, { useState } from 'react';
import "./middle1.css";
const products = [
  {
    id: 1,
    imageSrc: 'https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-resized.png',
    description: 'Product 1 description goes here.',
  },
  {
    id: 2,
    imageSrc: 'https://electro.madrasthemes.com/wp-content/uploads/2018/10/360-camers.png',
    description: 'Product 2 description goes here.',
  },
  {
    id: 3,
    imageSrc: 'https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop.png',
    description: 'Product 3 description goes here.',
  },
  {
    id: 4,
    imageSrc: 'https://electro.madrasthemes.com/wp-content/uploads/2021/03/desktop.png',
    description: 'Product 4 description goes here.',
  },
  
];


const MiddleSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 2 + totalPages) % totalPages + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='middle-section'>
      <div className='tile-container'>
        {visibleProducts.map((product) => (
          <div key={product.id} className='tile'>
            <div className='tile-image'>
              <img src={product.imageSrc} alt={`Product ${product.id}`} />
            </div>
            <div className='tile-content'>
              <h3>{product.description}</h3>
              <p>{product.description}</p>
              <button className='shop-now'>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className='slider-bar'>
        <button onClick={handlePrev}>&lt;</button>
       
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default MiddleSection;

