import WhiteArrow from "../assets/whiteArrow.svg";
import CardImage from "../assets/cardImage.png";
import FeatureCard from "../components/FeatureCard";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

export default function Features() {
  return (
    <>
      <div className="feature__section">
        <div className="feature__section__content">
          <div className="feature__section__subheading">
            <Fade bottom>
              Become a part of world largest school management community with
              other 500 schools
            </Fade>
          </div>

          <div className="feature__section__cards">
            <div className="feature__section__cards__entry">
              To batter understand what project is manage
              <img src={WhiteArrow}></img>
            </div>

            <FeatureCard
              heading="Project Management Life cycle"
              text="   All countries should increase their level of prepare, alert
                  and response to identify, manage and care for new cases of
                  COVID-19."
              image={CardImage}
            />
            <FeatureCard
              heading="Project Management Life cycle"
              text="   All countries should increase their level of prepare, alert
                  and response to identify, manage and care for new cases of
                  COVID-19."
              image={CardImage}
            />
            <FeatureCard
              heading="Project Management Life cycle"
              text="   All countries should increase their level of prepare, alert
                  and response to identify, manage and care for new cases of
                  COVID-19."
              image={CardImage}
            />
            <FeatureCard
              heading="Project Management Life cycle"
              text="   All countries should increase their level of prepare, alert
                  and response to identify, manage and care for new cases of
                  COVID-19."
              image={CardImage}
            />
            <FeatureCard
              heading="Project Management Life cycle"
              text="   All countries should increase their level of prepare, alert
                  and response to identify, manage and care for new cases of
                  COVID-19."
              image={CardImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
