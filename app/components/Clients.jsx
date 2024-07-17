import Slider from "./ui/Slider";

const Clients = () => {
  return (
    <section id="عملائنا" className="py-8 lg:py-16">
      <div className="  container mx-auto p-5 md:p-20">
        <div className="flex flex-col items-center justify-center mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-3xl font-medium mb-4 text-center">
            نبني شراكات طويلة الأمد مع عملائنا، ونعمل معهم عن كثب لفهم احتياجاتهم وتقديم الدعم والتحسينات المستمرة.
          </h1>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2F4E8E] my-8 lg:mb-10 text-center">
            المصداقية .... الجودة .... خدمة ما بعد البيع
          </h1>
          <h1 className="text-2xl lg:text-3xl font-medium mb-4 text-center">
            بعض من عملائنا الذين وثقوا في منتجاتنا واستمتعوا بالجودة العالية التي نقدمها
          </h1>
        </div>

      </div>
      <Slider />

    </section>
  );
};

export default Clients;
