"use client";

import React, { useState } from "react";
import { Form } from "../ui/form";
import CustomInput from "./CustomInput";
import { Button } from "../ui/button";
import { Loader } from 'lucide-react';
import useParamHook from "@/hooks/use-param-hook";
import { UseFormReturn } from "react-hook-form";
import { SignUpFormValues } from "../RegistrationPageClient";


type SignUpFormProps = {
  form: UseFormReturn<SignUpFormValues>;
  handleNext: () => void;
};
const SignUpForm = ({ form }: SignUpFormProps) => {
  const [passType, setPassType] = useState<"text" | "password">("password");
  const [isLoading, setIsLoading] = useState(false);
const {handleSearchParams} = useParamHook();

  
  const onSubmit = (data: SignUpFormValues) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
      handleSearchParams('login');

    }, 5000)
  };
  return (
    <div className="">
      <div className="text flex justify-center items-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-7 mt-10"
          >
            <div className="text">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
               Hey, Hello 👋
              </h2>
              <p className="text-sm font-medium text-[#212121] mb-4">
                Welcome to RoomLink. Please enter your details. Have an account?
                <a href="#" className="text-green-700 mx-0.5 font-bold">
                  Login
                </a>
              </p>
            </div>
            <CustomInput<SignUpFormValues>
              type={"text"}
              name="fullName"
              label="Full name"
              placeholder="e.g John Doe"
              form={form}
            />
            <CustomInput<SignUpFormValues>
              type={"text"}
              name="email"
              label="Email address"
              placeholder="you@example.com"
              form={form}
            />
            <CustomInput<SignUpFormValues>
              type={"text"}
              name="phoneNumber"
              label="Phone number"
              placeholder="e.g +234 123 4567"
              form={form}
            />
            <CustomInput<SignUpFormValues>
              type={passType}
              name="password"
              label="Password"
              form={form}
              setType={setPassType}
              isPassword={true}
            />
            <div className="text">
                <p className="text-sm text-gray-500 mb-4">
                 By signing up, you agree to our
                Have an account?{" "}
                <a href="#" className="text-[#004A27] underline mx-0.5">
                  Terms of Service,
                </a>
                <a href="#" className="text-[#004A27] underline mx-0.5">
                  Usage Limits
                </a>and 
                <a href="#" className="text-[#004A27] underline mx-0.5">
                Technical Limits
                </a> and acknowledge that we will process your personal data in accordance with our
                <a href="#" className="text-[#004A27] underline mx-0.5">
                  Privacy Notice
                </a>.
              </p>
            </div>
            <Button
              className="bg-[#3F7C5F] cursor-pointer hover:bg-[#36624D] w-full h-14 "
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader className="animate-spin" /> }
               
              {isLoading? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
