import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utilis/verifyToken";
import logo from "/ElevateSpaces.png";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const [dropDownState, setDropDownState] = useState(false);
  // const dropDownMenuRef = useRef(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  let user;
  if (token) {
    user = verifyToken(token);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("button clicked");
    const tosatId = toast.loading("Processing...");
    dispatch(logOut());
    // setVisible(true);
    toast.success("Logged Out Successful", { id: tosatId });
    navigate("/");
  };

  const items = useAppSelector((state) => state.booking.booking);
  const { pathname } = useLocation();

  return (
    <div className="bg-[#151C35] shadow-md navbar">
      <nav className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
          <Link to="/">
            <img src={logo} className="w-26 h-10" alt="Logo" />
          </Link>
        </div>

        {/* Navbar Links */}
        <ul className="hidden items-center justify-between gap-10 lg:flex">
          {["Home", "Meeting Room", "About Us", "Contact Us"].map(
            (item, index) => (
              <li
                key={index}
                className="group flex font-bold cursor-pointer flex-col"
              >
                <NavLink
                  to={`/${item.toLowerCase().replace(" ", "_")}`}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-black"
                  }
                >
                  {item}
                </NavLink>
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
            )
          )}
          {/* Shopping Cart Icon */}
          <li className="flex items-center">
            {pathname === "/checkout" ? null : !items?.length ? null : (
              <Link to="/check_out">
                <div className="relative cursor-pointer mt-1">
                  <FaShoppingCart className="h-5 w-5" />
                  <span className="absolute text-red-500 -top-2 right-2 bg-white size-4 flex justify-center items-center rounded-full p-1 font-semibold">
                    {items.length}
                  </span>
                </div>
                {/* <FaShoppingCart className="text-2xl text-black cursor-pointer hover:text-primary" /> */}
              </Link>
            )}
          </li>

          {/* Conditionally Render Login or Profile */}
          {token ? (
            <li className="relative">
              <img
                src={user?.profileImage} // Replace with dynamic user image
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute z-50 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <Link to="/dashboard">
                    <button
                      className="w-full px-4 py-2 text-left text-black hover:bg-gray-200"
                      onClick={() => navigate("/dashboard")}
                    >
                      Dashboard
                    </button>
                  </Link>

                  <button
                    className="w-full px-4 py-2 text-left text-black hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
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
          )}
        </ul>

        {/* Mobile Menu */}
        <div
          // ref={dropDownMenuRef}
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
            <ul className="z-50 text-base gap-2 bg-gray-100 absolute right-0 top-11 flex w-[200px] flex-col rounded-lg">
              {["Home", "Meeting Room", "About Us", "Contact Us"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer px-6 py-2 text-black hover:bg-primary"
                  >
                    <NavLink to={`/${item.toLowerCase().replace(" ", "_")}`}>
                      {item}
                    </NavLink>
                  </li>
                )
              )}
              {!token && (
                <li className="cursor-pointer px-6 py-2 text-black hover:bg-primary">
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
