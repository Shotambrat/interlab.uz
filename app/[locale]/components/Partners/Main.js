"use client"
import { useState , useRef} from 'react';
import Banner from './Banner';
import Calculator from './Calculator';
import PriceCut from './PriceCut';
import Profits from './Profits';
import Application from '../Application';

const MainPartners = () => {
    const useCalcRef = useRef(null);

  // Function to handle scroll when button in Banner is clicked
  const handleShow = () => {
    if (useCalcRef.current) {
      // Scroll to the Calculator component
      useCalcRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full flex flex-col gap-48 bg-white pb-48'>
        <Banner onclick={handleShow} />
        <PriceCut />
        <Profits />
        <div ref={useCalcRef}>
        <Calculator />
        </div>
        <div className='w-full max-w-[1440px] mx-auto'>
        <Application />
      </div>
    </div>
  );
};

export default MainPartners;