import GoogleMap from "./ui/GoogleMap";
import OfferForm from "./ui/OfferForm";

const Offer = () => {
  return (
    <section id="احصل-على-عرض" >
      <div className="container mx-auto p-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-12 md:gap-10">
          <div className="flex items-center h-96 lg:h-auto lg:w-1/2">
            <GoogleMap />
          </div>
          <div className="flex  items-center lg:w-1/2 pt-6 md:p-20 bg-white">
            <div className="w-full ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6  leading-relaxed lg:leading-normal">
      أحصل على إستشارتك مجانا!
    </h1>

              <h1 className="md:text-2xl lg:text-3xl text-xl font-medium mb-8 my-8 lg:mb-6 leading-relaxed lg:leading-normal">
                نحن جاهزون للإجابة الآن! قم بالتسجيل للحصول على استشارة مجانية.
              </h1>
             <OfferForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
