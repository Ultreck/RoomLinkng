"use client";

import React, { useState } from "react";
import { Form } from "../ui/form";
import CustomInput from "./CustomInput";
import { Button } from "../ui/button";
import RememberMeCheckBox from "./RememberMeCheckBox";

type SignUpFormProps = {
  form: any;
  handleNext: () => void;
};

const LoginFrom = ({ form, handleNext }: SignUpFormProps) => {
  const [passType, setPassType] = useState<"text" | "password">("password");

  const onSubmit = (data: any) => {
    console.log(data);
    handleNext();
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
                <a href="#" className="text-green-700 mx-0.5 font-bold">
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
              name="pasword"
              label="Password"
              form={form}
              setType={setPassType}
              isPassword={true}
            />
            <div className="text flex items-center justify-between">
              <div className="text">
                <RememberMeCheckBox id="login" />
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
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginFrom;
