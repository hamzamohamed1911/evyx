"use client"
import Link from 'next/link';
import Image from 'next/image';
import { evyx, whatsapp } from '../assets'; 
import { links } from '../constants';
import MobileMenu from './ui/MobileMenu';
const phoneNumber = '201500002077'; 
  
const handleWhatsAppClick = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, '_blank');
};


export default function Navbar() {
  return (
    <header className="bg-white text-black py-4 px-4 fixed w-full z-50 shadow-md">
      <nav className="container mx-auto h-[75px] flex justify-between items-center">
        <Link href="/">
          <Image className='px-3 w-full' src={evyx} alt="RightLogo" height={65} width={75} />
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex md:font-[600] text-xl md:gap-10 md:items-center md:justify-center">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="transition-transform duration-300 transform  hover:text-[#DB965E]" href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <MobileMenu />

        {/* Right Logo */}
        <Image src={whatsapp} onClick={handleWhatsAppClick} alt="whatsapplogo" height={40.56} width={40.56} className='hidden lg:flex cursor-pointer transition-transform duration-300 transform hover:scale-110 w-16' />
      </nav>
    </header>
  );
}
