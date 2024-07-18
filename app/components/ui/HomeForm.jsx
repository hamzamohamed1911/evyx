"use client"
import { useState } from 'react';

const HomeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000); 
  };

  return (
    <div className="md:w-[398px] w-[388px] md:h-[360px] h-[340px] p-7 bg-[#2F4E8E] bg-opacity-70 relative rounded-lg shadow-lg text-white">
      <h1 className="text-2xl font-bold my-3">تواصل معنا</h1>
      <form
        name="contact-form"
        method="post"
        action="https://script.google.com/macros/s/AKfycbxV7Mrl_Ou1mSsdOj9mJDIb80y2fXXYJCy_YZStZrppzgUlsGQcK4EO6LsfwfRdLK8OpQ/exec"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg my-1">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full text-black h-[44px] px-3 py-2 mt-1 text-lg border rounded-md focus:outline-none focus:ring-2"
            required
            aria-label="الاسم"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg my-1">رقم الهاتف</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full text-black h-[44px] px-3 py-2 mt-1 text-lg border rounded-md focus:outline-none focus:ring-2"
            required
            aria-label="رقم الهاتف"
          />
        </div>
        <div className="flex justify-end items-center py-5">
          <button
            type="submit"
            className="w-[120px] md:text-lg text-base  bg-[#DB965E] hover:bg-[#f2a86c] py-2 px-2 rounded-md focus:outline-none focus:ring-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full inline-block"
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

