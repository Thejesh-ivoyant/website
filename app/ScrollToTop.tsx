// ScrollToTopIcon.tsx

import React, { useEffect } from 'react';
import { ArrowUpOutlined  } from "@ant-design/icons";
const ScrollToTopIcon: React.FC = () => {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (!scrollToTopBtn) {
      // Handle the case where the element is not found
      return;
    }

    const handleScroll = () => {
      if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        scrollToTopBtn.style.display = 'block';
        document.body.classList.add('scrolled');
      } else {
        scrollToTopBtn.style.display = 'none';
        document.body.classList.remove('scrolled');
      }
    };

    const scrollToTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    window.addEventListener('scroll', handleScroll);
    scrollToTopBtn.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollToTopBtn.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <button id="scrollToTopBtn" title="Go to top">
        <ArrowUpOutlined />
    </button>
  );
};

export default ScrollToTopIcon;
