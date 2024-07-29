import { FaLink } from "react-icons/fa";
import award1 from "../../assets/images/award1.jpg";
import award2 from "../../assets/images/award2.jpg";
import award3 from "../../assets/images/award3.jpg";
import "./NewsBlogs.css";

const NewsBlogs = () => {
  return (
    <div id="awards" className="pt-[6.5625rem] pb-[6.875rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.75rem] text-center">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="max-w-[22.5rem] mx-auto font-semibold leading-[2.125rem] text-[#717171]">Our awards and achievements</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">Awards</h1>
        </div>

        <div className="blog-container grid gap-7 md:grid-cols-2">
          <div>
            {/* blog 1 */}
            <div className="image-block relative overflow-hidden w-full md:h-[24.25rem] md:max-h-[24.25rem] rounded-[0.625rem]">
              <div className="inner-block">
                <a href="#">
                  <FaLink className="link-icon"></FaLink>
                </a>
              </div>
              <div className="w-full h-full rounded-[0.625rem]">
                <img src={award1} alt="Certificate image" className="blog-image duration-300 size-full bg-gray-300 rounded-[0.625rem]" />
              </div>
            </div>

            <div className="mt-[1.875rem] flex items-center gap-4 text-secondary-color font-medium mb-5">
              <p className="py-[0.0938rem] px-5 rounded-[1.1563rem] bg-primary-color text-dark font-bold text-xs leading-[2.125rem] tracking-[0.15rem] uppercase">
                December, 2023
              </p>
            </div>

            <h2 className="text-[1.875rem] font-bold tracking-[-0.075rem] leading-[2.25rem]">Best Mini Bus & Taxi Company of the year 2023 Gloucestershire</h2>

            <p className="text-secondary-color leading-[2.125rem] mt-5">
              We achieved the Best Mini Bus & Taxi Company 2023 Gloucestershire Certificate in December 2023.
            </p>
          </div>

          <div className="grid gap-7 md:grid-rows-2">
            {/* blog 2 */}
            <div className="sm:max-h-[18.9375rem] flex flex-col-reverse sm:flex-row rounded-[0.625rem] bg-[#F3F3F3]">
              <div className="sm:w-1/2 p-10 flex flex-col justify-center">
                <p className="py-[0.0938rem] w-fit px-5 rounded-[1.1563rem] bg-primary-color text-dark font-bold text-xs leading-[2.125rem] tracking-[0.15rem] uppercase">
                  2023 / 24
                </p>

                <h3 className="text-xl font-bold tracking-[-0.05rem] leading-6 mt-7 mb-4">Mini Bus & Taxi Company of the Year</h3>
              </div>
              <div className="sm:w-1/2">
                <div className="image-block relative overflow-hidden size-full rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]">
                  <div className="inner-block">
                    <a href="#">
                      <FaLink className="link-icon"></FaLink>
                    </a>
                  </div>
                  <img
                    src={award2}
                    alt="Award image 2"
                    className="blog-image duration-300 size-full object-cover rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]"
                  />
                </div>
              </div>
            </div>

            {/* blog 3 */}
            <div className="md:max-h-[18.9375rem] flex flex-col-reverse sm:flex-row rounded-[0.625rem] bg-[#F3F3F3]">
              <div className="sm:w-1/2 p-10 flex flex-col justify-center">
                <p className="py-[0.0938rem] w-fit px-5 rounded-[1.1563rem] bg-primary-color text-dark font-bold text-xs leading-[2.125rem] tracking-[0.15rem] uppercase">
                  2023 / 24
                </p>

                <h3 className="text-xl font-bold tracking-[-0.05rem] leading-6 mt-7 mb-4">Mini Bus & Taxi Company of the Year</h3>
              </div>
              <div className="sm:w-1/2">
                <div className="image-block relative overflow-hidden size-full rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]">
                  <div className="inner-block">
                    <a href="#">
                      <FaLink className="link-icon"></FaLink>
                    </a>
                  </div>
                  <img
                    src={award3}
                    alt="Award image 3"
                    className="blog-image duration-300 size-full rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlogs;
