import React, { useState, useEffect } from 'react';
import "./hero.css";


const images = [
  {
    //src: '../src/assets/image1.png',
    src: 'https://electro.madrasthemes.com/wp-content/uploads/2019/01/Smartphones.png',

    alt: 'Image 1',
    title: 'Shop to get what you love',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: "https://electro.madrasthemes.com/wp-content/uploads/2019/01/Sounddevice.png",
    alt: 'Image 2',
    title: 'Product 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore ',
  },
  {
    src:"https://electro.madrasthemes.com/wp-content/uploads/2020/02/smartwatches-resized.png" ,
    alt: 'Image 3',
    title: 'Product 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { src, alt, title, description } = images[currentImage];

  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <h1 className='hero-title'>{title}</h1>
        <p className='hero-description'>{description}</p>
        <button className='hero-button'>Start Buying</button>
      </div>
      <img className='hero-image' src={src} alt={alt} />
    </div>
  );
};

export default Hero;
