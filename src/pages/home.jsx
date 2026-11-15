import Navibar from '../components/Navbar';
import Hero from '../components/hero';
import Features from '../components/feature';
import About from '../components/about';
import Pricing from '../components/pricing';
import Footer from '../components/Footer/contact';

function Home() {
  return (
    <>
      <Navibar />
      <Hero />
      <Features />
      <About />
      <Pricing />
       
      <Footer />
    </>
  );
}

export default Home;