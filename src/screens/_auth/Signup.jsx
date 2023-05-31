import schoolimg from "../../assets/schoolimg.png";
export default function Signup() {
  return (
    <>
      <div className="signup__main__container">
        <div className="signup__main__container__left">
          <div className="signup__main__container__left__contant">
            <div className="signup__main__container__left__heading">
              Welcome to the
            </div>
            <div className="signup__main__container__left__sub__heading">
              anyhow school management system
            </div>
          </div>
          <div className="signup__main__container__left__contant__img">
            <img src={schoolimg} alt="School System" />
          </div>
        </div>
        <div className="signup__main__container__right">
          <div className="signup__from">
            <div className="signup__from__heading">Sign Up with Us!</div>
            <div className="signup__from__input">
              <input type="text" placeholder="School Name" />
            </div>
            <div className="signup__from__input">
              <div className="signup__from__input__entry">
                <input type="text" placeholder="School Address" />
              </div>
              <div className="signup__from__input__entry">
                <input type="City" placeholder="City" />
              </div>
            </div>
            <div className="signup__from__input__heading">Personal details</div>
            <div className="signup__from__input">
              <div className="signup__from__input__entry">
                <input type="text" placeholder="Name" />
              </div>
              <div className="signup__from__input__entry">
                <input type="Email" placeholder="Email" />
              </div>
            </div>
            <div className="signup__from__input">
              <div className="signup__from__input__entry">
                <input type="Phone" placeholder="Phone" />
              </div>
              <div className="signup__from__input__entry">
                <input type="Country" placeholder="Country" />
              </div>
            </div>
            <div className="signup__from__input">
              <div className="signup__from__input__entry">
                <input type="Password" placeholder="Enter Password" />
              </div>
              <div className="signup__from__input__entry">
                <input type="Password" placeholder="Re-Enter Password " />
              </div>
            </div>
          </div>
          <div className="sign__btn__wraper">
            <button className="sign__btn">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}
