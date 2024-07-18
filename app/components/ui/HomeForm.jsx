"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const HomeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);

      const response = await fetch('https://script.google.com/macros/s/AKfycbwuHzT4As28ecSAQUU23cISIA_yr4wzkegMNhSTu9bIwT4C9f-imP8MiAGJuxu-VTE39Q/exec', {
        method: 'POST',
        body: formData,
      
      });
      console.log(formData)
      console.log("form data",formData)



      setIsSubmitting(false);
      router.push("/SuccessfulPage")

    } catch (error) {
      setIsSubmitting(false);
      alert('حدث خطأ أثناء الإرسال: ' + error.message);
    }
  };


  return (
    <div className="w-auto  h-auto lg:p-8 md:p-5 p-4 bg-[#2F4E8E] bg-opacity-70 relative rounded-lg shadow-lg text-white">
      <h1 className="text-2xl lg:text-4xl font-bold sm:mb-2 md:mb-3 lg:mb-5">تواصل معنا</h1>
      <form
        name="contact-form"
       
        onSubmit={handleSubmit}
        className='p-6'
      >
        <div className="mb-4 lg:mb-5 text-md lg:text-xl">
          <label htmlFor="name" className="block my-1 lg:my-2">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            className="lg:w-[350px] md:w-[290px] w-[250px]  h-[44px] px-3 py-2 mt-1 text-black border rounded-md focus:outline-none focus:ring-2"
            required
          />
        </div>
        <div className="mb-4 text-md lg:text-xl">
          <label htmlFor="number" className="block my-1 lg:my-2">رقم الهاتف</label>
          <input
            type="text"
            id="number"
            name="number"
            className="lg:w-[350px] md:w-[290px] w-[250px] h-[44px] px-3 py-2 mt-1 text-black border rounded-md focus:outline-none focus:ring-2"
            required
          />
        </div>
        <div className="flex justify-end items-center py-4 ">
          <button
            type="submit"
            className="
              flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 text-sm sm:text-md md:text-lg lg:text-2xl bg-[#DB965E] text-white font-medium rounded-md hover:bg-[#f2a86c] transition duration-300
            "
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                className="inline-block w-5 h-5 mr-3 animate-spin border-t-2 border-white rounded-full"
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              'دعنا نتصل بك'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
