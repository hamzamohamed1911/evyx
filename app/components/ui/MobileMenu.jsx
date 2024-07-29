"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { close, hamburger } from "@/public";
import { links } from "@/app/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        className="flex items-center   py-2 z-20 "
        onClick={toggleMenu}
      >
        {isOpen ? (
          <Image
            className="z-20 "
            src={close}
            alt="close"
            height={30}
            width={30}
          />
        ) : (
          <Image
            className="z-20 "
            src={hamburger}
            alt="menu"
            height={30}
            width={30}
          />
        )}
      </button>

      {/* Overlay to close menu */}
      {isOpen && <div className="fixed inset-0  " onClick={closeMenu}></div>}

      {/* Mobile Menu */}
      <div
        className={`bg-white absolute top-[80px] inset-x-0 z-50 shadow-md transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="py-4 text-2xl font-[400] text-center">
          {links.map((link, index) => (
            <li key={index} className="py-2">
              <Link
                className="transition-transform duration-300 transform hover:scale-105 hover:text-red-500"
                href={link.href}
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
