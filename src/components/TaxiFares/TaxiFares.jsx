import taxiBlack from "../../assets/images/taxi-black.png";

const TaxiFares = () => {
  return (
    <div className="pt-[6.5625rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.75rem] text-center">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Our all taxi rates</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">Check taxi fares</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-[1.875rem] justify-center mb-12">
          <div className="stat-cards md:w-1/2 bg-primary-color p-[3rem] sm:p-[6.25rem] rounded-[0.625rem]">
            <div className="flex gap-5">
              <div className="size-full mx-auto max-w-[4rem] max-h-[4rem]">
                <img src={taxiBlack} className="size-full" alt="Taxi black icon" />
              </div>
              <div>
                <h3 className="text-dark text-[1.875rem] font-bold tracking-[-0.075rem] leading-[2.25rem]">All taxi fares</h3>
                <p className="font-medium leading-[1.625rem] mt-1">Lorem ipsum dolor sit amet cons adipisci elit.</p>
              </div>
            </div>

            <ul className="mt-10 mb-[1.875rem] pt-[1.875rem] border-t-[0.1rem] border-t-[#1111111a] leading-[2.125rem] text-dark font-medium">
              <li className="flex justify-between gap-2">
                <span>Initial charge:</span>
                <strong>£2.50</strong>
              </li>
              <li className="flex justify-between gap-2">
                <span>Additional Kilometre:</span>
                <strong>£0.50</strong>
              </li>
              <li className="flex justify-between gap-2">
                <span>Per 2 minutes in stopped traffic:</span>
                <strong>£0.66</strong>
              </li>
            </ul>

            <div className="w-fit mx-auto">
              <button
                onClick={() => {
                  document.getElementById("name-input").focus();
                  document.getElementById("book-now")?.scrollIntoView();
                }}
                className="w-fit font-semibold bg-dark text-white hover:text-dark text-lg rounded-[2.4375rem] py-[1rem] px-[3.6875rem] duration-[.4s] hover:bg-white active:scale-90"
              >
                Order Taxi Now
              </button>
            </div>
          </div>

          <div className="stat-cards md:w-1/2 bg-primary-color p-[3rem] sm:p-[6.25rem] rounded-[0.625rem]">
            <div className="flex gap-5">
              <div className="size-full mx-auto max-w-[4rem] max-h-[4rem]">
                <img src={taxiBlack} className="size-full" alt="Taxi black icon" />
              </div>
              <div>
                <h3 className="text-dark text-[1.875rem] font-bold tracking-[-0.075rem] leading-[2.25rem]">Additional fares</h3>
                <p className="font-medium leading-[1.625rem] mt-1">Lorem ipsum dolor sit amet cons adipisci elit.</p>
              </div>
            </div>

            <ul className="mt-10 mb-[1.875rem] pt-[1.875rem] border-t-[0.1rem] border-t-[#1111111a] leading-[2.125rem] text-dark font-medium">
              <li className="flex justify-between gap-2">
                <span>One hour of waiting:</span>
                <strong>£8.00</strong>
              </li>
              <li className="flex justify-between gap-2">
                <span>4pm to 8pm weekday surcharge:</span>
                <strong>£2.00</strong>
              </li>
              <li className="flex justify-between gap-2">
                <span>8pm to 6am night surcharge:</span>
                <strong>£3.00</strong>
              </li>
            </ul>

            <div className="w-fit mx-auto">
              <button
                onClick={() => {
                  document.getElementById("name-input").focus();
                  document.getElementById("book-now")?.scrollIntoView();
                }}
                className="w-fit font-semibold bg-dark text-white hover:text-dark text-lg rounded-[2.4375rem] py-[1rem] px-[3.6875rem] duration-[.4s] hover:bg-white active:scale-90"
              >
                Order Taxi Now
              </button>
            </div>
          </div>
        </div>

        <p className="w-full max-w-[43.75rem] mx-auto text-center text-[#717171] leading-[2.125rem]">
          There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or random
          words which.
        </p>
      </div>
    </div>
  );
};

export default TaxiFares;
