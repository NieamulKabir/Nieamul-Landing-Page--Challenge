import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6"
const NavBar = () => {


  return (
    <div className=" fixed top-0 left-0 w-full z-50 bg-white ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <a>Home</a>
            </li>

            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              className="w-[194px] h-[47px] ml-[90px] "
              src={logo}
              alt="eyeGlass"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex justify-center items-center">
          <ul className="menu menu-horizontal px-1 font-normal text-xl ">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex mr-[90px] ">
        <FaCartShopping className="h-[22px] w-[22px] mr-[20px]" />
        <FaUser  className="h-[22px] w-[22px]"/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
