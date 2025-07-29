"use client";

import useParamHook from "@/hooks/use-param-hook";
import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";
import z from "zod";
import { Loader } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "./CustomInput";
import RememberMeCheckBox from "./RememberMeCheckBox";
import { Button } from "../ui/button";


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

const ForgottenPasswordEmail = () => {


     const [passType, setPassType] = useState<"text" | "password">("password");
  const [isLoading, setIsLoading] = useState(false);
  const { removeQueryParams, handleSearchParams } = useParamHook();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPasswrod: "",
      otpCode: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      removeQueryParams("landlord");
    }, 3000);
  };
  return (
    <div className="">
      <div className="text flex justify-center items-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-8 mt-10"
          >
            <div className="text">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Let’s get you back in
              </h2>
              <p className="text-sm font-bold text-[#212121] mb-4">
                Welcome back! Login with your details. Doesn’t have an account?
                <a
                  onClick={() => handleSearchParams("signup")}
                  href="#"
                  className="text-green-700 mx-0.5 font-bold"
                >
                  Signup
                </a>
              </p>
            </div>
            <CustomInput
              type={"text"}
              name="email"
              label="Email address"
              placeholder="you@example.com"
              form={form}
            />
            <CustomInput
              type={passType}
              name="password"
              label="Password"
              form={form}
              setType={setPassType}
              isPassword={true}
            />
            <div className="text flex items-center justify-between">
              <div className="text">
                <RememberMeCheckBox id="login" form={form} name="rememberMe" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                <a href="#" className="text-gray-500 underline italic">
                  Forgot your password?{" "}
                </a>
              </p>
            </div>
            <Button
              className="bg-[#3F7C5F] hover:bg-[#36624D] w-full h-14 "
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader className="animate-spin" />}

              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ForgottenPasswordEmail