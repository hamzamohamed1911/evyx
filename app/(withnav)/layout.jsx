import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import FixedWhatsApp from "../components/ui/FixedWhatsApp";



export default function Layout({ children }) {
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
