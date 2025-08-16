"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

const formSchema = z.object({
  accountHolder: z
    .string()
    .min(2, { message: "Account holder's name is required" }),
  accountNumber: z
    .string()
    .min(10, { message: "Enter a valid account number" }),
  bankName: z.string().min(2, { message: "Bank name is required" }),
  accountType: z.enum(["savings", "current"]).refine((val) => !!val, {
    message: "Select an account type",
  }),
});

export default function AddBankAccountForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountHolder: "",
      accountNumber: "",
      bankName: "",
      accountType: "savings",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg px-6 ">
      <button
        onClick={() => router.back()}
        className="hover:underline cursor-pointer text-gray-700 mb-2 flex items-center gap-1"
      >
        <IoChevronBackOutline />
        Back
      </button>{" "}
      <h2 className="text-lg font-medium text-[#474747]">
        Add Bank Account Information
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Fill in your desired payout account details
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Account Holder */}
          <FormField
            control={form.control}
            name="accountHolder"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#777777] font-normal">
                  Account holder&apos;s name
                </FormLabel>
                <FormControl>
                  <Input className="h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Account Number */}
          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#777777] font-normal">
                  Bank account number
                </FormLabel>
                <FormControl>
                  <Input className="h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Bank Name */}
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#777777] font-normal">
                  Bank name
                </FormLabel>
                <FormControl>
                  <Input className="h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Account Type */}
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#777777] font-normal">
                  Account type
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full h-12 py-6">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="savings">Savings Account</SelectItem>
                    <SelectItem value="current">Current Account</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#3F7C5F] hover:bg-green-800 h-12 mt-7 text-white rounded-full"
          >
            Add Payout Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
