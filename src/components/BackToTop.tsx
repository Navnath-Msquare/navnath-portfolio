import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisible = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isVisible = window.scrollY > 350;
          setVisible((prev) => (prev !== isVisible ? isVisible : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/40 hover:shadow-purple-600/60 hover:scale-110 active:scale-95 transition-all duration-300 border border-purple-400/30 group focus:outline-none focus:ring-2 focus:ring-purple-400"
      aria-label="Scroll back to top"
      title="Scroll back to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
