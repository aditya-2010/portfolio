"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_APY_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // if (validateString(senderEmail, 100)) {
  //   console.log("Invalid email");

  //   return { error: "Invalid Sender Email" };
  // }

  // if (validateString(message, 500)) {
  //   console.log("Invalid message");

  //   return { error: "Invalid Sender message" };
  // }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "adityanakadi3@gmail.com",
      subject: `Message from ${senderEmail}`,
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
