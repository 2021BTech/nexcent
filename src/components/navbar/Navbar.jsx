import logo from "../../assets/Logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-silver px-2 py-2">
      <nav className="m-2 p-2 flex justify-between items-center gap-4">
        {/* logo */}
        <div className="">
          <img src={logo} alt="Logo" className="m-2" />
        </div>

        {/* hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* nav items */}
        <div
          className={`md:flex ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row items-center md:justify-between gap-10 m-2 font-light`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-evenly gap-14 m-2 font-light">
            <li className="hover:text-mainColor">
              <a className="text-black font-bold" href="#">
                Home
              </a>
            </li>
            <li className="hover:text-mainColor">
              <a className="" href="#">
                Service
              </a>
            </li>
            <li className="hover:text-mainColor">
              <a className="" href="#">
                Feature
              </a>
            </li>
            <li className="hover:text-mainColor">
              <a className="" href="#">
                Product
              </a>
            </li>
            <li className="hover:text-mainColor">
              <a className="" href="#">
                Testimony
              </a>
            </li>
            <li className="hover:text-mainColor">
              <a className="" href="#">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-5 mt-4 md:mt-0">
            <li>
              <a
                href="#"
                className="text-mainColorShadeOne font-normal leading-6"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-mainColorShadeOne text-white font-normal text-2xl px-4 py-2 m-2 rounded-md shadow-sm leading-3"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
