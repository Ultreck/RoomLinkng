"use client";

import AccountSelection from "@/components/register/AccountSelection";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Form } from "@/components/ui/form";
import SignUpForm from "@/components/register/SignUpForm";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  confirmPassword: z
    .string()
    .min(6, { message: "Confirm Password must be at least 6 characters long" }),
  accountType: z.enum(["renter", "landlord"], {
    message: "Please select an account type",
  }),
});
const RegistrationPage = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "",
      phoneNumber: "",
      fullName: "",
      rememberMe: false,
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => prev - 1);
  };

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


  return (
    <AnimatePresence custom={direction} mode="wait">
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="">
        <SignUpForm form={form} handleNext={handleNext} />
          {/* <AccountSelection handleNext={handleNext} handlePrev={handlePrev} /> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default RegistrationPage;
