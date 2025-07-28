"use client";

import React, { useState } from "react";
import { Form } from "../ui/form";
import CustomInput from "./CustomInput";

type SignUpFormProps = {
  form: any;
  handleNext: () => void;
};
const SignUpForm = ({ form, handleNext }: SignUpFormProps) => {
  const [passType, setPassType] = useState<"text" | "password">("password");

  const onSubmit = (data: any) => {
    console.log(data);
    // handleNext();
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <CustomInput
            type={"text"}
            name="fullName"
            label="Full name"
            placeholder="e.g John Doe"
            form={form}
          />
          <CustomInput
            type={"text"}
            name="email"
            label="Email address"
            placeholder="you@example.com"
            form={form}
          />
          <CustomInput
            type={"text"}
            name="phoneNumber"
            label="Phone number"
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
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
