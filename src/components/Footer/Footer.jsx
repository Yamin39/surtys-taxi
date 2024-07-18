import { FaFacebookF, FaGooglePlusG, FaPhoneSquareAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="flex flex-wrap md:flex-nowrap gap-10 justify-between pt-[10rem] pb-[6.875rem]">
          {/* About */}
          <div className="w-full max-w-[16.875rem]">
            <h5 className="text-lg font-semibold leading-[1.35rem] mb-8">About</h5>
            <p className="text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold">
              There are many vari of pass of lorem ipsum availab but the majority have suffered in some form by injected humour or words
            </p>

            <ul className="flex gap-6 items-center mt-7">
              <li>
                <a href="#" className="duration-300 hover:text-primary-color">
                  <FaTwitter className="text-lg" />
                </a>
              </li>
              <li>
                <a href="#" className="duration-300 hover:text-primary-color">
                  <FaFacebookF className="text-base" />
                </a>
              </li>
              <li>
                <a href="#" className="duration-300 hover:text-primary-color">
                  <FaYoutube className="text-lg" />
                </a>
              </li>
              <li>
                <a href="#" className="duration-300 hover:text-primary-color">
                  <FaGooglePlusG className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="w-full max-w-[10.625rem]">
            <h5 className="text-lg font-semibold leading-[1.35rem] mb-8 sm:pl- 4">Links</h5>

            <ul id="footer-link-ul" className="space-y-2 text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold -ml-4">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Get a Taxi</a>
              </li>
              <li>
                <a href="#">Our Reviews</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full max-w-[16.875rem]">
            <h5 className="text-lg font-semibold leading-[1.35rem] mb-8">Contact</h5>

            <p className="text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold">
              86 Road Broklyn Street, 600 <br />
              New York, USA
            </p>

            <ul className="space-y-2 text-sm leading-[1.875rem] font-semibold mt-7">
              <li>
                <a href="mailto:needhelp@conexi.com" className="flex items-center gap-2">
                  <GrMail className="text-primary-color" />
                  <span> needhelp@conexi.com</span>
                </a>
              </li>
              <li>
                <a href="tel:666 888 000" className="flex items-center gap-2">
                  <FaPhoneSquareAlt className="text-primary-color" />
                  <span> 666 888 000</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-[23.125rem]">
            <h5 className="text-lg font-semibold leading-[1.35rem] mb-8">Newsletter</h5>

            <p className="text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold">
              Sign up now for our mailing list to get all latest news and updates from conexi company.
            </p>

            <form className="mt-7">
              {/* email */}
              <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#cfcfcf] rounded-full pl-10 pr-3">
                <input type="email" placeholder="Enter your email" name="email" className="bg-transparent w-full outline-none py-6" required />
                <button className="text-dark hover:bg-white border-0 bg-primary-color btn btn-circle">Go</button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between pt-12 border-t-[0.0625rem] border-t-[#ffffff1a] pb-[5.375rem]">
          <div className="flex gap-5 items-center">
            <div className="w-full max-w-[10.125rem]">
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <p className="text-[#B5B5B5] text-sm leading-[1.875rem] font-semibold">
              © {new Date().getFullYear()}{" "}
              <a href="https://mhyamin.me/" className="text-primary-color">
                mhyamin.me
              </a>
            </p>
          </div>

          <ul className="flex items-center gap-6 text-sm text-[#B5B5B5]">
            <li>
              <a href="#" className="duration-300 hover:text-primary-color">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="duration-300 hover:text-primary-color">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
