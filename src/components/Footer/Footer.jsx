import { FaMobile, FaPhoneSquareAlt, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-zigzag-animation relative bg-dark text-white">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="flex flex-wrap md:flex-nowrap gap-10 justify-between pt-[10rem] pb-16 md:pb-[6.875rem]">
          {/* About */}
          <div className="w-full max-w-[32rem]">
            <h5 className="text-lg font-semibold leading-[1.35rem] mb-8">About</h5>
            <p className="text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold">
              Surty’s Private Hire operates a range of vehicles offering wheelchair access, storage and reliability as well as cleanliness and safety. We are
              relied on by regular clients for both business and pleasure. Our reputation is built on being professional and knowing what our clients need. All
              our experienced staff are of the highest standard and plan your journey to ensure you meet your obligations – reliability comes as standard at
              Surty’s Private Hire.
            </p>

            <ul className="flex gap-6 items-center mt-7">
              <li>
                <a href="http://www.twitter.com/crisis786" className="duration-300 hover:text-primary-color">
                  <FaTwitter className="text-lg" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="w-full max-w-[10.625rem]">
            <h5 className="text-lg font-semibold leading-[1.35rem] mb-8 sm:pl- 4">Links</h5>

            <ul id="footer-link-ul" className="space-y-2 text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold -ml-4">
              <li>
                <a
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView();
                  }}
                  className="cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    document.getElementById("name-input").focus();
                    document.getElementById("book-now")?.scrollIntoView();
                  }}
                  className="cursor-pointer"
                >
                  Get a Taxi
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    document.getElementById("testimonials")?.scrollIntoView();
                  }}
                  className="cursor-pointer"
                >
                  Our Reviews
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    document.getElementById("awards")?.scrollIntoView();
                  }}
                  className="cursor-pointer"
                >
                  Our achievements
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView();
                  }}
                  className="cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full max-w-[16.875rem]">
            <h5 className="text-lg font-semibold leading-[1.35rem] mb-8">Contact</h5>

            <p className="text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold">Surty&apos;s Private Hire, 23 Archibald Street, Gloucester, GL14EH</p>

            <ul className="space-y-2 text-sm leading-[1.875rem] font-semibold mt-7">
              <li>
                <a href="mailto:ish@surtysprivatehire.co.uk" className="flex items-center gap-2">
                  <GrMail className="text-primary-color" />
                  <span> ish@surtysprivatehire.co.uk</span>
                </a>
              </li>
              <li>
                <a href="tel:01452537993" className="flex items-center gap-2" title="Phone number">
                  <FaPhoneSquareAlt className="text-primary-color" />
                  <span> 01452 537993</span>
                </a>
              </li>
              <li>
                <a href="tel:07980811427" className="flex items-center gap-2" title="Mobile number">
                  <FaMobile className="text-primary-color" />
                  <span> 07980 811 427</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-6 sm:justify-center pt-12 border-t-[0.0625rem] border-t-[#ffffff1a] pb-[5.375rem]">
          <div className="flex gap-5 items-center">
            <div>
              <img className="max-h-[3.9rem] md:max-h-[5rem]" src={logo} alt="logo" />
            </div>
            <p className="text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold">
              © {new Date().getFullYear()}{" "}
              <a href="https://www.surtysprivatehire.co.uk/" className="text-primary-color">
                surtysprivatehire.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
