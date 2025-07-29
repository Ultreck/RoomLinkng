import React, { useState } from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "./CustomInput";
import { Button } from "../ui/button";
import { ChevronLeft, Loader } from "lucide-react";
import useParamHook from "@/hooks/use-param-hook";

const formSchema = z.object({
  oldPassword: z
    .string()
    .min(6, { message: "Password must atleast 6 characters long" }),
  newPassword: z.string().min(6, { message: "" }),
});

type handleNextProp = {
    handleNext: () => void;
}
const NewPassword = ({handleNext}: handleNextProp) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passType, setPassType] = useState<"text" | "password">("password");
  const {handleSearchParams} =useParamHook();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
        handleNext();
        setIsLoading(false);
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
                Set new password
              </h2>
              <p className="text-sm font-medium text-[#212121] mb-4">
                Must be at least 8 characters.
              </p>
            </div>
            <CustomInput
              type={passType}
              name="oldPassword"
              label="Old password"
              form={form}
              setType={setPassType}
              isPassword={false}
            />
            <CustomInput
              type={passType}
              name="newPassword"
              label="New password"
              form={form}
              setType={setPassType}
              isPassword={false}
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

export default NewPassword;
