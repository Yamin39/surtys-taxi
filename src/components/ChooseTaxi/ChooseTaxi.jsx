import { motion } from "framer-motion";
import { useState } from "react";
import bmwLogo from "../../assets/images/bmw-logo.png";
import fordLogo from "../../assets/images/ford-logo.png";
import mercedesLogo from "../../assets/images/mercedes-logo.png";
import taxi1 from "../../assets/images/taxi-1.jpg";
import taxi2 from "../../assets/images/taxi-2.jpg";
import taxi3 from "../../assets/images/taxi-3.jpg";
import taxi4 from "../../assets/images/taxi-4.jpg";
import "./ChooseTaxi.css";

const ChooseTaxi = () => {
  const allTaxi = [
    // Hybrid taxi
    {
      id: 1,
      taxiImg: taxi1,
      logo: fordLogo,
      model: "Ford S-MAX",
      baseRate: 4.3,
      PerMileOrKM: 2.0,
      passengers: 6,
      category: "Hybrid taxi",
    },

    // Sedan
    {
      id: 2,
      taxiImg: taxi2,
      logo: mercedesLogo,
      model: "Mercedes Sedan",
      baseRate: 4.3,
      PerMileOrKM: 2.0,
      passengers: 4,
      category: "Sedan",
    },
    {
      id: 3,
      taxiImg: taxi3,
      logo: bmwLogo,
      model: "BMW Sedan",
      baseRate: 4.3,
      PerMileOrKM: 2.0,
      passengers: 4,
      category: "Sedan",
    },

    // Van
    {
      id: 4,
      taxiImg: taxi4,
      logo: mercedesLogo,
      model: "Mercedes Van",
      baseRate: 4.3,
      PerMileOrKM: 2.0,
      passengers: 8,
      category: "Van",
    },
  ];

  const allCategories = ["All", ...new Set(allTaxi.map((taxi) => taxi.category))];

  const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

  const selectedTaxiData = selectedCategory === "All" ? allTaxi : allTaxi.filter((taxi) => taxi.category === selectedCategory);

  console.log(selectedTaxiData);

  return (
    <div className="pt-[6.5625rem] pb-[7.5rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.75rem] text-center">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Our best cars</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">Choose taxi</h1>
        </div>

        <div className="flex gap-3 flex-wrap md:flex-nowrap justify-center items-center mb-[3.75rem]">
          {allCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(category)}
              className={`py-[0.0938rem] px-8 rounded-[1.1563rem] ${
                category === selectedCategory ? "bg-primary-color text-dark font-bold" : "bg-[#F3F3F3] text-secondary-color font-semibold"
              } text-xs leading-[2.125rem] tracking-[0.15rem]  uppercase duration-300 hover:bg-primary-color active:scale-90 hover:text-dark hover:font-bold`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="w-fit mx-auto flex flex-wrap justify-center md:justify-start gap-[1.875rem]">
          {selectedTaxiData.map((taxi) => (
            <motion.div
              key={taxi?.id}
              className="taxi-card relative w-full max-w-[23.125rem] border-[0.125rem] border-[#f3f3f3] rounded-[0.625rem] py-[3.125rem] duration-300"
              variants={{
                initial: {
                  opacity: 0,
                  y: 10,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                },
              }}
              initial="initial"
              animate="animate"
            >
              <div className="flex flex-col justify-center w-full min-h-[12.0625rem] max-w-[18.4375rem] mx-auto">
                <img src={taxi?.taxiImg} alt={`${taxi?.model} image`} className="w-full" />
              </div>

              <div className="w-full max-w-[6.1875rem] mx-auto my-2">
                <img src={taxi?.logo} alt="Brand logo" className="w-full" />
              </div>

              <div className="mt-[1.5625rem] px-[4.375rem]">
                <h3 className="mb-[0.9375rem] text-dark text-xl font-bold text-center leading-6">{taxi?.model}</h3>
                <ul className="text-secondary-color leading-[2.125rem] ">
                  <li className="flex gap-4 justify-between items-center">
                    <span>Base Rate:</span> <span className="font-semibold">£{taxi?.baseRate}</span>
                  </li>
                  <li className="flex gap-4 justify-between items-center">
                    <span>Per Mile/KM:</span> <span className="font-semibold">£{taxi?.PerMileOrKM}</span>
                  </li>
                  <li className="flex gap-4 justify-between items-center">
                    <span>Passengers:</span> <span className="font-semibold">{taxi?.passengers}</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    document.getElementById("name-input").focus();
                    document.getElementById("book-now")?.scrollIntoView();
                  }}
                  className="taxi-card-btn relative z-10 w-full p-3 px-10 mt-[1.875rem] rounded-[1.8125rem] bg-[#F3F3F3] text-secondary-color font-semibold leading-[2.125rem] duration-300 active:scale-90"
                >
                  Book Taxi
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseTaxi;
