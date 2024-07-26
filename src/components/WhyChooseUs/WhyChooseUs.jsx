import { useState } from "react";
import freeQuotation from "../../assets/images/Free-Quotation.png";
import reliability from "../../assets/images/reliability.png";
import safetyGuarantee from "../../assets/images/Safety-Guarantee.png";

const WhyChooseUs = () => {
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);
  const [showFullText3, setShowFullText3] = useState(false);

  const handleReadMore = (state, setState) => {
    setState(!state);
  };
 
  const text1 =
    "Whether you want to go a long or short distance, to the hospital or to the airport, sightseeing in chauffeur driven comfort or a regular school or hospital run – Surty’s Private Hire have the vehicle and staff you can rely on. We have safe, clean Multi Purpose Vehicles and minibuses with wheelchair access that are perfect for all your needs.";

  const text2 =
    "We offer a wide range of services, including transfers to or from airports and seaports, tours in the picturesque Gloucester and surrounding areas, theatre visits, business or pleasure; we can arrange these to meet your specific requirements.";

  const text3 =
    "We are justifiably proud of our excellent reputation and customer care record, so please call us and ask our advice if needed. We will be delighted to help and give you a quotation for any enquiries. Our courteous drivers will help your journey or visit to be problem free, so that you arrive on time, every time and at a charge that remains competitive, but also gives value for money.";

  const truncatedText1 = showFullText1 ? text1 : text1.slice(0, 73) + "...";
  const truncatedText2 = showFullText2 ? text2 : text2.slice(0, 73) + "...";
  const truncatedText3 = showFullText3 ? text3 : text3.slice(0, 73) + "...";
  return (
    <div className="bg-zigzag-animation relative pt-[6.5625rem] pb-[9.25rem] bg-dark">
      <div className="max-w-[1440px] w-10/12 mx-auto text-center">
        <div className="mb-[3.75rem]">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Our benefit list</p>
          <h1 className="text-[3.4rem] sm:text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-white">Why choose us</h1>
        </div>

        <div className="flex gap-10 md:gap-0 flex-col md:flex-row items-center md:items-start justify-center text-white">
          <div className="w-full max-w-[25rem]">
            <div className="w-full max-w-[12.25rem] mx-auto">
              <div className="size-full mx-auto max-w-[6.125rem] max-h-[6.125rem]">
                <img src={safetyGuarantee} className="size-full" alt="Safety Guarantee Image" />
              </div>
              <a className="mt-[2.1875rem] mb-[1.875rem] inline-block text-xl font-semibold leading-[1.5rem]">Courtesy</a>
              <p className="mb-5 text-[#B5B5B5] leading-[1.875rem]">{truncatedText1}</p>
              <button
                onClick={() => handleReadMore(showFullText1, setShowFullText1)}
                className="text-xs font-semibold tracking-[0.15rem] leading-[2.125rem] duration-[0.4s] hover:text-primary-color"
              >
                READ {showFullText1 ? "LESS" : "MORE"}
              </button>
            </div>
          </div>

          <div className="w-full max-w-[25rem] py-10 md:py-0 border-y md:border-y-0 border-y-[#ffffff1a] md:border-x md:border-x-[#ffffff1a]">
            <div className="w-full max-w-[12.25rem] mx-auto">
              <div className="size-full mx-auto max-w-[6.125rem] max-h-[6.125rem]">
                <img src={reliability} className="size-full" alt="DBS Cleared Drivers Image" />
              </div>
              <a className="mt-[2.1875rem] mb-[1.875rem] inline-block text-xl font-semibold leading-[1.5rem]">Reliability</a>
              <p className="mb-5 text-[#B5B5B5] leading-[1.875rem]">{truncatedText2}</p>
              <button
                onClick={() => handleReadMore(showFullText2, setShowFullText2)}
                className="text-xs font-semibold tracking-[0.15rem] leading-[2.125rem] duration-[0.4s] hover:text-primary-color"
              >
                READ {showFullText2 ? "LESS" : "MORE"}
              </button>
            </div>
          </div>

          <div className="w-full max-w-[25rem]">
            <div className="w-full max-w-[12.25rem] mx-auto">
              <div className="size-full mx-auto max-w-[6.125rem] max-h-[6.125rem]">
                <img src={freeQuotation} className="size-full" alt="Free Quotation Image" />
              </div>
              <a className="mt-[2.1875rem] mb-[1.875rem] inline-block text-xl font-semibold leading-[1.5rem]">Professionalism</a>
              <p className="mb-5 text-[#B5B5B5] leading-[1.875rem]">{truncatedText3}</p>
              <button
                onClick={() => handleReadMore(showFullText3, setShowFullText3)}
                className="text-xs font-semibold tracking-[0.15rem] leading-[2.125rem] duration-[0.4s] hover:text-primary-color"
              >
                READ {showFullText3 ? "LESS" : "MORE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
