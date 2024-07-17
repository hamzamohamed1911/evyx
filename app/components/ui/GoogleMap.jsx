const GoogleMap = () => {
  return (
    <div className="relative w-full h-[320px] lg:h-[543px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.117238087214!2d31.337826924455992!3d30.062173774914672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f686a588dcb%3A0xccd07103476fca85!2sevyx%20agency!5e0!3m2!1sar!2seg!4v1721163767398!5m2!1sar!2seg"
        className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
     <div className="absolute right-0 bottom-0 bg-[#DB965E] w-full xl:w-[452px]  md:w-[300px] h-auto rounded-md text-[#2F4E8E] text-base md:text-md lg:text-2xl p-4 lg:p-8">
  <div className="mb-2 md:mb-3 lg:mb-4">
    <h1> <strong> رقم الهاتف : </strong> <a href="tel:+201500002077" className="underline ml-1">00201500002077</a></h1>
  </div>
  <div className="mb-2 md:mb-3 lg:mb-4">
    <h1> <strong> البريد الإلكتروني : </strong> <a href="mailto:info@evyx.net" className="underline ml-1">info@evyx.net</a></h1>
  </div>
  <div className="mb-2 md:mb-3 lg:mb-4">
    <h1> <strong> العنوان : </strong> <a href="https://maps.google.com/?q=36 شارع البطراوى من عباس العقاد مدينة نصر" className="underline ml-1">36 شارع البطراوى من عباس العقاد مدينة نصر</a></h1>
  </div>
  <div className="mb-2 md:mb-3 lg:mb-4">
    <h1> <strong> العنوان في لندن: </strong> <a href="https://maps.google.com/?q=7 Coronation Road, Dephna House, Launchese, London, United Kingdom, NW10 7PQ" className="underline ml-1">7 Coronation Road, Dephna House, Launchese, London, United Kingdom, NW10 7PQ</a></h1>
  </div>
</div>

    </div>
  );
};

export default GoogleMap;
