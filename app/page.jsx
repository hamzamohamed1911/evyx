import HomeSection from './components/HomeSection';
import Products from './components/Products';
import Features from './components/Features';
import Clients from './components/Clients';
import Offer from './components/Offer';
import AboutEvyx from './components/AboutEvyx';

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
