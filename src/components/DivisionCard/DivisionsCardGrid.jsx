import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './DivisionsCardGrid.css';
import DivisionCard from './DivisionCard';

const DivisionsCardGrid = ({ divisionsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  
  const maxIndex = divisionsData.length - 1;

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!startX.current) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!startX.current || !currentX.current) return;

    const diff = startX.current - currentX.current;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < maxIndex) {
        // Swipe left -> Next
        setCurrentIndex(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right -> Previous
        setCurrentIndex(currentIndex - 1);
      }
    }

    startX.current = 0;
    currentX.current = 0;
  };

  return (
    <div className="divisions-grid-container">
      {/* Desktop: Show all 3 cards in row */}
      <div className="cards-desktop">
        {divisionsData.map((division) => (
          <DivisionCard
            key={division.id}
            logoSrc={division.logoSrc}
            logoAlt={division.logoAlt}
            iconSrc={division.iconSrc}
            iconAlt={division.iconAlt}
            title={division.title}
            description={division.description}
            path={division.path}
          />
        ))}
      </div>

      {/* Mobile: Swipeable carousel with dots only */}
      <div className="cards-mobile">
        <div 
          className="carousel-wrapper"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="cards-carousel"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {divisionsData.map((division) => (
              <DivisionCard
                key={division.id}
                logoSrc={division.logoSrc}
                logoAlt={division.logoAlt}
                iconSrc={division.iconSrc}
                iconAlt={division.iconAlt}
                title={division.title}
                description={division.description}
                path={division.path}
              />
            ))}
          </div>
        </div>

        {/* Dots Only */}
        <div className="pagination-dots">
          {divisionsData.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

DivisionsCardGrid.propTypes = {
  divisionsData: PropTypes.array.isRequired,
};

export default DivisionsCardGrid;
