// ImageSlider.js
import React, { useState } from "react";
import "./ImageSlider.css"; // Import your styles

const ImageSlider = ({ images }) => {
  const [startX, setStartX] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleStart = (e) => {
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setDragging(true);
  };

  const handleMove = (e) => {
    if (!dragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;
    const sensitivity = 50; // Adjust as needed

    if (deltaX > sensitivity) {
      handlePrev();
      setDragging(false);
    } else if (deltaX < -sensitivity) {
      handleNext();
      setDragging(false);
    }
  };

  const handleEnd = () => {
    setDragging(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider_main_div">
      <div
        className="image-slider"
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseUp={handleEnd}
      >
        {/* <button className="handle_btn" onClick={handlePrev}>
          {" "}
          &lt;
        </button> */}
        <img
          style={{
            width: "250px",
            height: "300px",
            objectFit: "contain",
            padding: "10px",
          }}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        {/* <button className="handle_btn" onClick={handleNext}>
          {" "}
          &gt;
        </button> */}
      </div>
      <div className="dots">
        {images.map((image, index) => (
          <span
            key={index}
            className={`dot ${
              index === currentImageIndex ? "selected_dot" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
