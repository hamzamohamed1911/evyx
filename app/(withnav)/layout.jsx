import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import FixedWhatsApp from "../components/ui/FixedWhatsApp";



export default function Layout({ children }) {
  return (
      <main >
          <Navbar />
          <FixedWhatsApp/>
        {children}
          <Footer/>
      </main>
  );
}
