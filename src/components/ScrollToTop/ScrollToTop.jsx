import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
        {showTopBtn && (
            <button id='top' onClick={goToTop}>
                <i className="bi bi-chevron-up"></i>
            </button>
        )}
    </>
  );
};
export default ScrollToTop;