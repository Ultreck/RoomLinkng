import React from "react";
import CustomInput from "../registrations/CustomInput";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { Loader } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "@/app/renter/settings/page";


type passwordSettingType = {
    form: UseFormReturn<FormValues>;
    onSubmit: (data: FormValues) => void;
    isLoading: boolean;
}
const PasswordSetting = ({form, onSubmit, isLoading}: passwordSettingType) => {
  return (
    <div className="w-full">
      <div className="text flex justify-center items-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="sm:w-2/3 w-full space-y-8"
          >
            <CustomInput
              type={"password"}
              name="oldPassword"
              label="Old password"
              form={form}
              isPassword={false}
            />
            <CustomInput
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
