import Lottie from "lottie-react";
import scroll from "../../assets/animations/scroll.json";
import taxiBlack from "../../assets/images/taxi-black.png";

const TaxiFares = () => {
  const rates = [
    {
      mile: "1",
      rateOne: "£5.20",
      rateTwo: "£6.60",
      rateThree: "£7.40",
    },
    {
      mile: "2",
      rateOne: "£7.40",
      rateTwo: "£9.40",
      rateThree: "£11.00",
    },
    {
      mile: "3",
      rateOne: "£9.80",
      rateTwo: "£12.40",
      rateThree: "£14.40",
    },
    {
      mile: "4",
      rateOne: "£12.20",
      rateTwo: "£15.40",
      rateThree: "£17.80",
    },
    {
      mile: "5",
      rateOne: "£14.40",
      rateTwo: "£18.40",
      rateThree: "£21.40",
    },
    {
      mile: "6",
      rateOne: "£16.80",
      rateTwo: "£21.40",
      rateThree: "£24.80",
    },
    {
      mile: "7",
      rateOne: "£19.20",
      rateTwo: "£24.40",
      rateThree: "£28.40",
    },
    {
      mile: "8",
      rateOne: "£21.40",
      rateTwo: "£27.40",
      rateThree: "£31.80",
    },
    {
      mile: "9",
      rateOne: "£23.80",
      rateTwo: "£30.40",
      rateThree: "£35.40",
    },
    {
      mile: "10",
      rateOne: "£26.20",
      rateTwo: "£33.40",
      rateThree: "£38.80",
    },
  ];
  return (
    <div className="pt-[6.5625rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.75rem] text-center">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Our all taxi rates</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">Check taxi fares</h1>
        </div>

        <div className="mb-12">
          <div className="stat-cards bg-primary-color p-[3rem] md:p-[6.25rem] rounded-[0.625rem]">
            <div className="flex items-center gap-5 pb-16">
              <div className="size-full max-w-[4rem] max-h-[4rem]">
                <img src={taxiBlack} className="size-full" alt="Taxi black icon" />
              </div>
              <div>
                <h3 className="text-dark text-[1.875rem] font-bold tracking-[-0.075rem] leading-[2.25rem]">All taxi fares</h3>
                <p className="font-medium leading-[1.625rem] mt-1">View Complete Taxi Fare Information.</p>
              </div>
            </div>

            <div className="mb-12 space-y-5">
              <div>
                <div>
                  <a className="mb-2 inline-block text-xl font-semibold leading-[1.5rem]">Rate One</a>
                  <p className="leading-[1.875rem]">Between 7:00am and 9:00pm Monday to Saturday</p>
                </div>
              </div>

              <div className="py-10 md:py-0">
                <div>
                  <a className="mb-2 inline-block text-xl font-semibold leading-[1.5rem]">Rate Two</a>
                  <p className="leading-[1.875rem]">
                    Between 9:00pm and 7:00am Monday to Saturday, all day Sundays and between 6:00pm and 11:00pm on Xmas Eve and New Year&apos;s Eve
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <a className="mb-2 inline-block text-xl font-semibold leading-[1.5rem]">Rate Three</a>
                  <p className="leading-[1.875rem]">
                    Between 11:00pm on the day before and 7:00am on the morning following each and every PUBLIC HOLIDAY, Good Friday, Easter Sunday, Easter
                    Monday, Early May Bank Holiday, Spring Bank Holiday, Summer Bank Holiday, Christmas Day, Boxing Day & New Year&apos;s Day
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-xs md:text-base text-left rtl:text-right text-dark">
                <thead className="text-dark uppercase bg-[#ffffff2a]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Journey (Miles)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Rate One
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Rate Two
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Rate Three
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-transparent even:bg-[#ffffff23]">
                    <td className="px-6 py-4 font-semibold">Flag</td>
                    <td className="px-6 py-4 font-semibold">£3.00</td>
                    <td className="px-6 py-4 font-semibold">£4.00</td>
                    <td className="px-6 py-4 font-semibold">£5.00</td>
                  </tr>
                  {rates.map((rate, index) => (
                    <tr key={index} className="odd:bg-transparent even:bg-[#ffffff23]">
                      <td className="px-6 py-4">{rate.mile}</td>
                      <td className="px-6 py-4">{rate.rateOne}</td>
                      <td className="px-6 py-4">{rate.rateTwo}</td>
                      <td className="px-6 py-4">{rate.rateThree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mx-auto mt-1 w-2 rotate-90 flex sm:hidden justify-center items-center" title="Scroll the table horizontally">
              <Lottie className="max-w-[18rem]" animationData={scroll} />
            </div>

            <div className="w-fit mx-auto mt-10">
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
          Surty’s Private Hire is located in Gloucester but are happy to travel wherever you want to go. For a quote, journey plan or to discuss sightseeing
          trips or events, simply call or email and we will be delighted to help.
        </p>
      </div>
    </div>
  );
};

export default TaxiFares;
