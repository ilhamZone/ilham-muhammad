"use server";
import { EmailTemplate } from "@/components/EmailTamplate";
import { Resend } from "resend";

export const actionSend = async (formData: FormData) => {
  const { name, email, message } = Object.fromEntries(formData) as any;
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    subject: "Job Offer",
    to: "iam.mhd07@gmail.com",
    react: EmailTemplate({
      email: email || "",
      name: name ?? "",
      message: message ?? "",
    }),
  } as any);

  if (error) {
    return { status: 500, message: error.message };
  }
  console.log("RUNNING SENDING EMAIL...................");
  return {
    status: 200,
    message: "Email sent... I'll respond as soon as possible.",
  };
};
