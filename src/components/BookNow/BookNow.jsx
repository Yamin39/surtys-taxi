import { FaRegClock } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const BookNow = () => {
  return (
    <section id="book-now" className="bg-zigzag-animation relative pt-[7.5rem] pb-[7.375rem] bg-dark text-white">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1440px] w-10/12 mx-auto">
        <div className="md:max-w-[29%]">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem]">Need a private hire?</p>
          <h1 className="text-[3.75rem] tracking-[-0.04rem] leading-[4.5rem] font-bold">Make your booking</h1>
          <p className="font-medium mt-5 md:mt-[2.25rem] leading-[2.125rem] text-[#B5B5B5]">
            We provide an excellent, safe and professional service to our our customers.
          </p>
        </div>
        <form className="flex-1 grid gap-5 grid-cols-1 sm:grid-cols-2">
          {/* name */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#cfcfcf] font-semibold rounded-full py-6 px-10">
            <input id="name-input" type="text" placeholder="Name" name="name" className="bg-transparent w-full outline-none" required />
          </div>

          {/* email */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#cfcfcf] font-semibold rounded-full py-6 px-10">
            <input type="email" placeholder="Email" name="email" className="bg-transparent w-full outline-none" required />
          </div>

          {/* passengers */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#cfcfcf] font-semibold rounded-full py-6 px-10">
            <input type="number" placeholder="Passengers #" name="passengers" className="bg-transparent w-full outline-none" required />
          </div>

          {/* pick up address */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#cfcfcf] font-semibold rounded-full py-6 px-10">
            <input type="text" placeholder="Pick up address" name="pickUpAddress" className="bg-transparent w-full outline-none" required />
          </div>

          {/* drop off address */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#cfcfcf] font-semibold rounded-full py-6 px-10">
            <input type="text" placeholder="Drop off address" name="dropOffAddress" className="bg-transparent w-full outline-none" required />
          </div>

          {/* select date */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#cfcfcf] font-semibold rounded-full py-6 px-10">
            <input type="text" placeholder="Select date" name="selectDate" className="bg-transparent w-full outline-none" required />
            <MdDateRange className="text-xl text-primary-color" />
          </div>

          {/* select time */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#242424] text-[#b5b5b5] font-semibold rounded-full py-6 px-10">
            <select name="role" defaultValue="default" className="w-full bg-transparent mx-auto gap-3 text-base outline-none cursor-pointer">
              <option disabled value="default">
                Select Time
              </option>
              <option value="10AM-10.59AM">10AM-10.59AM</option>
              <option value="12PM-12.59PM">12PM-12.59PM</option>
              <option value="1PM-1.59PM">1PM-1.59PM</option>
              <option value="2PM-2.59PM">2PM-2.59PM</option>
            </select>
            <FaRegClock className="text-xl text-primary-color" />
          </div>

          <button className="font-semibold bg-primary-color text-dark text-lg rounded-[2.4375rem] py-4 px-[3.6875rem] duration-[.4s] hover:bg-white active:scale-90">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookNow;
