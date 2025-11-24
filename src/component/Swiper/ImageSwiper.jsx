import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/image/swipperImg2_1.jpg'
import image2 from '../../assets/image/swipperImg2_2.jpg'
import image3 from '../../assets/image/swipperImg2_3.jpg'
// Assuming you have these image paths defined or imported
// For this example, we'll use placeholder strings.
// In a real project, these would be local imports (e.g., import image1 from './image1.jpg';)
const images = [
  { src: image1, alt: 'Nature scene' },
  { src: image2, alt: 'Cityscape at night' },
  { src: image3, alt: 'Abstract geometric design' },
];

const ImageSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);
  const totalSlides = images.length;

  // Function to move the slide track
  const goToSlide = (index) => {
    // Ensure the index is within bounds
    const newIndex = Math.max(0, Math.min(totalSlides - 1, index));
    setCurrentSlide(newIndex);
  };

  // Effect to update the track's position when currentSlide changes
  useEffect(() => {
    if (trackRef.current) {
      // Calculate the transform value based on the slide's width
      // We assume all slides have the same width, which is 100% of the container
      const slideWidth = trackRef.current.clientWidth / totalSlides;
      const offset = -(slideWidth * currentSlide);
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentSlide, totalSlides]);

  // Handler functions for navigation
  const nextSlide = () => {
    goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    restartTimer();
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };
  // --- Auto-Loop Timer ---
  const autoSlideInterval = 5000; // 5 seconds
  let currentIndex = 0;
  let slideTimer;
  let isTransitioning = false;
  const startTimer = () => {
      slideTimer = setInterval(() => {
      // currentIndex = (currentIndex + 1) % totalSlides;
      nextSlide();
      goToSlide(true);
      }, autoSlideInterval);
  };

  const stopTimer = () => {
      clearInterval(slideTimer);
  };

  const restartTimer = () => {
      stopTimer();
      startTimer();
  };

  return (
    <div className="col-5 mt-[150px]">
      <div id="swiper-container" className="w-full ms-[15px] max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden relative mt-3">
        {/* Swiper Track */}
        <div 
          id="swiper-track" 
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          // Set the total width of the track to accommodate all slides
          style={{ width: `${totalSlides * 100}%` }}
        >
          {images.map((image, index) => (
            // Each slide is set to occupy 1/N of the total track width
            <div key={index} className="w-full swiper-slide h-96" style={{ width: `${100 / totalSlides}%` }}>
              <img 
                src={image.src} // In a real project, this would be {image1} etc.
                alt={image.alt} 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button 
          id="prev-btn" 
          onClick={prevSlide}
          // The d-none class is removed and button is always visible here for standard swiper, 
          // but you can add conditional styling if needed
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Note the use of camelCase for SVG attributes */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button 
          id="next-btn" 
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Container */}
        <div id="dots-container" className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSwiper;