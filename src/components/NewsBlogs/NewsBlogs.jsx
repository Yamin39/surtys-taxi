import { FaLink } from "react-icons/fa";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import "./NewsBlogs.css";

const NewsBlogs = () => {
  return (
    <div className="pt-[6.5625rem] pb-[6.875rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.75rem] text-center">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Latest blog posts</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">News & updates</h1>
        </div>

        <div className="blog-container grid gap-7 md:grid-cols-2">
          <div>
            {/* blog 1 */}
            <div className="image-block relative overflow-hidden w-full h-[24.25rem] max-h-[24.25rem] rounded-[0.625rem]">
              <div className="inner-block">
                <a href="#">
                  <FaLink className="link-icon"></FaLink>
                </a>
              </div>
              <div className="w-full h-full rounded-[0.625rem]">
                <img src={blog1} alt="Blog Thumbnail" className="blog-image duration-300 size-full object-cover bg-gray-300 rounded-[0.625rem]" />
              </div>
            </div>

            <div className="mt-[1.875rem] flex items-center gap-4 text-secondary-color font-medium mb-5">
              <button className="py-[0.0938rem] px-5 rounded-[1.1563rem] bg-primary-color text-dark font-bold text-xs leading-[2.125rem] tracking-[0.15rem]  uppercase duration-300 hover:bg-dark active:scale-90 hover:text-white">
                20 FEB, 2019
              </button>
              <a href="#" className="duration-300 hover:text-primary-color">
                by Admin
              </a>
              <span>.</span>
              <a href="#" className="duration-300 hover:text-primary-color">
                3 Comments
              </a>
            </div>

            <h2 className="text-[1.875rem] font-bold tracking-[-0.075rem] leading-[2.25rem] duration-300 hover:text-primary-color">
              <a href="#">We ensure you that your journey is comfortable and safe</a>
            </h2>

            <p className="text-secondary-color leading-[2.125rem] mt-5">
              There are many variations of passages of lorem ipsum available but the majority have suffered alteration...
            </p>
          </div>

          <div className="grid gap-7 grid-rows-2">
            {/* blog 2 */}
            <div className="sm:max-h-[18.9375rem] flex flex-col-reverse sm:flex-row rounded-[0.625rem] bg-[#F3F3F3]">
              <div className="sm:w-1/2 p-10 flex flex-col justify-center">
                <button className="py-[0.0938rem] w-fit px-5 rounded-[1.1563rem] bg-primary-color text-dark font-bold text-xs leading-[2.125rem] tracking-[0.15rem]  uppercase duration-300 hover:bg-dark active:scale-90 hover:text-white">
                  20 FEB, 2019
                </button>

                <h3 className="text-xl font-bold tracking-[-0.05rem] leading-6 mt-7 mb-4">Car with private and discreet cabman for a service</h3>

                <div className="flex items-center gap-3 text-secondary-color font-medium">
                  <a href="#" className="duration-300 hover:text-primary-color">
                    by Admin
                  </a>
                  <span>.</span>
                  <a href="#" className="duration-300 hover:text-primary-color">
                    3 Comments
                  </a>
                </div>
              </div>
              <div className="sm:w-1/2">
                <div className="image-block relative overflow-hidden size-full rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]">
                  <div className="inner-block">
                    <a href="#">
                      <FaLink className="link-icon"></FaLink>
                    </a>
                  </div>
                  <img
                    src={blog2}
                    alt="Blog image 2"
                    className="blog-image duration-300 size-full object-cover rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]"
                  />
                </div>
              </div>
            </div>

            {/* blog 3 */}
            <div className="sm:max-h-[18.9375rem] flex flex-col-reverse sm:flex-row rounded-[0.625rem] bg-[#F3F3F3]">
              <div className="sm:w-1/2 p-10 flex flex-col justify-center">
                <button className="py-[0.0938rem] w-fit px-5 rounded-[1.1563rem] bg-primary-color text-dark font-bold text-xs leading-[2.125rem] tracking-[0.15rem]  uppercase duration-300 hover:bg-dark active:scale-90 hover:text-white">
                  20 FEB, 2019
                </button>

                <h3 className="text-xl font-bold tracking-[-0.05rem] leading-6 mt-7 mb-4">Car with private and discreet cabman for a service</h3>

                <div className="flex items-center gap-3 text-secondary-color font-medium">
                  <a href="#" className="duration-300 hover:text-primary-color">
                    by Admin
                  </a>
                  <span>.</span>
                  <a href="#" className="duration-300 hover:text-primary-color">
                    3 Comments
                  </a>
                </div>
              </div>
              <div className="sm:w-1/2">
                <div className="image-block relative overflow-hidden size-full rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]">
                  <div className="inner-block">
                    <a href="#">
                      <FaLink className="link-icon"></FaLink>
                    </a>
                  </div>
                  <img
                    src={blog3}
                    alt="Blog image 3"
                    className="blog-image duration-300 size-full object-cover rounded-t-[0.625rem] sm:rounded-tl-none sm:rounded-e-[0.625rem]"
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
