import Rectangle from "../assets/rectangle.png";
import WhiteLogo from "../assets/whiteLogo.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Call from "../assets/call.svg";
import Mail from "../assets/mail.svg";

export default function Footer() {
  return (
    <div className="dark__background__footer">
      <img src={Rectangle}></img>
      <div className="footer__content">
        <div className="footer__content__logo">
          <img src={WhiteLogo} />
        </div>
        <div className="footer__content__text">
          <div className="footer__content__text__link">
            <div className="footer__content__text__link__heading">Features</div>
            <div className="footer__content__text__link__link">Easy to use</div>
            <div className="footer__content__text__link__link">Easy to use</div>
            <div className="footer__content__text__link__link">Easy to use</div>
            <div className="footer__content__text__link__link">Easy to use</div>
          </div>

          <div className="footer__content__text__link">
            <div className="footer__content__text__link__heading">Links</div>
            <div className="footer__content__text__link__link">Home</div>
            <div className="footer__content__text__link__link">About</div>
            <div className="footer__content__text__link__link">Features</div>
            <div className="footer__content__text__link__link">Pricing</div>
          </div>
          <div className="footer__content__text__link">
            <div className="footer__content__text__link__heading">Contact</div>
            <div className="footer__content__text__link__link">
              <img src={Call} />
              0335-6226026
            </div>
            <div className="footer__content__text__link__link">
              <img src={Whatsapp} />
              whatsapp
            </div>
            <div className="footer__content__text__link__link">
              <img src={Mail} />
              Hammadhabib@gmail.com
            </div>
          </div>
        </div>
        <div className="footer__content__social">
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5878 0.953224C19.7723 1.33848 18.3844 2.06097 17.6869 2.19906C17.6599 2.20606 17.6379 2.21507 17.6118 2.22207C16.7983 1.41954 15.6836 0.922203 14.4497 0.922203C11.9631 0.922203 9.94672 2.93855 9.94672 5.42522C9.94672 5.5563 9.93571 5.79746 9.94672 5.92555C6.72656 5.92555 4.37499 4.24543 2.61481 2.08598C2.37966 1.79579 2.12949 1.94689 2.07745 2.15303C1.96038 2.61934 1.92035 3.39886 1.92035 3.95523C1.92035 5.35717 3.01608 6.73409 4.72222 7.58766C4.40801 7.66872 4.06178 7.72676 3.70154 7.72676C3.27726 7.72676 2.78893 7.61568 2.36164 7.39153C2.20354 7.30848 1.86231 7.33149 1.96338 7.73576C2.36865 9.35585 4.21789 10.4936 5.86999 10.8248C5.49474 11.046 4.6942 11.0009 4.32596 11.0009C4.18987 11.0009 3.71655 10.9689 3.41035 10.9309C3.13116 10.8969 2.70187 10.9689 3.06111 11.5133C3.83263 12.6811 5.5778 13.4146 7.0798 13.4426C5.69687 14.5273 3.43536 14.9236 1.26891 14.9236C0.83062 14.9136 0.852635 15.4129 1.20587 15.598C2.80394 16.4366 5.42169 16.9329 7.29194 16.9329C14.7269 16.9329 18.9527 11.2661 18.9527 5.92455C18.9527 5.83849 18.9507 5.65837 18.9477 5.47725C18.9477 5.45924 18.9527 5.44223 18.9527 5.42421C18.9527 5.3972 18.9447 5.37118 18.9447 5.34416C18.9417 5.20807 18.9387 5.08099 18.9357 5.01494C19.5251 4.58966 20.4277 3.85116 20.884 3.28578C21.0391 3.09366 20.9141 2.8605 20.7029 2.93355C20.1595 3.12268 19.2199 3.48892 18.6315 3.55897C19.8093 2.77945 20.3917 2.10099 20.892 1.34749C21.0632 1.09032 20.849 0.829141 20.5878 0.953224Z"
              fill="white"
            />
          </svg>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.976471 5.59215H4.31204V16.9331H0.976471V5.59215ZM2.63425 4.25793H2.61557C1.62023 4.25793 0.976471 3.5161 0.976471 2.58948C0.976471 1.64285 1.64025 0.922363 2.65359 0.922363C3.66827 0.922363 4.29336 1.64285 4.31204 2.58948C4.31204 3.51543 3.66827 4.25793 2.63425 4.25793ZM16.9872 16.9331H13.6516V10.863C13.6516 9.3967 12.8344 8.39603 11.5222 8.39603C10.5209 8.39603 9.97916 9.07115 9.71632 9.72359C9.62025 9.95708 9.64894 10.6028 9.64894 10.9291V16.9331H6.31337V5.59215H9.64894V7.33732C10.1299 6.59282 10.8831 5.59215 12.8097 5.59215C15.1967 5.59215 16.9865 7.09316 16.9865 10.4447L16.9872 16.9331Z"
              fill="white"
            />
          </svg>
          <svg
            width="11"
            height="21"
            viewBox="0 0 11 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5446 7.92565H7.0172V5.92431C7.0172 4.89162 7.10126 4.24118 8.58125 4.24118H10.4505V1.05905C9.54089 0.96499 8.62628 0.91896 7.71066 0.920961C4.99585 0.920961 3.01452 2.57907 3.01452 5.62311V7.92565H0.0125122V11.9283L3.01452 11.9273V20.9344H7.0172V11.9253L10.0853 11.9243L10.5446 7.92565Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
