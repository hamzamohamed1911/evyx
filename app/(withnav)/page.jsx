import AboutEvyx from "../components/AboutEvyx";
import Clients from "../components/Clients";
import Features from "../components/Features";
import HomeSection from "../components/HomeSection";
import Offer from "../components/Offer";
import Products from "../components/Products";

const Home = () => {
    return (
        <main className='bg-[#fffdfc]'>
            <HomeSection/>
            <AboutEvyx/>
            <Products/>
            <Features/>
            <Clients/>
            <Offer/>
        </main>
    );
};

export default Home;
