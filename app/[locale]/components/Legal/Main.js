"use client"
import Banner from './Banner';
import Info from './Info';
import LegalProfits from './LegalProfits';
import Application from '../Application';
import Contacts from './Contacts';
import { useRef } from 'react'

const MainLegal = () => {
  const ApplicationRef = useRef(null)

  const ScrollTopApllication = () => {
    if (ApplicationRef.current) {
      ApplicationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <div className='w-full bg-white flex flex-col gap-32 pb-32'>
      <Banner />
      <Info ScrollTopApllication={ScrollTopApllication} />
      <LegalProfits />
      <Contacts />
      <div ref={ApplicationRef} className='w-full max-w-[1440px] mx-auto px-2'>
        <Application />
      </div>
    </div>
  );
};

export default MainLegal