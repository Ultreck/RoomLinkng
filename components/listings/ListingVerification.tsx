"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import VerificationFrontside from "./VerificationFrontside";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fileSchema } from "@/constants/constant";
import DiscardChangesModal from "../modals/DiscardChangesModal";
import VerificationBackside from "./VerificationBackside";
import useParamHook from "@/hooks/use-param-hook";

const formSchema = z.object({
  property: z.string().min(3, { message: "Select any of the listed property" }),
  frontFile: fileSchema,
  backFile: fileSchema,
  driveLink: z.string().min(3, { message: "" }),
  confirmed: z.union([z.boolean(), z.literal("indeterminate")]),
});

export type VerificatioSchemaProps = z.infer<typeof formSchema>;
export default function ListingVerification() {
    const {handleSearchParams} = useParamHook();
  const [type, setType] = useState<string>("Seal of own");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      property: "Seal of own",
      frontFile: undefined,
      backFile: undefined,
      driveLink: "",
      confirmed: false,
    },
  });

  const handlePropertySelection = (e: string) => {
    form.setValue("property", e);
    setType(e);
  };
  const handleSubmit = () => {
    console.log(form.getValues());
    setTimeout(() => {
        handleSearchParams("isSuccess", "verification")
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg p-6 ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-[#474747] font-semibold">
          Listing Verification
        </h1>
        <div className="flex gap-2">
          <DiscardChangesModal />
          <Button
            onClick={handleSubmit}
            className="bg-[#00A859] rounded-full hover:bg-green-600 text-white"
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        <div className="space-y-6">
          {/* Tabs */}
          <div>
            <p className="mb-2 text-[#777777]">Verify my listing using</p>
            <div className="text flex justify-between gap-8">
              <div
                onClick={() => handlePropertySelection("Seal of own")}
                className={`border cursor-pointer relative ${
                  type === "Seal of own" && "border-[#00A859] bg-[#F3FFF9]"
                } px-6 py-4 text-center rounded-lg w-52`}
              >
                {type === "Seal of own" && (
                  <IoCheckmarkCircleSharp className="absolute z-30 -right-0.5 text-[#00A859] -top-0.5" />
                )}
                Seal of own
              </div>
              <div
                onClick={() => handlePropertySelection("Utility bill")}
                className={`border cursor-pointer relative ${
                  type === "Utility bill" && "border-[#00A859] bg-[#F3FFF9]"
                } px-6 py-4 text-center rounded-lg w-52`}
              >
                {type === "Utility bill" && (
                  <IoCheckmarkCircleSharp className="absolute z-30 -right-0.5 text-[#00A859] -top-0.5" />
                )}
                Utility bill
              </div>
              <div
                onClick={() => handlePropertySelection("Lease agreement")}
                className={`border cursor-pointer relative ${
                  type === "Lease agreement" && "border-[#00A859] bg-[#F3FFF9]"
                } px-6 py-4 text-center rounded-lg w-52`}
              >
                {type === "Lease agreement" && (
                  <IoCheckmarkCircleSharp className="absolute z-30 -right-0.5 text-[#00A859] -top-0.5" />
                )}
                Lease agreement
              </div>
            </div>
          </div>

          {/* Front side */}
          <div>
            <p className="mb-2 font-medium">Front side</p>
            <VerificationFrontside form={form} />
          </div>

          {/* Back side */}
          <div>
            <p className="mb-2 font-medium">Back side</p>
            <VerificationBackside form={form} />
          </div>

          {/* Walkthrough Video */}
          <div>
            <p className="mb-2 text-[#777777]">Walkthrough Video</p>
            <ul className="space-y-1 text-sm">
              <li className="text-green-600">
                ✓
                <span className="text-[#777777] font-medium ml-1">
                  Upload a video walkthrough in Google Drive (max 2-3 mins)
                </span>
              </li>
              <li className="text-green-600">
                ✓
                <span className="text-[#777777] font-medium ml-1">
                  Video must be very clear
                </span>
              </li>
              <li className="text-green-600">
                ✓
                <span className="text-[#777777] font-medium ml-1">
                  Ensure you enable view access
                </span>
              </li>
              <li className="text-green-600">
                ✓
                <span className="text-[#777777] font-medium ml-1">
                  Paste the link when done
                </span>
              </li>
            </ul>
            <Input
              {...form.register("driveLink")}
              placeholder="Accessible drive link"
              className="mt-3 h-12"
            />
          </div>

          {/* Confirmation */}
          <div className="flex items-start gap-2">
            <Checkbox
              onCheckedChange={(checked) => form.setValue("confirmed", checked)}
              checked={form.watch("confirmed") === true}
              id="confirm"
              className="data-[state=checked]:border-[#3F7C5F] data-[state=checked]:bg-[#3F7C5F] data-[state=checked]:text-white dark:data-[state=checked]:border-[#3F7C5F] dark:data-[state=checked]:bg-[#3F7C5F]"
            />
            <label htmlFor="confirm" className="text-sm leading-tight">
              I confirm that all the information is true and I am the legal
              landlord or authorized agent.
            </label>
          </div>
        </div>
        <div className="text"></div>
      </div>
    </div>
  );
}
