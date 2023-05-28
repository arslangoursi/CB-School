import About from "../components/About";
import Features from "../components/Features";
import Growth from "../components/Growth";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <div className="header__section">
        <Navbar />
        <Header />
      </div>

      <div className="dark__background"></div>

      <Features />
      <Growth />
      <About />
      <Pricing />
      <Footer />
    </>
  );
}
