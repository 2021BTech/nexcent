import logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white m-4 p-4 flex justify-between">
        {/* logo */}
        <div className="" href="#">
          <img src={logo} alt="Logo" className="m-2" />
        </div>

        {/* nav items */}
        <div className="">
          <ul className="flex items-center justify-evenly gap-14 m-2 font-light">
            <li className="">
              <a className="" href="#">
                Home
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Service
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Feature
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Product
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Testimony
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <a href="#" className="text-mainColor font-normal">
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-mainColor text-white font-normal text-2xl p-3 m-2 rounded-md"
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
