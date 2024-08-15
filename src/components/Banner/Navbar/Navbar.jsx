import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { TbPhoneCall } from "react-icons/tb";
import logo from "../../../assets/images/logo.png";
import NavDrawer from "./NavDrawer/NavDrawer";
import NavDrawerFixed from "./NavDrawer/NavDrawerFixed";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
    <header>
      <nav className={`absolute top-0 z-50 max-w-[1440px] w-10/12 left-0 right-0 mx-auto ${navbar && "hidden"}`}>
        <div className="text-white grid md:grid-cols-3 gap-6 px-4 py-7">
          <ul className="flex justify-center md:justify-start items-center gap-4">
            <li>
              <a href="mailto:surtysprivatehire.co.uk" className="flex items-center gap-2">
                <GrMail className="text-primary-color" />
                <span className="font-semibold text-xs sm:text-sm"> surtysprivatehire.co.uk</span>
              </a>
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center">
            <div>
              <img className="max-h-[3.9rem] md:max-h-[6.5rem]" src={logo} alt="logo" />
            </div>
            <p className="text-[#cacaca] text-sm sm:text-base mx-auto mt-3 font-medium">Award Winning Mini Bus and Taxi Company</p>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <ul className="flex gap-6 items-center">
              <li>
                <a href="http://www.twitter.com/crisis786" className="duration-300 hover:text-primary-color">
                  <FaTwitter className="text-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary-color text-dark rounded-[2.9688rem] flex items-center justify-between">
          <div className="flex-grow sm:py-4 md:py-7 px-7 md:px-14">
            <NavDrawer></NavDrawer>
            <ul className="hidden gap-16 md:flex items-center text-sm font-medium tracking-[0.2rem]">
              <NavLinks></NavLinks>
            </ul>
          </div>

          <a className="relative md:w-[20%] bg-dark rounded-r-[2.9688rem] pl-6 sm:pl-12 pr-8 sm:pr-7 py-3 sm:py-6">
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark rounded-full p-2 sm:p-4">
              <TbPhoneCall className="text-primary-color text-xl sm:text-3xl" />
            </div>
            <a href="tel:07980811427" className="text-primary-color text-sm sm:text-base sm:leading-[1rem] font-semibold inline-block" title="Mobile number">
              07980 811 427
            </a>
            <br />
            <a href="tel:01452537993" className="text-primary-color text-sm sm:text-base sm:leading-[1rem] font-semibold inline-block" title="Phone number">
              01452 537993
            </a>
          </a>
        </div>
      </nav>

      <motion.nav
        className={`fixed w-full top-0 z-50 bg-primary-color text-dark ${!navbar && "hidden"}`}
        variants={{
          initial: {
            opacity: 0,
            y: -100,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="initial"
        animate="animate"
        key={navbar}
      >
        <div className="max-w-[1440px] w-10/12 mx-auto flex items-center justify-between">
          <div className="flex-grow sm:py-4 md:py-6 px-7 md:px-14">
            <NavDrawerFixed></NavDrawerFixed>
            <ul className="hidden gap-16 md:flex items-center text-sm font-medium tracking-[0.2rem]">
              <NavLinks></NavLinks>
            </ul>
          </div>

          <a href="#" className="relative z-[2] md:w-[20%] bg-dark pl-8 sm:pl-12 pr-6 sm:pr-7 py-3 sm:py-7">
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark rounded-full p-2 sm:p-4">
              <TbPhoneCall className="text-primary-color text-xl sm:text-3xl" />
            </div>
            <a href="tel:07980811427" className="text-primary-color text-sm sm:text-base sm:leading-[1rem] font-semibold inline-block" title="Mobile number">
              07980 811 427
            </a>
            <br />
            <a href="tel:01452537993" className="text-primary-color text-sm sm:text-base sm:leading-[1rem] font-semibold inline-block" title="Phone number">
              01452 537993
            </a>
          </a>
        </div>

        <div id="nav-right-overlay" className="absolute top-0 h-[4.5rem] sm:h-[6.5rem] md:h-[6.5rem] w-[20%] bg-dark ml-auto right-0"></div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
