import Image from 'next/image';
import { aboutEvyx, callus } from '../assets'; 
import Link from 'next/link';

const AboutEvyx = () => {
  return (
    <section id='عن-ايڤكس' className="container mx-auto p-5 md:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       
        <div className="flex flex-col justify-center items-start p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#2F4E8E]">عن </span> 
            <span className="text-[#DB965E]">إيڤكس</span>
          </h1>
          <p className="text-xl md:text-2xl my-6">
            وكالة تسويق إلكتروني تقدم خدمات متطورة في مجال التكنولوجيا، تساعد الشركات والمؤسسات على تحسين وتطوير وجودها الإلكتروني عبر مجموعة من الخدمات المختلفة. تتكون إيفيكس من مجموعة من المتخصصين الذين يعملون بجد لتحقيق أهداف عملائهم ونمو أعمالهم بشكل فعال.
          </p>
          <Link href="tel:+201500002077" className="px-6 py-3 gap-2 flex items-center bg-[#DB965E] text-white font-medium rounded-md hover:bg-[#f2a86c] transition duration-300">
            <Image alt='call us' width={20} height={20} src={callus}/>    
            اتصل بنا الآن      
          </Link>
        </div>
        
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={aboutEvyx}
            alt="Evyx"
            width={617} 
            height={350}            
            quality={100}
          className="rounded-lg shadow-lg w-full h-auto" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutEvyx;
