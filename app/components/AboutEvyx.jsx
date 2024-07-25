import Image from "next/image";
import { aboutEvyx, callus } from "../assets";
import Link from "next/link";

const AboutEvyx = () => {
  return (
    <section id="عن-ايڤكس" className="mx-auto container p-6 py-10 ">
      <div className="flex flex-col md:flex-row lg:gap-10 gap-4 items-center">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start lg:p-10 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#2F4E8E]">عن </span>
            <span className="text-[#DB965E]">إيڤكس</span>
          </h1>
          <p className="md:text-2xl text-xl lg:text-3xl my-6 leading-relaxed lg:leading-normal">
            وكالة تسويق إلكتروني تقدم خدمات متطورة في مجال التكنولوجيا، تساعد
            الشركات والمؤسسات على تحسين وتطوير وجودها الإلكتروني عبر مجموعة من
            الخدمات المختلفة. تتكون إيفيكس من مجموعة من المتخصصين الذين يعملون
            بجد لتحقيق أهداف عملائهم ونمو أعمالهم بشكل فعال.
          </p>
          <Link
            href="#احصل-على-عرض"
            className="md:px-6 px-4 md:py-5 py-3 gap-2 flex items-center bg-[#DB965E] text-white font-medium text-lg rounded-md hover:bg-[#f2a86c] transition duration-300"
          >
            <Image alt="call us" width={20} height={20} src={callus} />
            اتصل بنا الآن
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-start flex-shrink-0 w-full md:w-1/2">
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
