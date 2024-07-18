"use client"
import {  useRouter } from 'next/navigation';
import { useState } from 'react';

const OfferForm = () => {
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
    <form 
    name="contact-form"
    onSubmit={handleSubmit}>
    <div className="mb-4 lg:mb-5 text-md lg:text-lg">
          <label htmlFor="name" className="block my-1 lg:my-2">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full h-[44px] px-3 py-2 mt-1 text-black border rounded-md focus:outline-none focus:ring-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block my-1 lg:my-2">رقم الهاتف</label>
          <input
            type="text"
            id="number"
            name="number"
            className="w-full h-[44px] px-3 py-2 mt-1 text-black border rounded-md focus:outline-none focus:ring-2"
            required
          />
        </div>
                <div className="flex lg:justify-end">
                 <button
            className="w-full lg:w-[233px] text-white lg:text-2xl md:text-xl text-lg  bg-[#DB965E] hover:bg-[#f2a86c] md:py-4 py-3 lg:py-5 rounded-lg focus:outline-none focus:ring-2"

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
  )
}

export default OfferForm
