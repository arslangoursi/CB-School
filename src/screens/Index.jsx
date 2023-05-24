import Navbar from "../components/Navbar";
import Stars from "../assets/stars.svg";

export default function Index() {
  return (
    <div className="header__section">
      <Navbar />
      <div className="hero__section__content">
        <div className="hero__section__content__left">
          Manage School System Very Best
        </div>
        <div className="hero__section__content__right">
          All countries should increase their level of preparedness, alert and
          response to identify, manage and care for new cases of COVID-19.
          Countries should prepare to respond to different public health
          scenarios.
          <span className="hero__section__content__right__line"></span>
        </div>
      </div>
      <div className="hero__section__btn">
        <div className="hero__section__btn__left">
          <button className="hero__section__singup">Signup now</button>
          <button className="hero__section__more">Explore more</button>
        </div>
        <div className="hero__section__btn__right">
          <div className="hero__section__btn__right__stars">
            {" "}
            <img src={Stars} alt="stars"></img>
          </div>

          <div className="hero__section__btn__right__reviews">
            Based on 500+ reviews on
          </div>
        </div>
      </div>
    </div>
  );
}
