import React from "react";
import { evyx } from "../assets";
import Image from "next/image";
import Link from "next/link";
import { links } from "../constants";

const Footer = () => {
  return (
    <footer className="text-xl font-medium flex justify-center items-center bg-white md:px-4 px-0 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <Image
            src={evyx}
            alt="evyx Logo"
            width={70}
            height={50}
            quality={100}
            className="w-full mt-4 md:mt-0"
          />
        </Link>

        <ul className="flex flex-wrap gap-4 md:gap-10 items-center justify-center mt-4 md:mt-0">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="hover:underline">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center md:text-right mt-4 md:mt-0">
          <p>
            &copy; {new Date().getFullYear()} Evyx LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
