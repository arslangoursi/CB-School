import React, { useLayoutEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  function changeIsNavOpen() {
    if (window.innerWidth <= 945) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }
  useLayoutEffect(() => {
    changeIsNavOpen();
    window.addEventListener("resize", changeIsNavOpen);
  }, []);
  return (
    <div className="header__section__content">
      <div className="header__section__left">
        <img src={Logo} alt="logo"></img>
      </div>

      <div
        className="header__menu"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        {isNavOpen ? <Y /> : <X />}
      </div>
      {isNavOpen ? (
        <ClickAwayListener
          onClickAway={() => {
            if (window.innerWidth <= 945) {
              setIsNavOpen(false);
            }
          }}
        >
          <div className="header__section__center">
            <Link to="" className="header__btn">
              Home
            </Link>
            <Link to="" className="header__btn">
              About
            </Link>
            <Link to="" className="header__btn">
              Feature
            </Link>
            <Link to="" className="header__btn">
              Pricing
            </Link>
          </div>
        </ClickAwayListener>
      ) : null}
      <div className="header__section__right">
        <Link to="" className="login__btn">
          Login
        </Link>
      </div>
    </div>
  );
}
function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="21"
      viewBox="0 0 30 21"
    >
      <g
        id="Icon_feather-menu"
        data-name="Icon feather-menu"
        transform="translate(-3 -7.5)"
      >
        <path
          id="Path_21895"
          data-name="Path 21895"
          d="M4.5,18h27"
          fill="none"
          stroke="#0C1E3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_21896"
          data-name="Path 21896"
          d="M4.5,9h27"
          fill="none"
          stroke="#0C1E3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_21897"
          data-name="Path 21897"
          d="M4.5,27h27"
          fill="none"
          stroke="#0C1E3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}
function Y() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.82"
      height="31.82"
      viewBox="0 0 31.82 31.82"
    >
      <path
        id="Icon_ionic-md-add"
        data-name="Icon ionic-md-add"
        d="M29.25,19.5H19.5v9.75h-3V19.5H6.75v-3H16.5V6.75h3V16.5h9.75Z"
        transform="translate(-9.546 15.91) rotate(-45)"
        fill="#0C1E3C"
      />
    </svg>
  );
}
