import { useState } from "react";
import { Link } from "react-scroll";

import { WrapperContainer } from "@/wrapper";

import { ImPlay3 } from "react-icons/im";
import { TbMinusVertical } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  // Open and close mobile menu
  const openAndCloseMobileNavMenu = (): void => {
    if (showMobileNavMenu) {
      setShowMobileNavMenu(false);
      document.body.style.overflowY = "";
    } else {
      setShowMobileNavMenu(true);

      // Lock vertical scrolling when mobile navigation menu is open
      document.body.style.overflowY = "hidden";
    }
  };

  // Open and close state of mobile navigation menu
  const [showMobileNavMenu, setShowMobileNavMenu] = useState<boolean>(false);

  return (
    <div>
      {/* Dark overlay when mobile navigation menu is open */}
      {showMobileNavMenu && (
        <div className="inset-0 absolute min-h-screen w-full bg-black z-[40]" />
      )}

      {/* Nav items */}
      <nav className={`fixed pt-12 pb-6 w-full z-[50] bg-slate-500`}>
        <WrapperContainer>
          <div className="flex justify-between text-white">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <ImPlay3 className="h-7 w-7" />
                <TbMinusVertical className="h-7 w-7" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold">GROOVE</span>
                <span className="text-xs font-bold">APP</span>
              </div>
            </div>

            {/* Mobile menu icon */}
            <div className="md:hidden flex items-center">
              {/* Hamburger menu for mobile */}
              {!showMobileNavMenu ? (
                <GiHamburgerMenu
                  className="h-6 w-6"
                  onClick={openAndCloseMobileNavMenu}
                />
              ) : (
                <ImCross
                  className="h-5 w-5"
                  onClick={openAndCloseMobileNavMenu}
                />
              )}

              {/* Mobile links */}
              <div className="absolute left-0 top-20 z-40 w-full h-full pl-44 flex flex-col gap-y-5 text-black text-center">
                {showMobileNavMenu && (
                  <ul className="bg-slate-700 text-white py-7">
                    <li className="py-2">
                      <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={openAndCloseMobileNavMenu}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={openAndCloseMobileNavMenu}
                      >
                        About
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        activeClass="active"
                        to="app"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={openAndCloseMobileNavMenu}
                      >
                        App
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        activeClass="active"
                        to="info"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={openAndCloseMobileNavMenu}
                      >
                        Info
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden md:block">
              <ul className="flex gap-x-20 text-white font-bold">
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="app"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    App
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    activeClass="active"
                    to="info"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Info
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </WrapperContainer>
      </nav>
    </div>
  );
};

export default NavBar;
