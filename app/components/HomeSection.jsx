import Image from 'next/image';
import { backgroundImage } from '../assets';
import HomeForm from './ui/HomeForm';

const HomeSection = () => {
    return (
        <section id="/" className="relative h-screen flex flex-col md:flex-row p-5 md:p-20">
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
            {/* Content Section (Right Side) */}
            <div className="flex-1 flex items-center justify-center md:justify-start z-20">
                <div className="text-white text-center md:text-right">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">خبراء في الحلول البرمجية</h1>
                    <p className="text-2xl md:text-4xl">شريكك في عالم التكنولوجيا</p>
                </div>
            </div>
            {/* Form Section (Left Side) */}
            <div className="md:absolute left-32 bottom-0   flex-1 flex items-center justify-center md:items-end md:justify-start z-20 p-5 md:p-0">
            <HomeForm/>
            </div>
        </section>
    );
};

export default HomeSection;
