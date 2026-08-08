import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import RegistrationForm from './RegistrationForm';

export default function ContactTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  }

  return (
    <>

      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-[75%] md:top-[40%] -translate-y-1/2 z-[999999] group flex items-center justify-center cursor-pointer border-none outline-none bg-transparent"
      >
        <div className="bg-[#9333EA] text-white rounded-l-[8px] md:rounded-l-[16px] py-3 px-1.5 md:py-8 md:px-3 shadow-[-3px_0_10px_rgba(147,51,234,0.5)] md:shadow-[-6px_0_25px_rgba(147,51,234,0.6)] transition-all duration-300 group-hover:bg-[#a855f7] group-hover:shadow-[-8px_0_35px_rgba(147,51,234,0.8)] group-hover:-translate-x-1 flex items-center justify-center">
          <span 
            className="font-black text-[12px] md:text-[22px] tracking-[1px] md:tracking-[2px] uppercase whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Contact Us
          </span>
        </div>
      </button>

      {isOpen && <RegistrationForm onClose={() => setIsOpen(false)} />}
    </>
  );
}
