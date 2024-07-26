const CallNowBottom = () => {
  return (
    <div className="bg-zigzag-animation relative py-[7.5rem] bg-primary-color">
      <div className="text-dark max-w-[1440px] w-10/12 mx-auto text-center">
        <p className="font-semibold leading-[1rem]">Call 24 hour service available</p>
        <h1 className="w-full max-w-[42.5rem] inline-block mt-[0.9375rem] mb-[3.75rem] text-[3.75rem] font-bold tracking-[-0.15rem] leading-[4.5rem]">
          Call now and book our taxi for your next ride
        </h1>
        <button
          onClick={() => {
            document.getElementById("name-input").focus();
            document.getElementById("book-now")?.scrollIntoView();
          }}
          className="block mx-auto w-fit font-semibold bg-dark text-white hover:text-dark text-lg rounded-[2.4375rem] py-[1.3438rem] px-[3.6875rem] duration-[.4s] hover:bg-white active:scale-90"
        >
          Choose Your Taxi
        </button>
      </div>
    </div>
  );
};

export default CallNowBottom;
