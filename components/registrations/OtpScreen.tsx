"use client";

import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader } from "lucide-react";
import useParamHook from "@/hooks/use-param-hook";
import Link from "next/link";

type handleNextProps = {
  handleNext: () => void;
};
const OtpScreen = ({ handleNext }: handleNextProps) => {
  const { handleSearchParams } = useParamHook();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    console.log("Submitted OTP:", otp);
    setTimeout(() => {
      handleNext();
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="w-2/3 mx-auto mt-20 text-center space-y-6">
      <div>
        <h2 className="text-xl text-start font-bold">Password Reset</h2>
        <p className="text-sm text-start mt-2">
          We will send a code to <strong>ojoilyan0@gmail.com</strong>
        </p>
      </div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={5}
        renderInput={(props) => (
          <input
            {...props}
            style={{
              width: "5rem",
              height: "5rem",
              fontSize: "2.8rem",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "0.375rem",
            }}
            className="font-bold focus-visible:ring-1 focus-visible:ring-green-700 focus:outline-none"
          />
        )}
        shouldAutoFocus
        containerStyle={{ justifyContent: "center", gap: "1.8rem" }}
      />

      <Button
        onClick={handleSubmit}
        className="w-full h-12 bg-[#3F7C5F] hover:bg-[#36624D]"
        disabled={otp.length < 5}
      >
        {isLoading && <Loader className="animate-spin" />}

        {isLoading ? "Submitting..." : "Continue"}
      </Button>

      <div className="text-sm font-semibold">
        Didn’t receive the code?{" "}
        <Link href={"#"} className="text-[#00A859] font-bold cursor-pointer">
          Click to resend
        </Link>
      </div>

      <div className="text-sm cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center items-center mt-4">
        <ChevronLeft size={16} />{" "}
        <button
          className="cursor-pointer"
          onClick={() => handleSearchParams("login")}
        >
          Back to log in
        </button>
      </div>
    </div>
  );
};

export default OtpScreen;
