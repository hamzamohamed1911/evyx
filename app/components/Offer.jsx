import GoogleMap from "./ui/GoogleMap";

const Offer = () => {
  return (
    <section id="احصل-على-عرض" >
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row lg:gap-12 md:gap-10">
          <div className="flex items-center h-96 lg:h-auto lg:w-1/2">
            <GoogleMap />
          </div>
          <div className="flex  items-center lg:w-1/2 pt-6 md:p-20 bg-white">
            <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6  leading-relaxed lg:leading-normal">
      أحصل على إستشارتك مجانا!
    </h1>

              <h1 className="md:text-2xl lg:text-3xl text-xl font-medium mb-8 my-8 lg:mb-6 leading-relaxed lg:leading-normal">
                نحن جاهزون للإجابة الآن! قم بالتسجيل للحصول على استشارة مجانية.
              </h1>
              <form>
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
          <label htmlFor="number" className="block my-1 lg:my-2">رقم الهاتف</label>
          <input
            type="text"
            id="number"
            name="number"
            className="w-full h-[44px] px-3 py-2 mt-1 text-black border rounded-md focus:outline-none focus:ring-2"
            required
            aria-label="رقم الهاتف"
          />
        </div>
                <div className="flex lg:justify-end">
                  <button
                    type="submit"
                    className="w-full lg:w-[233px] text-white lg:text-2xl md:text-xl text-lg  bg-[#DB965E] hover:bg-[#f2a86c] md:py-4 py-3 lg:py-5 rounded-lg focus:outline-none focus:ring-2"
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
