import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import FixedWhatsApp from "../components/ui/FixedWhatsApp";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <FixedWhatsApp />
        {children}
      </main>
      <Footer />
    </>
  );
}
