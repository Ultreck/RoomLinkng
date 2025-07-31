"use client";

import React, { useState } from "react";
import { Loader } from "lucide-react";
import CustomInput from "./CustomInput";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import useParamHook from "@/hooks/use-param-hook";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const formSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
});


type handleNexttype = {
    handleNext: () => void;
}
const ForgotPasswordEmail = ({handleNext}: handleNexttype) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSearchParams } = useParamHook();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
        handleNext();
        setIsLoading(false);
      //   removeQueryParams("landlord");
    }, 3000);
  };
  return (
    <div className="mt-10">
      <div className="text flex justify-center items-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-8 mt-10"
          >
            <div className="text">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Forgot Password?
              </h2>
              <p className="text-sm font-medium text-[#212121] mb-4">
                No worries, we’ll send you reset instructions.
              </p>
            </div>
            <CustomInput
              type={"text"}
              name="email"
              label="Email address"
              placeholder="you@example.com"
              form={form}
            />
            <Button
              className="bg-[#3F7C5F] cursor-pointer hover:bg-[#36624D] w-full h-14 "
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader className="animate-spin" />}

              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </Form>
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

export default ForgotPasswordEmail;
