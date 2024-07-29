import aboutImg from "../../assets/images/aboutImg.jpg";

const AboutUs = () => {
  return (
    <div id="about" className="pt-[8.5625rem] pb-[10.875rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.75rem] text-center">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Few words about us</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">
            Learn about our <br className="hidden sm:block" /> taxi company
          </h1>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-20 md:gap-10 items-center justify-around">
          <div className="md:max-w-[40%]">
            <div className="relative rounded-[0.625rem] p-[0.375rem]">
              <img className="w-full relative z-[2] rounded-[0.625rem]" src={aboutImg} alt="aboutImg" />
            </div>
          </div>

          <div className="md:max-w-[50%] w-full border-l-[1rem] border-l-primary-color px-10 py-5">
            <p className="mt-5 text-sm sm:text-base leading-[1.8] sm:leading-[1.85]">
              Surty’s Private Hire operates a range of vehicles offering 4 to 16 seaters, storage and reliability as well as cleanliness and safety. We are
              relied on by regular clients for both business and pleasure. Our reputation is built on being professional and knowing what our clients needs. All
              our experienced staff are DBS Checked, First Aid trained and of the highest standard. We plan your journey to ensure you meet your obligations –
              reliability comes as standard at Surty’s Private Hire.
              <br />
              <br />
              Our prices are competitive and represent excellent value for money. Every job is priced according to the individual requirements, so please don’t
              hesitate to call and ask for a quote, we will be happy to help.
              <br />
              <br />
              We can tailor our service to meet your transport need, simply call or email for a journey plan and quote that will set your mind at ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
