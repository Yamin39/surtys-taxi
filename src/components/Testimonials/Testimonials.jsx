/* eslint-disable react/prop-types */
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import defaultReviewer from "../../assets/images/default-reviewer.png";
import MohammedS145 from "../../assets/images/MohammedS-145.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      img: MohammedS145,
      review:
        "Comeptative , kind , friendly and punctual with great communication from start to finish. A What more do you need? Highly recommended for a great all round experience. A man who takes pride in his work and makes his customers the number one priority. Highly recommended.,Excellent service with very competitive prices , very friendly too. Timekeeping is spot on with great communication, a man who takes pride in his work would highly recommend.",
      name: "MohammedS-145",
    },
    {
      id: 2,
      img: null,
      review: "Great all round service from booking to pick up, always on time and would definitely recommend this service.",
      name: "WayneB-190",
    },
    {
      id: 3,
      img: null,
      review:
        "An excellent service, very friendly and usually dead on time. If he is going to be three or four minutes late he rings to let you know. We will continue to use him regularly.",
      name: "DavidT-750",
    },
    {
      id: 4,
      img: null,
      review: "Great service. Would use again.",
      name: "OwaisB-1",
    },
    {
      id: 5,
      img: null,
      review: "A very reliable and punctual service. will deffo be using them again.",
      name: "KhadijaD",
    },
    {
      id: 6,
      img: null,
      review: "Perfect time keeping, professional transportation with modern technology and we are always greeted with a friendly smile. Well recommended!",
      name: "MohamedN-5",
    },
    {
      id: 7,
      img: null,
      review:
        "Great service. Very professional driver and courteous. Arrived on time and had a comfortable journey. I would recommend him to others. Fare prices.",
      name: "BilalP-2",
    },
    {
      id: 8,
      img: null,
      review:
        "Great service, Ismail got our whole party to our destination on time and really helped us out. We booked very last minute and he managed to fit us in. Will definitely book with them again.",
      name: "YanC-2",
    },
  ];
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
          }, 500000);
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
              {reviews.map((review) => (
                <div key={review?.id} className="keen-slider__slide">
                  <TestimonialsComponent review={review} />
                </div>
              ))}
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
        props.left ? "arrow--left-testi" : "arrow--right-testi"
      } ${disabled}`}
    >
      {props.left && <IoIosArrowRoundBack className="btn-arr-child relative -right-2 md:-right-4" />}
      {!props.left && <IoIosArrowRoundForward className="btn-arr-child relative -left-2 md:-left-4" />}
    </button>
  );
}

function TestimonialsComponent({ review }) {
  const { img, review: reviewText, name } = review;
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto">
      <div className="text-white text-center">
        <img src={img ? img : defaultReviewer} alt="reviewer photo" className="size-[5rem] mx-auto object-cover rounded-full mb-[3.125rem]" />
        <p className="md:max-w-[59.375rem] mx-auto text-[1.875rem] leading-[3.125rem] font-semibold">{reviewText}</p>
        <p className="mt-[2.1875rem] text-primary-color text-xl font-semibold">{name}</p>
      </div>
    </div>
  );
}
