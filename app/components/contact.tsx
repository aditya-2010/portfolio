import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 w-[min(100%),38rem]"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:adityanakadi3@gmail.com">
          adityanakadi3@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error, { duration: 5000 });
            return;
          }
          toast.success("Message sent succesfully!\nThank you 😉", {
            duration: 5000,
          });
        }}
        className="mt-10 flex flex-col"
      >
        <input
          required
          name="senderEmail"
          type="email"
          className="h-14 p-4 rounded-lg borderBlack focus:outline-black/30"
          maxLength={100}
          placeholder="Your Email"
        />
        <textarea
          required
          name="message"
          maxLength={500}
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-black/30"
          placeholder="Your message"
        ></textarea>
        <SubmitBtn />
      </form>
    </section>
  );
}
