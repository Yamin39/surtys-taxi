import callIcon from "../../assets/images/call-icon.png";
import firstChoice1 from "../../assets/images/first-choice-img1.jpg";
import firstChoice2 from "../../assets/images/first-choice-img2.png";

const FirstChoice = () => {
  return (
    <div className="pt-[6.5625rem] pb-[7.5rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.75rem] text-center">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Welcome to Surtys Private Hire</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">
            Your first choice <br /> for traveling anywhere
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-[5.625rem]">
          <div className="md:w-[45%] 2xl:w-[40%] rounded-[0.625rem]">
            <img src={firstChoice1} alt="First Choice image 1" className="w-full md:h-full object-cover rounded-[0.625rem]" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="sm:max-h-[14.875rem] flex flex-col sm:flex-row rounded-[0.625rem] mb-[3.125rem] bg-[#F3F3F3]">
              <div className="sm:w-1/2 p-12">
                <p className="sm:max-w-[11.25rem] text-xl font-medium leading-[2.125rem]">We’re specialized in providing a high quality service</p>
              </div>
              <div className="sm:w-1/2 relative">
                <img
                  src={firstChoice2}
                  alt="First Choice image 2"
                  className="size-full object-cover rounded-b-[0.625rem] sm:rounded-bl-none sm:rounded-e-[0.625rem] brightness-75"
                />
              </div>
            </div>

            <p className="text-[#717171] leading-[2.125rem]">
              Our fleet of luxury executive cars and mini buses provide a great way to transport you around Gloucester. We have a wide range of vehicles for you
              to choose from and we are happy to accommodate a variety of mini bus hire contracts in and around the area. All of our vehicles are clean safe and
              comfortable and are periodically maintained to ensure we provide you with the best service.
            </p>

            <div className="mt-[3.4375rem] mb-[3.75rem] border-t-[0.125rem] bg-[#F3F3F3]"></div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 items-center justify-between">
              <div className="max-w-[18.125rem] flex gap-5 items-center">
                <div className="max-w-[3.9375rem] max-h-[3.9375rem]">
                  <img src={callIcon} alt="Call icon" className="size-full" />
                </div>
                <p className="text-secondary-color leading-7">Call us now and make your booking</p>
              </div>

              <h1 className="text-dark text-[1.875rem] font-bold tracking-[-0.075rem] leading-[2.125rem]">
                <a className="duration-300 hover:text-primary-color" href="tel:01452537993" title="Phone number">
                  01452 537993
                </a>{" "}
                <br />
                <a className="duration-300 hover:text-primary-color" href="tel:07980811427" title="Mobile number">
                  07980 811 427
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstChoice;
