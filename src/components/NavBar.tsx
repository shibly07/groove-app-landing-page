import React from "react";
import { Link } from "react-scroll";

import WrapperContainer from "./WrapperContainer";

import { ImPlay3 } from "react-icons/im";
import { TbMinusVertical } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

type NavBarProps = {
  showMobileNavMenu: boolean;
  setShowMobileNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ showMobileNavMenu, setShowMobileNavMenu }: NavBarProps) => {
  const openAndCloseMobileNavMenu = () => {
    if (showMobileNavMenu) {
      setShowMobileNavMenu(false);
      document.body.style.overflowY = "";
    } else {
      setShowMobileNavMenu(true);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <>
      {showMobileNavMenu && (
        <div className="inset-0 absolute min-h-screen w-full bg-black z-[40]" />
      )}
      <nav className="fixed pt-12 pb-6 w-full z-[50] bg-[#33D2FD]">
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
            {/* Mobile links */}
            <div className="md:hidden flex items-center">
              <div className="">
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
              </div>

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
                <li>
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
                <li>
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={openAndCloseMobileNavMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={openAndCloseMobileNavMenu}
                  >
                    App
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="hero"
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
            </div>
          </div>
        </WrapperContainer>
      </nav>
    </>
  );
};

export default NavBar;
