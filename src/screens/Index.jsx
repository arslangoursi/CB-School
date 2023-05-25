import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";
import Growth from "../components/Growth";

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
    </>
  );
}
