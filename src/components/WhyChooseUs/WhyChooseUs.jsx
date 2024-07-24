import DBSClearedDrivers from "../../assets/images/DBS-Cleared-Drivers.png";
import freeQuotation from "../../assets/images/Free-Quotation.png";
import safetyGuarantee from "../../assets/images/Safety-Guarantee.png";

const WhyChooseUs = () => {
  return (
    <div className="bg-zigzag-animation relative pt-[6.5625rem] pb-[9.25rem] bg-dark">
      <div className="max-w-[1440px] w-10/12 mx-auto text-center">
        <div className="mb-[3.75rem]">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Conexi benefit list</p>
          <h1 className="text-[3.4rem] sm:text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-white">Why choose us</h1>
        </div>

        <div className="flex gap-10 md:gap-0 flex-col md:flex-row items-center justify-center text-white">
          <div className="w-full max-w-[25rem]">
            <div className="w-full max-w-[12.25rem] mx-auto">
              <div className="size-full mx-auto max-w-[6.125rem] max-h-[6.125rem]">
                <img src={safetyGuarantee} className="size-full" alt="Safety Guarantee Image" />
              </div>
              <a href="#" className="mt-[2.1875rem] mb-[1.875rem] inline-block text-xl font-semibold leading-[1.5rem] duration-[0.4s] hover:text-primary-color">
                Safety Guarantee
              </a>
              <p className="mb-5 text-[#B5B5B5] leading-[1.875rem]">Lorem ipsum dolor sit amet cons adipisci elit vehicula est non lac at quam.</p>
              <a href="#" className="text-xs font-semibold tracking-[0.15rem] leading-[2.125rem] duration-[0.4s] hover:text-primary-color">
                READ MORE
              </a>
            </div>
          </div>

          <div className="w-full max-w-[25rem] py-10 md:py-0 border-y md:border-y-0 border-y-[#ffffff1a] md:border-x md:border-x-[#ffffff1a]">
            <div className="w-full max-w-[12.25rem] mx-auto">
              <div className="size-full mx-auto max-w-[6.125rem] max-h-[6.125rem]">
                <img src={DBSClearedDrivers} className="size-full" alt="DBS Cleared Drivers Image" />
              </div>
              <a href="#" className="mt-[2.1875rem] mb-[1.875rem] inline-block text-xl font-semibold leading-[1.5rem] duration-[0.4s] hover:text-primary-color">
                DBS Cleared Drivers
              </a>
              <p className="mb-5 text-[#B5B5B5] leading-[1.875rem]">Lorem ipsum dolor sit amet cons adipisci elit vehicula est non lac at quam.</p>
              <a href="#" className="text-xs font-semibold tracking-[0.15rem] leading-[2.125rem] duration-[0.4s] hover:text-primary-color">
                READ MORE
              </a>
            </div>
          </div>

          <div className="w-full max-w-[25rem]">
            <div className="w-full max-w-[12.25rem] mx-auto">
              <div className="size-full mx-auto max-w-[6.125rem] max-h-[6.125rem]">
                <img src={freeQuotation} className="size-full" alt="Free Quotation Image" />
              </div>
              <a href="#" className="mt-[2.1875rem] mb-[1.875rem] inline-block text-xl font-semibold leading-[1.5rem] duration-[0.4s] hover:text-primary-color">
                Free Quotation
              </a>
              <p className="mb-5 text-[#B5B5B5] leading-[1.875rem]">Lorem ipsum dolor sit amet cons adipisci elit vehicula est non lac at quam.</p>
              <a href="#" className="text-xs font-semibold tracking-[0.15rem] leading-[2.125rem] duration-[0.4s] hover:text-primary-color">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
