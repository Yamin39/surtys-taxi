import CountUp from "react-countup";
import happy from "../../assets/images/happy.png";
import meter from "../../assets/images/meter.png";
import people from "../../assets/images/people.png";
import taxi from "../../assets/images/taxi.png";
import "./NumbersSpeak.css";

const NumbersSpeak = () => {
  return (
    <div className="pt-[6.625rem] pb-[5.625rem] bg-[#F3F3F3]">
      <div className="max-w-[1440px] w-10/12 mx-auto text-center">
        <div className="mb-[3.75rem]">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Our fun facts</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">Numbers speak</h1>
        </div>

        <div className="mb-[1.875rem] grid gap-7 sm:grid-cols-2 md:grid-cols-4">
          {/* KM Driven */}
          <div className="stat-cards bg-white p-[3.4375rem] rounded-[0.625rem]">
            <div className="max-w-[3.75rem] max-h-[3.75rem] mx-auto">
              <img src={meter} className="size-full" alt="Meter icon" />
            </div>
            <h1 className="text-dark text-[3.75rem] font-bold tracking-[-0.15rem]">
              <CountUp end={8700} duration={4} separator="" enableScrollSpy scrollSpyOnce></CountUp>
            </h1>
            <p className="font-medium text-[#717171]">KM Driven</p>
          </div>

          {/* People Dropped */}
          <div className="stat-cards bg-white p-[3.4375rem] rounded-[0.625rem]">
            <div className="max-w-[3.75rem] max-h-[3.75rem] mx-auto">
              <img src={people} className="size-full" alt="people icon" />
            </div>
            <h1 className="text-dark text-[3.75rem] font-bold tracking-[-0.15rem]">
              <CountUp end={4978} duration={4} separator="" enableScrollSpy scrollSpyOnce></CountUp>
            </h1>
            <p className="font-medium text-[#717171]">People Dropped</p>
          </div>

          {/* Taxis & Drivers */}
          <div className="stat-cards bg-white p-[3.4375rem] rounded-[0.625rem]">
            <div className="max-w-[3.75rem] max-h-[3.75rem] mx-auto">
              <img src={taxi} className="size-full" alt="taxi icon" />
            </div>
            <h1 className="text-dark text-[3.75rem] font-bold tracking-[-0.15rem]">
              <CountUp end={800} duration={4} separator="" enableScrollSpy scrollSpyOnce></CountUp>
            </h1>
            <p className="font-medium text-[#717171]">Taxis & Drivers</p>
          </div>

          {/* Happy People */}
          <div className="stat-cards bg-white p-[3.4375rem] rounded-[0.625rem]">
            <div className="max-w-[3.75rem] max-h-[3.75rem] mx-auto">
              <img src={happy} className="size-full" alt="happy icon" />
            </div>
            <h1 className="text-dark text-[3.75rem] font-bold tracking-[-0.15rem]">
              <CountUp end={2480} duration={4} separator="" enableScrollSpy scrollSpyOnce></CountUp>
            </h1>
            <p className="font-medium text-[#717171]">Happy People</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersSpeak;
