/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";
import { DarkLight } from "./DarkLight";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/navbar/logo.png";

export const Navbar = () => {
  const [openNav, setNav] = useState(false);
  const navRef = useRef(null);

  const toggleNav = (event) => {
    event.preventDefault();
    setNav(!openNav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* bg-[#1EB2A6] */}
      <div className="flex fixed top-0 w-[100%] flex-wrap place-items-center z-[1000] ">
        <section className="relative mx-auto w-[100%]  dark:border-b-[1px] border-b-[1px] border-[#1b253c2c] dark:border-[#1b253c] dark:bg-darkBlue bg-[#ffffff]">
          {/* <!-- navbar --> */}
          <nav className="flex lg:w-[1450px] mx-auto justify-between text-white ">
            <div className="px-5 py-4 flex w-full items-center">
              <a
                className="text-2xl font-bold font-heading text-gray-700 dark:text-white IBM"
                href="#"
              >
                <img className="h-9" src={logo} alt="ittc-it" />
              </a>
              {/* <!-- Nav Links --> */}
              <ul
                className={`hidden md:flex  px-4 mx-auto font-semibold font-heading space-x-8
                
                }`}
              >
                <li>
                  <a
                    className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                    href="#courses"
                  >
                    Our Courses
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                    href="#teacher"
                  >
                    Our Teacher
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                    href="#"
                  >
                    About Us
                  </a>
                </li>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex  space-x-5 items-center">
                <DarkLight />
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}

            <a
              onClick={toggleNav}
              className="navbar-burger self-center mr-3 xl:hidden"
              href="#"
            >
              {openNav ? (
                <FaTimes
                  className="text-darkBlue dark:text-white font-[400]"
                  size={22}
                />
              ) : (
                <FaBars
                  className="text-darkBlue  dark:text-white font-[400]"
                  size={22}
                />
              )}
            </a>

            {openNav && (
              <nav className=" absolute right-0 z-[900] w-[80%] h-[100vh] bg-[#fff] dark:bg-darkBlue top-[60px]">
                <div className=" space-x-5 items-center flex justify-end mr-2">
                  <DarkLight />
                </div>
                <ul
                  className={`px-4 mx-auto font-semibold font-heading space-x-8 flex flex-col gap-5`}
                >
                  <li>
                    <a className="hover:underline" href="#"></a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNav(false)}
                      className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNav(false)}
                      className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                      href="#courses"
                    >
                      Our Courses
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNav(false)}
                      className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                      href="#teacher"
                    >
                      Our Teacher
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNav(false)}
                      className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                      href="#about"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNav(false)}
                      className="hover:underline font-[600] text-gray-700 dark:text-white IBM "
                      href="/contact"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </nav>
        </section>
      </div>
      {/* <!-- Does this resource worth a follow? --> */}
    </>
  );
};
