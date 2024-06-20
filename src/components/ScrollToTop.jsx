import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/ScrollToTop.css'; // Import CSS for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when user scrolls down 200px
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when clicked
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad'
    });
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={isVisible ? 'scroll-to-top show' : 'scroll-to-top'}>
      <button onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
