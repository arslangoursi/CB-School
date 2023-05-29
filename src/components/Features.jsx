import WhiteArrow from "../assets/whiteArrow.svg";
import CardImage from "../assets/cardImage.png";
import FeatureCard from "../components/FeatureCard";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";

export default function Features() {
  // const [showDiv, setShowDiv] = useState(false);

  // useEffect(() => {
  //   // Simulate an asynchronous operation
  //   setTimeout(() => {
  //     setShowDiv(true);
  //   }, 2000); // Delay for 2 seconds
  // }, []);
  return (
    <>
      {/* {showDiv && (
        <div> */}
      <div className="dark__background"></div>
      <div className="feature__section">
        <div className="feature__section__content">
          <div className="feature__section__subheading">
            <Fade bottom>
              Become a part of world largest school management community with
              other 500 schools
            </Fade>
          </div>

          <div className="feature__section__cards">
            <Fade bottom>
              <div className="feature__section__cards__entry">
                To batter understand what project is manage
                <img src={WhiteArrow}></img>
              </div>
            </Fade>
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
      {/* </div>
      )} */}
    </>
  );
}
