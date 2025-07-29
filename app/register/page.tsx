"use client";

import AccountSelection from "@/components/registrations/AccountSelection";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Form } from "@/components/ui/form";
import SignUpForm from "@/components/registrations/SignUpForm";
import LoginFrom from "@/components/registrations/LoginFrom";
import SuccessPage from "@/components/registrations/SuccessPage";
import useParamHook from "@/hooks/use-param-hook";
import ForgottenPassword from "@/components/ForgottenPassword";

const formSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: z.enum(["renter", "landlord"], {
    message: "Please select an account type",
  }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone number must be at least 11 digits long" }),
  fullName: z.string().min(3, { message: "Full name is required" }),
  rememberMe: z.boolean().optional(),
});
const RegistrationPage = () => {
  const { handleSearchParams, mode } = useParamHook();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "landlord",
      phoneNumber: "",
      fullName: "",
      rememberMe: false,
    },
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentLoginIndex, setCurrentLoginIndex] = useState<number>(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => prev + 1);
    // setCurrentLoginIndex((prev) => prev + 1);
    console.log(form.getValues());
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => prev - 1);
    // setCurrentLoginIndex((prev) => prev - 1);
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
        {(mode === "signup" || !mode) && (
          <div className="">
            {currentIndex === 0 && (
              <AccountSelection form={form} handleNext={handleNext} />
            )}
            {currentIndex === 1 && (
              <SignUpForm form={form} handleNext={handleNext} />
            )}
            {currentIndex === 3 && (
              <SuccessPage title={"Registration completed"} />
            )}
          </div>
        )}

        {mode === "login" && (
          <div className="text">{currentLoginIndex === 0 && <LoginFrom />}</div>
        )}

        {mode === "forgot-password" && (
          <div className="text">
            {currentIndex === 3 && (
              <ForgottenPassword  />
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
export default RegistrationPage;
