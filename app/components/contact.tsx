import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";

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
          await sendEmail(formData);
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
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 hover:bg-gray-950 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 active:scale-[1.02]"
        >
          Submit{" "}
          <FaPaperPlane className="text-md opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </section>
  );
}
