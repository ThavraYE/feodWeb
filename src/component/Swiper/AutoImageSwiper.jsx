import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/image/swipperImg2_1.jpg';
import image2 from '../../assets/image/swipperImg2_2.jpg';
import image3 from '../../assets/image/swipperImg2_3.jpg';

// Define the images array outside the component to avoid recreating it on every render


const AutoImageSwiper = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null); // Used to hold the interval ID
  const totalSlides = images.length;
  const autoSlideInterval = 3000; // 5 seconds

  // Function to move to a specific slide index
  const goToSlide = (index) => {
    // Ensure the index loops if necessary, or clamps within bounds
    const newIndex = index % totalSlides; // Looping logic
    setCurrentSlide(newIndex);
  };

  // Handler for navigation: moves to next slide and loops back to 0
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Handler for navigation: moves to previous slide and loops back to the end
  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // --- 1. Effect to START and CLEAN UP the Auto-Slide Timer ---
  useEffect(() => {
    const startTimer = () => {
      // Clear any existing timer first
      clearInterval(timerRef.current);

      // Set the new interval and store its ID in the ref
      timerRef.current = setInterval(() => {
        // Use the function form of setState to get the latest state value
        setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
      }, autoSlideInterval);
    };

    // Start the timer when the component mounts
    startTimer();

    // Cleanup function: This runs when the component unmounts
    // to stop the timer and prevent memory leaks.
    return () => {
      clearInterval(timerRef.current);
    };
  }, [totalSlides]); // Re-run if totalSlides changes (unlikely here, but good practice)
  
  // Function to restart the timer manually (called on button/dot click)
  const restartTimer = () => {
    // Stop the current timer
    clearInterval(timerRef.current);

    // Restart the timer by immediately setting a new one
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % totalSlides);
    }, autoSlideInterval);
  };

  // --- 2. Effect to MOVE the Swiper Track based on currentSlide state ---
  useEffect(() => {
    if (trackRef.current) {
      // Calculate the transform value
      const slideWidth = trackRef.current.clientWidth / totalSlides;
      const offset = -(slideWidth * currentSlide);
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  }, [currentSlide, totalSlides]);

  return (
    <div className="col-5 mt-3 ">
      <div 
        id="swiper-container" 
        className="w-full ms-[15px] max-w-2xl bg-white   overflow-hidden relative mt-3"
        // Optional: Pause the timer when the user hovers over the container
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={restartTimer}
      >
        {/* Swiper Track (The rest of the JSX is unchanged) */}
        <div 
          id="swiper-track" 
          ref={trackRef}
          className="flex shadow-md hover:shadow-2xl transition-transform duration-500 ease-in-out"
          style={{ width: `${totalSlides * 100}%` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full swiper-slide h-100  rounded-md overflow-hidden" style={{ width: `${100 / totalSlides}%` }}>
              <img 
                src={image.src}
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button 
          id="prev-btn" 
          onClick={() => { prevSlide(); restartTimer(); }} // Added restartTimer
          className="absolute top-1/2 hidden left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300"
        >
          {/* ... SVG content ... */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button 
          id="next-btn" 
          onClick={() => { nextSlide(); restartTimer(); }} // Added restartTimer
          className="absolute top-1/2 hidden right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300"
        >
          {/* ... SVG content ... */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Container */}
        <div id="dots-container" className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => { goToSlide(index); restartTimer(); }} // Added restartTimer
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

export default AutoImageSwiper;