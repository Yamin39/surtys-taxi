const CallAgent = () => {
  return (
    <div className="bg-zigzag-animation relative pt-[7.5rem] pb-[9.875rem] bg-primary-color">
      <div className="flex gap-6 flex-col md:flex-row justify-between md:items-center max-w-[1440px] w-10/12 mx-auto">
        <div className="text-dark">
          <p className="font-bold leading-[1rem] ">Make a call or fill form</p>
          <h2 className="text-[3.125rem] font-bold tracking-[-0.125rem] leading-[3.75rem] mt-[0.9375rem]">Call our agent to get a quote.</h2>
        </div>

        <button className="w-fit font-semibold bg-dark text-white hover:text-dark text-lg rounded-[2.4375rem] py-[1.3438rem] px-[3.6875rem] duration-[.4s] hover:bg-white active:scale-90">
          Book Taxi Now
        </button>
      </div>
    </div>
  );
};

export default CallAgent;
