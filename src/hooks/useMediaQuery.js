import React from 'react'
import { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return width < 768;
  }

  export default useWindowWidth;