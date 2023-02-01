import logo from "assets/footer/footer-logo.svg"
import google_play from "assets/google-play-badge.png"
import app_store from "assets/app-store-badge.svg"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="flex flex-col tablet:flex-row tablet:justify-center bg-white mx-auto max-w-[85vw] text-darkblue">
      <div className="flex items-center justify-center mt-[24px] tablet:mt-0 tablet:mr-[200px] ">
        <img className="mr-[16px] w-[70px] h-[70px]" src={logo} alt="logo" />
        <div className="text-headline-s-600 text-center">Hol dir die App</div>
      </div>
      <div className="flex flex-col tablet:my-[40px] tablet:justify-center">
        <div className="flex mt-[25px] max-h-[150px]">
          <img
            className="w-[132px] tablet:w-[14.6vw] desktop:w-[9.1vw]"
            src={app_store}
            alt="App Store badge"
          />
          <img
            className="w-[150px] tablet:w-[16.6vw] desktop:w-[10.4vw]"
            src={google_play}
            alt="Google Play badge"
          />
        </div>
        <div className="flex flex-col desktop:flex-row desktop:items-center">
          <div className="text-paragraph-xs-500  text-center tablet:text-start mt-[16px] desktop:mt-0 desktop:mr-[8px]">
            © 2022 Vorlesen. All rights reserved.
          </div>
          <div className="flex gap-[8px] mt-[16px] tablet:mt-0 justify-center">
            <Link className="text-paragraph-s-700-link underline " to="faq">
              FAQ
            </Link>
            <Link className="text-paragraph-s-700-link underline " to="imprint">
              Imprint
            </Link>
            <Link
              className="text-paragraph-s-700-link underline "
              to="privacypolicy"
            >
              Privacy Policy
            </Link>
            <a
              className="text-paragraph-s-700-link underline  "
              href="https://www.w3schools.com/"
            >
              Contact
            </a>
            <Link className="text-paragraph-s-700-link underline " to="about">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
