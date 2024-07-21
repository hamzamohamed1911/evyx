import GoogleMap from "./ui/GoogleMap";
import OfferForm from "./ui/OfferForm";

const Offer = () => {
  return (
    <section id="احصل-على-عرض" >
      <div className="container mx-auto  p-6 py-8 lg:py-16">
        <div className="flex flex-col lg:justify-between lg:flex-row lg:gap-20 md:gap-10">
          <div className="flex items-center h-96 lg:h-auto lg:w-1/2">
            <GoogleMap />
          </div>
          <div className="flex  items-center lg:w-1/2 pt-10 lg:p-10 bg-white rounded-md">
            <div className="w-full ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6  leading-relaxed lg:leading-normal">
             أحصل على إستشارتك مجانا!
            </h1>

              <h1 className="md:text-2xl lg:text-3xl text-xl font-medium mb-8  lg:mb-6 leading-relaxed lg:leading-normal">
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
