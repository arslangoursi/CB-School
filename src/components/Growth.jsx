import GrowthCircle from "../assets/growthCircle.svg";
import Fade from "react-reveal/Fade";

export default function Growth() {
  return (
    <Fade bottom>
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
    </Fade>
  );
}
