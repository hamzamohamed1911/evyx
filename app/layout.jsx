import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import FixedWhatsApp from "./components/ui/FixedWhatsApp";
import "./globals.css";

export const metadata = {
  title: "Evyx",
  description: "نحن نهدف إلى جعل النجاح متاحًا لكل عمل تجاري، بغض النظر عن حجمه. نحن هنا لنجعله لامعًا في هذا العالم التنافسي، ببساطة نحن هنا لترجمة عملك إلى النجاح",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ fontFamily: 'Almarai, sans-serif' }}>
          <Navbar />
          <FixedWhatsApp/>
        {children}
          <Footer/>
      </body>
    </html>
  );
}
