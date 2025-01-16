import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeDropDown = (e: FormEvent) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <div className="bg-white shadow-md ">
      <nav className=" container mx-auto flex items-center justify-between  px-4 py-5 text-black ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </div>
        <ul className="hidden items-center justify-between gap-10 lg:flex">
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              Home
            </NavLink>

            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/meeting_room"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              Meeting Room
            </NavLink>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/about_us"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              About us
            </NavLink>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/contact_us"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              Contact us
            </NavLink>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group flex font-bold cursor-pointer flex-col">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              Login
            </NavLink>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative">
            <img
              src="/path-to-user-image.jpg"
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute z-50 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <button className="w-full px-4 py-2 text-left text-black hover:bg-gray-200">
                  Dashboard
                </button>
                <button className="w-full px-4 py-2 text-left text-black hover:bg-gray-200">
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          {dropDownState && (
            <ul className=" z-50 text-base gap-2  bg-gray-100  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg  ">
              <li className="cursor-pointer  px-6 py-2 text-black rounded-t-lg hover:bg-primary ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-black hover:bg-primary ">
                <NavLink to="/meeting_room">Meeting Room</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-black hover:bg-primary ">
                <NavLink to="/about_us">About us</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-black hover:bg-primary ">
                <NavLink to="/contact_us"> Contact us</NavLink>
              </li>
              <li className="cursor-pointer  px-6 py-2 text-black hover:bg-primary ">
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
