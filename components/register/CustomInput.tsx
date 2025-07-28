"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";

type DynamicInputProps = {
  type: "text" | "email" | "password" | "number" | "textarea" | "file";
  label: string;
  name: string;
  placeholder?: string;
  form: any;
  description?: string;
  setType?: (type: "text" | "password") => void;
  isPassword?: boolean;
};
const CustomInput = ({
  type,
  label,
  name,
  placeholder,
  form,
  description,
  setType,
  isPassword = false,
}: DynamicInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {isPassword ? (
            <FormLabel>
              <p className="text flex justify-between items-center">
                {label}{" "}
                {type === "text" ? (
                  <span className="text flex items-center">
                    <Eye
                      onClick={() => setType && setType("password")}
                      className="inline-block ml-1 cursor-pointer"
                    />{" "}
                    Hide
                  </span>
                ) : (
                  <span className="text flex items-center">
                    <EyeOff
                      className="inline-block ml-1 cursor-pointer"
                      onClick={() => setType && setType("text")}
                    />
                    Show
                  </span>
                )}
              </p>
            </FormLabel>
          ) : (
            <FormLabel>{label}</FormLabel>
          )}
          <FormControl>
            {(() => {
              switch (type) {
                case "text":
                case "email":
                case "password":
                case "number":
                  return (
                    <Input
                      type={type}
                      placeholder={placeholder}
                      {...field}
                      value={field.value ?? ""}
                    />
                  );

                case "textarea":
                  return (
                    <textarea
                      placeholder={placeholder}
                      {...field}
                      className="w-full border border-input rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  );

                case "file":
                  return (
                    <Input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  );

                default:
                  return (
                    <Input type="text" placeholder={placeholder} {...field} />
                  );
              }
            })()}
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
