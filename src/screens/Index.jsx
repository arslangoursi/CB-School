import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";
import GrowthCircle from "../assets/growthCircle.svg";

export default function Index() {
  return (
    <>
      <div className="header__section">
        <Navbar />
        <Header />
      </div>
      <div className="dark__background"></div>
      <Features />
      <div className="growth__section">
        <div className="growth__section__content">
          <div className="growth__section__text">
            <div className="growth__section__text__heading">
              Unleash your growth potential
            </div>

            <div className="growth__section__text__subheading">
              All countries should increase their level of preparedness, alert
              and response to identify, manage and care.
            </div>
          </div>
          <img src={GrowthCircle} alt=""></img>
          <button className="growth__section__btn">Signup now</button>
        </div>
      </div>
    </>
  );
}
