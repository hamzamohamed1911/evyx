import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="text-[260px] font-bold text-[#DB965E] p-6">404</h1>
      <h2 className="text-xl lg:text-3xl font-bold leading-relaxed lg:leading-normal my-5">
        لم يتم العثور على الصفحة
      </h2>
      <p className="text-xl lg:text-3xl font-bold leading-relaxed lg:leading-normal mb-5">
        تعذر العثور على المورد المطلوب.
      </p>
      <Link
        className="inline-block px-6 py-3 text-[#DB965E] font-semibold text-3xl rounded-md hover:text-[#f2a86c] transition duration-300"
        href="/"
      >
        الرجوع إلى الرئيسية
      </Link>
    </div>
  );
}
