"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { InputWithLabel } from "./Input";
import { Button } from "./ui/button";
import { actionSend } from "@/utils/actions";
import { useEffect, useRef, useState } from "react";
import { useToast } from "./ui/use-toast";

const FormContact = () => {
  const ref = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [attempts, setAttempts] = useState(0);
  const [manyAttempts, setManyAttempts] = useState(false);

  useEffect(() => {
    if (attempts >= 2) {
      setManyAttempts(true);
    }

    const timer = setTimeout(() => {
      setManyAttempts(false);
      setAttempts(0);
    }, 30000);
    return () => clearTimeout(timer);
  }, [attempts]);

  const submitForm = async (formData: FormData) => {
    const response = manyAttempts ? null : await actionSend(formData);
    setAttempts((prevStat) => prevStat + 1);
    if (manyAttempts) {
      toast({
        title: "To many requests, please try again later",
        variant: "destructive",
      });
      return;
    } else if (response?.status === 200) {
      toast({
        title: response.message,
      });
      ref.current?.reset();
    } else {
      toast({
        title: response?.message,
        variant: "destructive",
      });
    }
  };

  return (
    <form ref={ref} action={submitForm}>
      <div className="flex flex-col gap-y-6">
        <InputWithLabel
          name="name"
          label="Name"
          type="text"
          required
          placeholder="Enter your name"
        />
        <InputWithLabel
          name="email"
          label="Email"
          type="email"
          required
          placeholder="Enter your email"
        />
        <InputWithLabel
          name="message"
          label="Write your message"
          type="textarea"
          required
          placeholder="Enter your message"
        />
        <Button type="submit" className="max-w-12 float-end">
          Send <FaArrowRightLong className="ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default FormContact;
