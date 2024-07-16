import logo from "../../assets/Logo-dark.svg";
import pin from "../../assets/pin.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import send from "../../assets/Send.svg";

const Footer = () => {
  return (
    <footer className="py-8 overflow-y-hidden">
      <div className="bg-silver flex items-center justify-center flex-col p-8">
        <h1 className="text-[48px] font-bold text-center">
          Pellentesque suscipit
          <br /> fringilla libero eu.
        </h1>

        <button className="bg-mainColorShadeOne px-3.5 py-3 m-4 text-white rounded-sm">
          Get a Demo
          <span className="ml-2">&rarr;</span>
        </button>
      </div>

      <div className="bg-secondaryColor py-8">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center">
            {/* Logo and Text */}
            <div className="flex flex-col items-center justify-center">
              <img src={logo} alt="logo" className="m-4" />
              <div>
                <p className="text-white font-normal text-center">
                  Copyright © 2020 Nexcent ltd.
                </p>
                <p className="text-white text-sm text-center pt-2">
                  All rights reserved
                </p>

                <div className="flex justify-center mt-8 gap-4">
                  {/* Social Icons */}
                  <img src={instagram} alt="instagram" />
                  <img src={pin} alt="pin" />
                  <img src={twitter} alt="twitter" />
                  <img src={youtube} alt="youtube" />
                </div>
              </div>
            </div>

            {/* Page Links */}
            <div className="flex flex-col text-white items-center justify-center">
              <p className="font-semibold text-[22px] mb-4">Pages</p>
              <a
                href="#"
                className="text-whit font-normal hover:text-mainColorShadeOne mb-2"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white font-normal hover:text-mainColorShadeOne mb-2"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white font-normal hover:text-mainColorShadeOne mb-2"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white font-normal hover:text-mainColorShadeOne mb-2"
              >
                Contact
              </a>
            </div>

            {/* Support Links */}
            <div className="flex flex-col text-white justify-center items-center">
              <p className="font-semibold mb-4  text-[22px] ">Support</p>
              <a
                href="#"
                className="text-white font-normal hover:text-mainColorShadeOne mb-2"
              >
                FAQs
              </a>
              <a
                href="#"
                className="text-white font-normal hover:text-mainColorShadeOne mb-2"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-white font-normal hover:text-mainColorShadeOne mb-2"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white font-normal hover:text-mainColorShadeOne mb-2"
              >
                Privacy Policy
              </a>
            </div>

            {/* Stay Up to Date */}
            <div className="flex flex-col text-white items-center justify-center">
              <p className="font-semibold mb-4  text-[22px] ">
                Stay Up to Date
              </p>
              <div className="relative m-10">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-gray-300 rounded-md text-grey px-3 py-2 mb-2 "
                />
                <img
                  src={send}
                  alt="send"
                  className="absolute right-0 top-2 left-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
