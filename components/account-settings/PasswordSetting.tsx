import React, { useState } from "react";
import CustomInput from "../registrations/CustomInput";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResetPasswordForm } from "../registrations/NewPassword";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
  oldPassword: z
    .string()
    .min(3, { message: "Full name should be at least 3 characters long" }),
  newPassword: z
    .string()
    .min(11, { message: "Phone number should be at least 11 characters long" }),
  
});
export type ResetPasswordSettingForm = z.infer<typeof formSchema>;
const PasswordSetting = () => {
    const [isLoading, setIsLoading] = useState(false);

      const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });
     const onSubmit = (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        console.log(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      };
  return (
    <div className="w-full">
      <div className="text flex justify-center items-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="sm:w-2/3 w-full space-y-8"
          >
            <CustomInput<ResetPasswordForm>
              type={"password"}
              name="oldPassword"
              label="Old password"
              form={form}
              isPassword={false}
            />
            <CustomInput<ResetPasswordForm>
              type={"password"}
              name="newPassword"
              label="New password"
              form={form}
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
    </div>
  );
};

export default PasswordSetting;
