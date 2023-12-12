"use server";

import { Resend } from "resend";
// import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_APY_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // if (validateString(senderEmail, 100))
  //   return { error: "Invalid Sender Email" };

  // if (validateString(message, 500)) return { error: "Invalid Sender message" };

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "adityanakadi3@gmail.com",
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    console.log(error);
  }
};
