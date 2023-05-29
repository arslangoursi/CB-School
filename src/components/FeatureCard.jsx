import BlueArrow from "../assets/blueArrow.svg";
import Fade from "react-reveal/Fade";

export default function FeatureCard({ heading, text, image }) {
  return (
    <Fade bottom>
      <div className="feature__section__card">
        <div className="feature__section__card__img">
          <img src={image} alt="image"></img>
        </div>

        <div className="feature__section__card__heading">{heading}</div>
        <div className="feature__section__card__subheading">{text}</div>
        <div className="feature__section__card__btn">
          <div className="feature__section__card__btn__read">Read more</div>
          <div className="feature__section__card__btn__img">
            <img src={BlueArrow} alt="arrow"></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
