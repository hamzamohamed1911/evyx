"use client";
import Link from "next/link";
import Image from "next/image";
import { evyx, whatsapp } from "../../public";
import { links } from "../constants";
import MobileMenu from "./ui/MobileMenu";
const phoneNumber = "201500002077";

const handleWhatsAppClick = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};

export default function Navbar() {
  return (
    <header className="bg-white text-black py-4 lg:px-14 px-4 fixed w-full z-50 shadow-md">
      <nav className=" lg:h-[75px] h-[60px] flex justify-between items-center">
        <Link href="/">
        <Image
  src={evyx}
  alt="Evyx Logo"
  height={65}
  width={75}
  className="w-20 h-auto sm:w-24 md:w-28 lg:w-36"
/>

        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex md:font-[600] text-2xl md:gap-10 md:items-center md:justify-center">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="transition-transform duration-300 transform  hover:text-[#DB965E]"
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <MobileMenu />

        {/* Right Logo */}
        <Image
  src={whatsapp}
  onClick={handleWhatsAppClick}
  alt="whatsapplogo"
  height={40.56}
  width={40.56}
  className="hidden lg:flex cursor-pointer transition-transform duration-300 transform hover:scale-110 w-16"
/>

      </nav>
    </header>
  );
}
