/* eslint-disable react/prop-types */
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import reviewer from "../../assets/images/reviewer.jpg";
import "./Testimonials.css";

const Testimonials = () => {
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
      vertical: false,
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
          }, 5000);
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
    <div className="testimonials-container pt-[6.5625rem] pb-[7.1875rem] bg-dark">
      <div className="text-center text-white relative">
        <div className="mb-[3.75rem]">
          <span className="inline-block size-2 rounded-full bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem]">Latest Reviews</p>
          <h1 className="text-[3.4rem] sm:text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold">Testimonials</h1>
        </div>

        <div>
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1" style={{ backgroundImage: "none" }}>
                <TestimonialsComponent />
              </div>
              <div className="keen-slider__slide number-slide2" style={{ backgroundImage: "none" }}>
                <TestimonialsComponent />
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
      </div>
    </div>
  );
};

export default Testimonials;

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

function TestimonialsComponent() {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto">
      <div className="text-white text-center">
        <img src={reviewer} alt="reviewer photo" className="size-[5rem] mx-auto object-cover rounded-full mb-[3.125rem]" />
        <p className="md:max-w-[59.375rem] mx-auto text-[1.875rem] leading-[3.125rem] font-semibold">
          This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.
        </p>
        <p className="mt-[2.1875rem] text-primary-color text-xl font-semibold">Shana Druckman</p>
      </div>
    </div>
  );
}
