/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "./Banner.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 0,
      },
      vertical: window.innerWidth > 768 ? true : false,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        }
        slider.on("created", () => {
          // this is to stop autoplay when the mouse enters the slider
          //   slider.container.addEventListener("mouseover", () => {
          //     mouseOver = true;
          //     clearNextTimeout();
          //   });

          // this is to start autoplay when the mouse leaves the slider
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div>
      <div className="relative navigation-wrapper">
        <div ref={sliderRef} className="keen-slider h-[40rem] sm:h-[62.0625rem] max-h-[993px]">
          <div className="keen-slider__slide number-slide1">
            <BannerComponent />
          </div>
          <div className="keen-slider__slide number-slide2">
            <BannerComponent />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <button
      onClick={props.onClick}
      className={`btn-arr border-[0.125rem] text-3xl sm:text-4xl md:text-6xl border-white text-white rounded-full arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
    >
      {props.left && <IoIosArrowRoundBack className="btn-arr-child relative -right-2 md:-right-4" />}
      {!props.left && <IoIosArrowRoundForward className="btn-arr-child relative -left-2 md:-left-4" />}
    </button>
  );
}

function BannerComponent() {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto flex flex-col justify-center items-center h-full sm:pt-[7.5rem] md:pt-[17.5rem]">
      <div className="text-white text-center">
        <motion.h1
          className="md:max-w-[60.625rem] mx-auto text-[3.125rem] md:text-[5.625rem] font-bold leading-[3.75rem] md:leading-[6.25rem] tracking-[-0.02rem]"
          variants={{
            initial: {
              opacity: 0,
              y: -100,
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
          whileInView="animate"
        >
          Your Trusted Private Hire Company
        </motion.h1>
        <motion.p
          className="md:max-w-[31.25rem] text-[#cacaca] mx-auto text-xl md:text-[1.875rem] leading-7 md:leading-[2.5rem] font-medium mt-[2.6875rem] mb-10"
          variants={{
            initial: {
              opacity: 0,
              y: 100,
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
          whileInView="animate"
        >
          Enjoy a comfortable trip with surtys private hire
        </motion.p>
        <motion.button
          onClick={() => {
            document.getElementById("name-input").focus();
            document.getElementById("book-now")?.scrollIntoView();
          }}
          className="font-semibold bg-primary-color text-dark text-lg rounded-[2.4375rem] py-[1.3438rem] px-[3.6875rem] duration-[.4s] hover:bg-white active:scale-90"
          variants={{
            initial: {
              opacity: 0,
              y: -50,
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
}
