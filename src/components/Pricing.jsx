import PricingBlueTick from "../assets/pricingBlueTick.svg";
import PricingWhiteTick from "../assets/pricingWhiteTick.svg";

export default function () {
  return (
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
          <div className="pricing__section__card__heading">
            $19<span>/month</span>
          </div>
          <div className="pricing__section__card__title">Starter</div>
          <div className="pricing__section__card__text">
            Advanced tools to take your work to the next level.
          </div>
          <div className="pricing__section__card__points">
            <div className="pricing__section__card__point">
              <img src={PricingBlueTick} />
              <span> point</span>
            </div>
            <div className="pricing__section__card__point">
              <img src={PricingBlueTick} />
              <span> point</span>
            </div>
            <div className="pricing__section__card__point">
              <img src={PricingBlueTick} />
              <span> point</span>
            </div>
          </div>
          <button className="pricing__section__card__btn">Choose plan</button>
        </div>
        <div className="pricing__section__card">
          <div className="pricing__section__card__heading">
            $19<span>/month</span>
          </div>
          <div className="pricing__section__card__title">Starter</div>
          <div className="pricing__section__card__text">
            Advanced tools to take your work to the next level.
          </div>
          <div className="pricing__section__card__points">
            <div className="pricing__section__card__point">
              <img src={PricingBlueTick} />
              <span> Multi-step Zaps</span>
            </div>
            <div className="pricing__section__card__point">
              <img src={PricingBlueTick} />
              <span> 3 Premium Apps</span>
            </div>
            <div className="pricing__section__card__point">
              <img src={PricingBlueTick} />
              <span> 2 Users team</span>
            </div>
          </div>
          <button className="pricing__section__card__btn">Choose plan</button>
        </div>
        <div
          className="pricing__section__card"
          style={{
            backgroundColor: "#5F60ED",
            color: "white",
            borderRadius: "30px",
            boxShadow: "0px 30px 90px rgba(82, 67, 194, 0.35)",
          }}
        >
          <div
            className="pricing__section__card__heading"
            style={{
              color: "white",
            }}
          >
            $19
            <span
              style={{
                color: "white",
              }}
            >
              /month
            </span>
          </div>
          <div
            className="pricing__section__card__title"
            style={{
              color: "white",
            }}
          >
            Starter
          </div>
          <div
            className="pricing__section__card__text"
            style={{
              color: "white",
            }}
          >
            Advanced tools to take your work to the next level.
          </div>
          <div className="pricing__section__card__points">
            <div
              className="pricing__section__card__point"
              style={{
                color: "white",
              }}
            >
              <img src={PricingWhiteTick} />
              <span> Multi-step Zaps</span>
            </div>
            <div
              className="pricing__section__card__point"
              style={{
                color: "white",
              }}
            >
              <img src={PricingWhiteTick} />
              <span> Multi-step Zaps</span>
            </div>
            <div
              className="pricing__section__card__point"
              style={{
                color: "white",
              }}
            >
              <img src={PricingWhiteTick} />
              <span> Multi-step Zaps</span>
            </div>
            <div
              className="pricing__section__card__point"
              style={{
                color: "white",
              }}
            >
              <img src={PricingWhiteTick} />
              <span> Multi-step Zaps</span>
            </div>
            <div
              className="pricing__section__card__point"
              style={{
                color: "white",
              }}
            >
              <img src={PricingWhiteTick} />
              <span> Multi-step Zaps</span>
            </div>
          </div>
          <button className="pricing__section__card__btn__popular">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
}
