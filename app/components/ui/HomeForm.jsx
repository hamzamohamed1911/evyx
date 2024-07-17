import React from 'react';

const HomeForm = () => {
  return (
    <div className="md:w-[398px] w-[388px] md:h-[360px] h-[340px] p-7 bg-[#2F4E8E] bg-opacity-70 relative rounded-lg shadow-lg text-white">
      <h1 className="text-2xl font-bold my-4">تواصل معنا</h1>
      <form
        name="contact-form"
        method="post"
        action="https://script.google.com/macros/s/AKfycbxV7Mrl_Ou1mSsdOj9mJDIb80y2fXXYJCy_YZStZrppzgUlsGQcK4EO6LsfwfRdLK8OpQ/exec"
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
        <div className="flex justify-end items-center py-6">
          <button
           type="submit"
            value="Submit"
            id="submit"
            className="w-[120px] text-lg bg-[#DB965E] hover:bg-[#f2a86c] py-2 px-2 rounded-md focus:outline-none focus:ring-2"
          >
            دعنا نتصل بك
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
