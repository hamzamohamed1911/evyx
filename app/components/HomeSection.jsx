import Image from "next/image";
import { backgroundImage } from "../assets";
import HomeForm from "./ui/HomeForm";

const HomeSection = () => {
  return (
    <section id="/" className="relative h-screen flex flex-col justify-end  md:flex-row">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900 opacity-50 z-10"></div>
        <Image
          src={backgroundImage}
          alt="EvyxBackground"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="container mx-auto   px-6 flex items-center justify-between flex-1 md:flex-row flex-col">
        {/* (Right Side) */}

        <div className="flex-1 flex items-center md:items-start z-20 h-[370px] md:self-end ">
          <div className="text-white text-center lg:text-right">
            <h1 className="md:text-5xl text-4xl lg:text-6xl font-bold mb-4 md:mb-8 leading-normal ">
              خبراء في الحلول البرمجية
            </h1>
            <p className="md:text-3xl text-2xl lg:text-4xl">
              شريكك في عالم التكنولوجيا
            </p>
          </div>
        </div>

        {/*  (Left Side) */}
        <HomeForm />
      </div>
    </section>
  );
};

export default HomeSection;
 