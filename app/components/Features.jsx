import React from 'react';
import Image from 'next/image'; 
import { groupIcon, netwrokIcon, noMoney, serverFree, writing } from '../assets';

const Features = () => {
  return (
    <section id="المميزات" className="p-5 md:p-10 lg:p-20">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl md:text-3xl font-medium mb-4">
          حلول برمجية لا نهائية
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2F4E8E] pb-10 py-5">
          مميزات مواقع ايڤكس       
        </h1>
      </div>

      <div className="flex justify-center flex-wrap md:gap-24 gap-6 py-10">
        <div className=" w-[395px] h-[230px] flex flex-col items-center bg-white rounded-md ">
          <Image src={serverFree} alt="serverFree" width={72} height={72}  />
          <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mt-6">
            DEDICATED SERVER FREE
          </h1>
          <div className="px-5">
            <p className="text-[#6D7280] mt-4 text-center text-base md:text-xl lg:text-2xl">
              تقدم لك ايڤكس سيرڤر مجاني أول سنة لاستضافة موقعك          
            </p>
          </div>
        </div>

        <div className="w-[395px] h-[230px] flex flex-col items-center bg-white rounded-md">
          <Image src={groupIcon} alt="groupIcon" width={72} height={72}  />
          <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mt-6">
            FREE DOMAIN
          </h1>
          <div className="px-5">
            <p className="text-[#6D7280] mt-4 text-center text-base md:text-xl lg:text-2xl">
              تقدم ايڤكس خدمة الحصول على دومين مجانًا دون تكلفة أول سنة            
            </p>
          </div>
        </div>

        <div className=" w-[395px] h-[230px] flex flex-col items-center bg-white rounded-md">
          <Image src={noMoney} alt="noMoney" width={72} height={72}   />
          <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mt-6">
            NO HIDDEN FEES
          </h1>
          <div className="px-5">
            <p className="text-[#6D7280] mt-4 text-center text-base md:text-xl lg:text-2xl">
              لن يتم دفع أي رسوم اضافية خلال المشروع       
            </p>
          </div>
        </div>
        <div className=" w-[395px] h-[230px] flex flex-col items-center bg-white rounded-md">
      <Image src={netwrokIcon} alt="netwrokIcon" width={72} height={72}  />
          <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mt-6">
            SERVER UPTIME 99% GUARANTEE
          </h1>
          <div className="px-5">
            <p className="text-[#6D7280] mt-4 text-center text-base md:text-xl lg:text-2xl">
              نضمن لك تشغيل السيرڤر بنسبة 99%          
            </p>
          </div>
        </div>

        <div className=" w-[395px] h-[230px] flex flex-col items-center bg-white rounded-md">
          <Image src={writing} alt="writing" width={72} height={72}   />
          <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl mt-6">
            DATA ENTRY FREE
          </h1>
          <div className="px-5">
            <p className="text-[#6D7280] mt-4 text-center text-base md:text-xl lg:text-2xl">
              نتيح لك خدمة ادخال البيانات مجانًا          
            </p>
          </div>
        </div>
      </div>

     
    </section>
  );
}

export default Features;
