import Image from 'next/image';
import { ourCustomers } from '@/app/constants';

const Slider = () => {
  return (

    <div className="relative  h-full overflow-hidden group">
    <div className="absolute inset-0 opacity-15 bg-[#CCCCCC]"></div>
    <div className="flex items-center justify-center space-x-16 animate-loop-scroll whitespace-nowrap group-hover:paused">
    {ourCustomers.map((customer) => (
        <Image
          key={customer.id}
          src={customer.image}
          alt={customer.name}
          priority={true}
  quality={100}
  width={190}
  height={80}
  className="z-10"
        />
      ))}
    </div>
  </div>
  );
};

export default Slider;