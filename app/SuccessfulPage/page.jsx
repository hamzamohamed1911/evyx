import Image from "next/image";
import Link from "next/link";
import { SuccessfulLogo } from "../assets";

const SuccessPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="max-w-4xl mx-auto  text-center">
        <div className="flex justify-center mb-8">
          <Image src={SuccessfulLogo} width={314.1} height={314.1} alt="Success Logo" />
        </div>
        <h1 className="text-4xl font-bold mb-6">شكرًا لك</h1>
        <p className="text-xl lg:text-3xl font-bold leading-relaxed lg:leading-normal mb-10">
          نحن نقدر تواصلك معنا وسنقوم بالرد على استفسارك في أقرب وقت ممكن. إذا كان لديك أي استفسارات أخرى، لا تتردد في التواصل معنا.
        </p>
        <Link className="inline-block px-6 py-3 bg-[#DB965E] text-white font-medium text-xl rounded-md hover:bg-[#f2a86c] transition duration-300" href="/">
         
            الرجوع الى الرئيسية
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
