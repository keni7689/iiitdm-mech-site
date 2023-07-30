import  { useRef, useState } from 'react';
import './HorizontalScrollImageBar.css';

const HorizontalScrollImageBar = ({ images }) => {
  const scrollContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScrollLeft = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -window.innerWidth / 2,
        behavior: 'auto',
      });
    }
  };

  const handleScrollRight = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: window.innerWidth / 2,
        behavior: 'auto',
      });
    }
  };

  return (
    <div className="scroll-image-bar">
      <div className="scroll-icons" onClick={handleScrollLeft}>
        <div className="scroll-icon">{'<'}</div>
      </div>
      <div className="scroll-container" ref={scrollContainerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            style={{
              display: currentImageIndex === index ? 'inline' : 'none',
              width: image.width,
              height: image.height,
            }}
          />
        ))}
      </div>
      <div className="scroll-icons" onClick={handleScrollRight}>
        <div className="scroll-icon">{'>'}</div>
      </div>
    </div>
  );
};

export default HorizontalScrollImageBar;
