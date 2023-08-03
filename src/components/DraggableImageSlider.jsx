import { useRef, useState } from "react";
import "./DraggableImageSlider.css"; // Import your CSS file here
// import "./script.js"; // Import your JavaScript file here (Though the JavaScript functionality will be converted to React below)

const DraggableImageSlider = () => {
  const carouselRef = useRef(null);
  const firstImgRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const showHideIcons = () => {
    // Add your showHideIcons logic here (same as in the original script)
  };

  const handleArrowIconClick = (direction) => {
    let firstImgWidth = firstImgRef.current.clientWidth + 14;
    carouselRef.current.scrollLeft +=
      direction === "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  };

  const autoSlide = () => {
    // Add your autoSlide logic here (same as in the original script)
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    carouselRef.current.classList.add("dragging");
    setPositionDiff((e.pageX || e.touches[0].pageX) - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const handleDragStop = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove("dragging");

    if (!isDragging) return;
    autoSlide();
  };

  return (
    <div className="wrapper">
      <i
        id="left"
        className="fa-solid fa-angle-left"
        onClick={() => handleArrowIconClick("left")}
      ></i>
      <div
        ref={carouselRef}
        className="carousel"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragging}
        onTouchMove={handleDragging}
        onMouseUp={handleDragStop}
        onTouchEnd={handleDragStop}
      >
        <img
          src="/public/mechImg1.jpg"
          alt="img"
          draggable="false"
          ref={firstImgRef}
        />
        {/* Add other images here */}
      </div>
      <i
        id="right"
        className="fa-solid fa-angle-right"
        onClick={() => handleArrowIconClick("right")}
      ></i>
    </div>
  );
};

export default DraggableImageSlider;
