'use client';
import { whatsapp } from "@/app/assets";
import Image from "next/image";

const FixedWhatsApp = () => {
  const phoneNumber = '201500002077'; 
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <button onClick={handleWhatsAppClick} className="flex items-center justify-center w-[64px] h-[64px] bg-[#2F4E8E] bg-opacity-[70%] text-white rounded-full shadow-lg hover:bg-[#355596] focus:outline-none transition-transform duration-300 transform hover:scale-110">
        <Image alt="WhatsApp Icon" src={whatsapp} height={33} width={33}/>
      </button>
    </div>
  );
};

export default FixedWhatsApp;
