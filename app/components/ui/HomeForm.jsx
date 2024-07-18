"use client";
import { useState } from 'react';

const HomeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000); 
  };;

  return (
    <div className="w-full md:w-[400px] h-auto lg:p-6 md:p-4 p-3 bg-[#2F4E8E] bg-opacity-70 relative rounded-lg shadow-lg text-white">
      <h1 className="text-2xl lg:text-3xl font-bold  sm:mb-2 md:mb-3 lg:mb-5">تواصل معنا</h1>
      <form
        name="contact-form"
        method="post"
        action="https://script.google.com/macros/s/AKfycbxV7Mrl_Ou1mSsdOj9mJDIb80y2fXXYJCy_YZStZrppzgUlsGQcK4EO6LsfwfRdLK8OpQ/exec"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 lg:mb-5 text-md lg:text-lg">
          <label htmlFor="name" className="block my-1 lg:my-2">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full h-[44px] px-3 py-2 mt-1 text-black border rounded-md focus:outline-none focus:ring-2"
            required
            aria-label="الاسم"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block my-1 lg:my-2">رقم الهاتف</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full h-[44px] px-3 py-2 mt-1 text-black border rounded-md focus:outline-none focus:ring-2"
            required
            aria-label="رقم الهاتف"
          />
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="
              flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 text-sm sm:text-md md:text-lg lg:text-xl bg-[#DB965E] text-white font-medium rounded-md hover:bg-[#f2a86c] transition duration-300
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
