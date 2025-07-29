"use client";

import ForgotPasswordEmail from "./registrations/ForgotPasswordEmail";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import OtpScreen from "./registrations/OtpScreen";
import NewPassword from "./registrations/NewPassword";
import SuccessPage from "./registrations/SuccessPage";

const formSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character long." }),
  confirmPasswrod: z
    .string()
    .min(6, { message: "Password must be at least 6 character long." }),

  otpCode: z.string().min(5, { message: "Otp should be 5 character long" }),
});
const ForgottenPassword = () => {
  const [direction, setDirection] = useState(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPasswrod: "",
      otpCode: "",
    },
  });

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
    console.log(form.getValues());
  };

  return (
    <>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {currentIndex === 0 && (
            <ForgotPasswordEmail handleNext={handleNext} />
          )}
          {currentIndex === 1 && <OtpScreen handleNext={handleNext} />}
          {currentIndex === 2 && <NewPassword handleNext={handleNext} />}
          {currentIndex === 3 && (
            <SuccessPage title={"Your password has been reset!"} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ForgottenPassword;
