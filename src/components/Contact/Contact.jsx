import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // console.log(form.current);
    // toast.error("Failed to submit form. Please try again");
    // return;

    emailjs
      .sendForm("service_n43vlgk", "template_up2stin", form.current, {
        publicKey: "T8X0XGCdAR1bWVMwA",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Form submitted successfully.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to submit form. Please try again");
        }
      );
  };
  return (
    <div id="contact" className="pt-[6.5625rem] pb-[7.5rem]">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="mb-[3.55rem] text-center">
          <span className="inline-block size-2 rounded-[3.125rem] bg-primary-color mt-1"></span>
          <p className="font-semibold leading-[2.125rem] text-[#717171]">Contact with us now</p>
          <h1 className="text-[3.75rem] tracking-[-0.15rem] leading-[4.5rem] font-bold text-dark">Leave message</h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex-1 space-y-7 max-w-[42rem] mx-auto">
          <div className="flex flex-col md:flex-row gap-7 md:gap-8 items-center">
            {/* name */}
            <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#F3F3F3] text-secondary-color placeholder:text-secondary-color font-semibold rounded-[3.125rem] py-6 px-10">
              <input id="name-input" type="text" placeholder="Name" name="name" className="bg-transparent w-full outline-none" required />
            </div>

            {/* email */}
            <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#F3F3F3] text-secondary-color placeholder:text-secondary-color font-semibold rounded-[3.125rem] py-6 px-10">
              <input type="email" placeholder="Email address" name="email" className="bg-transparent w-full outline-none" required />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-7 md:gap-8 items-center">
            {/* phone */}
            <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#F3F3F3] text-secondary-color placeholder:text-secondary-color font-semibold rounded-[3.125rem] py-6 px-10">
              <input type="number" placeholder="Phone" name="phone" className="bg-transparent w-full outline-none" required />
            </div>

            {/* subject */}
            <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#F3F3F3] text-secondary-color placeholder:text-secondary-color font-semibold rounded-[3.125rem] py-6 px-10">
              <input type="text" placeholder="Subject" name="subject" className="bg-transparent w-full outline-none" required />
            </div>
          </div>

          {/* Message */}
          <div className="w-full h-fit mx-auto flex items-center gap-3 text-sm bg-[#F3F3F3] text-secondary-color placeholder:text-secondary-color font-semibold rounded-[3.125rem] p-10">
            <textarea rows={7} placeholder="Write message" name="message" className="bg-transparent w-full outline-none" required />
          </div>
          <button className="font-semibold bg-primary-color text-dark text-lg rounded-[2.4375rem] mx-auto block py-5 px-[4rem] duration-[.4s] hover:bg-white active:scale-90 hover:border-black hover:border">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
