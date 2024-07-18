import GoogleMap from "./ui/GoogleMap";

const Offer = () => {
  return (
    <section id="احصل-على-عرض" >
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row lg:gap-12 md:gap-10">
          <div className="flex items-center h-96 lg:h-auto lg:w-1/2">
            <GoogleMap />
          </div>
          <div className="flex  items-center lg:w-1/2 p-4 md:p-20 bg-white">
            <div className="w-full max-w-6xl mx-auto">
              <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold mb-4 my-4 lg:mb-6">
                أحصل على إستشارتك مجانا!
              </h1>
              <h1 className="md:text-2xl lg:text-3xl text-xl font-medium mb-8 my-8 lg:mb-6">
                نحن جاهزون للإجابة الآن! قم بالتسجيل للحصول على استشارة مجانية.
              </h1>
              <form>
                <div className="mb-4 lg:mb-6">
                  <label htmlFor="firstName" className="block text-lg">
                    الاسم الاول
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full h-[44px] px-3 py-2 mt-1 text-lg border rounded-md focus:outline-none focus:ring-2"
                    required
                  />
                </div>
                <div className="mb-4 lg:mb-6">
                  <label htmlFor="lastName" className="block text-lg">
                    الاسم الثاني
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full h-[44px] px-3 py-2 mt-1 text-lg border rounded-md focus:outline-none focus:ring-2"
                    required
                  />
                </div>
                <div className="mb-4 lg:mb-6">
                  <label htmlFor="phoneNumber" className="block text-lg">
                    رقم الهاتف
                  </label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full h-[44px] px-3 py-2 mt-1 text-lg border rounded-md focus:outline-none focus:ring-2"
                    required
                  />
                </div>
                <div className="flex lg:justify-end">
                  <button
                    type="submit"
                    className="w-full lg:w-[233px] text-white lg:text-2xl md:text-xl text-lg  bg-[#DB965E] hover:bg-[#f2a86c] py-4 lg:py-6 rounded-lg focus:outline-none focus:ring-2"
                  >
                    احصل على عرض سعر
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
