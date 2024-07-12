import logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="bg-silver px-2 py-2">
      <nav className="m-2 p-2 flex justify-between">
        {/* logo */}
        <div className="" href="#">
          <img src={logo} alt="Logo" className="m-2" />
        </div>

        {/* nav items */}
        <div className="">
          <ul className="flex items-center justify-evenly gap-14 m-2 font-light">
            <li className="hover:text-mainColor">
              <a className="text-black font-bold " href="#">
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
        </div>
        <div className="flex">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <a
                href="#"
                className="text-mainColorShadeOne font-normal leading-6 "
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
