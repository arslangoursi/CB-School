import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";
import Growth from "../components/Growth";
import About from "../components/About";
import PricingBlueTick from "../assets/pricingBlueTick.svg";

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
      <div className="pricing__section">
        <div className="pricing__section__text">
          <div className="pricing__section__text__heading">
            Unleash your growth potential
          </div>
          <div className="pricing__section__text__subheading">
            All countries should increase their level of preparedness, alert and
            response to identify, manage and care.
          </div>
        </div>
        <div className="pricing__section__cards">
          <div className="pricing__section__card">
            <div className="pricing__section__card__heading">$19</div>
            <div className="pricing__section__card__title">Starter</div>
            <div className="pricing__section__card__text">
              Unleash the power of automation.
            </div>
            <div className="pricing__section__card__point">
              <img src={PricingBlueTick} />
              <span> point</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
