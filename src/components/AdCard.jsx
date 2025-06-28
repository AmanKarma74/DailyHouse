import React, { useState, useEffect, useRef } from 'react';
import '../styles/adCard.scss'; // Import your CSS file

//Images
import Billu from "../assets/Billu.jpg"
import Broker from "../assets/Broker.png"
import men_img from '../assets/men_img.jpg'


function AdCard() {
  const images = [
    {img: Billu,
     id: '0',   
    },
    {img: men_img,
     id: '1',   
    },
    {img: Broker,
     id: '2',   
    }
    ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDot, setCurrentDot] = useState(0);
  const adContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
        const adContainer = adContainerRef.current;
        adContainer.style.transform = `translateX(-${currentSlide * 372}px)`
        setCurrentSlide((prevSlide) => (prevSlide+1) % images.length);
        setCurrentDot(currentSlide)
    }, 3200); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  

  const handleDotClick = (index) => {
    const adContainer = adContainerRef.current;
    adContainer.style.transform = `translateX(-${index * 372}px)`;
    setCurrentSlide(index);
    setCurrentDot(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" ref={adContainerRef}>
        {images.map((image, index) => (
          <div className="ad_image_div" key={index}>
            <img
            key={index}
            src={image.img}
            alt='image'
            className='image'
          />
          </div>
        ))}
      </div>

      <div className="dots">
        {images.map((image, index) => (
          <div
            key={index}
            className={image.id == currentDot ? 'dot active' : 'dot'}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default AdCard;