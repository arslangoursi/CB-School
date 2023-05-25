import AboutImage from "../assets/about.png";

export default function About() {
  return (
    <div className="about__section">
      <div className="about__section__content">
        <div className="about__section__top" style={{ marginBottom: "4em" }}>
          <div className="about__section__top__left">
            <img src={AboutImage} />
          </div>
          <div className="about__section__top__right">
            <div className="about__section__top__right__title">Signup Now</div>
            <div className="about__section__top__right__heading">
              Manage School System Very Best
            </div>
            <div className="about__section__top__right__text">
              All countries should increase their level of preparedness, alert
              and response to identify, manage and care for new cases of
              COVID-19. Countries should prepare to respond to different public
              health scenarios.
            </div>
            <span
              className="hero__section__content__right__line"
              style={{ border: "1px solid #5F60ED" }}
            ></span>
          </div>
        </div>
        <div className="about__section__top">
          <div className="about__section__top__right">
            <div
              className="about__section__top__right__title"
              style={{ color: "#FF4D6B" }}
            >
              Signup Now
            </div>
            <div className="about__section__top__right__heading">
              Manage School System Very Best
            </div>
            <div className="about__section__top__right__text">
              All countries should increase their level of preparedness, alert
              and response to identify, manage and care for new cases of
              COVID-19. Countries should prepare to respond to different public
              health scenarios.
            </div>
            <span
              className="hero__section__content__right__line"
              style={{ marginBottom: "2em" }}
            ></span>
          </div>
          <div className="about__section__top__left">
            <img src={AboutImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
