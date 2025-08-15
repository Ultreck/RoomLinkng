"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomInput from "../registrations/CustomInput";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import FileUpload from "./FileUpload";
import Link from "next/link";
import DiscardChangesModal from "../modals/DiscardChangesModal";

const formSchema = z.object({
  name: z.string().min(3, { message: "The name input is required." }),
  property_type: z
    .string()
    .min(3, { message: "Listing type field is required." }),
  address: z.string().min(6, { message: "Address field is required" }),
  landMark: z.string().min(3, { message: "The land mark field is required" }),
  price: z.number({
    message: "Price is required",
  }),
  description: z.string().min(5, { message: "Description field is required" }),
  startDate: z.date().min(5, { message: "Date field is required" }),
  endDate: z.date().min(5, { message: "Date field is required" }),
  amenities: z.array(z.string()),
  rules: z.array(z.string()),
  power: z.string().min(3, {
    message: "You have to select at least one that your house have.",
  }),
});

export type ListingFormProps = z.infer<typeof formSchema>;
export default function AddListingForm() {
  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [addRule, setAddRule] = useState<boolean>(false);
  const [rules, setRules] = useState("");
  const form = useForm<ListingFormProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      property_type: "",
      address: "",
      price: 0,
      landMark: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      amenities: [],
      rules: ["No smoking", "No parties", "No overnight guests"],
      power: "",
    },
  });
  const amenities = [
    "Bed",
    "Table",
    "Bathroom (joint)",
    "Bathroom (private)",
    "Carpet/Rug",
    "AC/Fan",
    "WiFi",
  ];
  const powerOptions = [
    "Grid only",
    "Grid+Inverter",
    "Grid+Generator",
    "Grid+Inverter+Generator",
  ];

  const onSubmit = (value: ListingFormProps) => {
    console.log(value);
    console.log(FormData);
  };
  return (
    <div className="bg-white rounded-lg border p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Add Listing</h1>
        <div className="flex gap-2">
          <DiscardChangesModal/>
          <Button className="bg-[#00A859] hover:bg-green-500 rounded-full text-white">
            <Link href={`/landlord/listing/create/verification`}>Continue</Link>
          </Button>
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        {/* Left side */}
        <div className="space-y-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-7 mt-10"
            >
              <CustomInput
                className="h-12"
                type="text"
                label="Listing name"
                name="name"
                form={form}
                placeholder="Listing name"
              />
              <div className="text gap-5">
                <span className="text-sm">Listing type</span>
                <Select
                  onValueChange={(value) => {
                    form.setValue("property_type", value);
                    console.log(value);
                  }}
                >
                  <SelectTrigger className="w-full py-6 focus-visible:ring focus:border-green-600 focus:border ">
                    <SelectValue placeholder="Listing type" />
                  </SelectTrigger>

                  <SelectContent className="w-full">
                    <SelectItem value="room">Room</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CustomInput
                className="h-12"
                type="text"
                label="Full address"
                name="address"
                form={form}
                placeholder="12,saltun rd, lekki lagos"
              />
              <CustomInput
                className="h-12"
                type="text"
                label="Landmark (Optional)"
                name="landMark"
                form={form}
                placeholder="Lekki lagos"
              />
              <CustomInput
                className="h-12"
                type="text"
                label="Price"
                name="price"
                form={form}
                placeholder="35,000/room"
              />
              <CustomInput
                className="h-12"
                type="textarea"
                label="Description"
                name="description"
                form={form}
                placeholder="Describe what makes your room standout and why renters should book..."
              />
              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text grid">
                  <span className="text-sm text-gray-600">Available from</span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start h-12">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {fromDate ? (
                          format(fromDate, "MM/dd/yyyy")
                        ) : (
                          <span className="text-sm text-gray-600">
                            MM/dd/yyyy
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={fromDate}
                        onSelect={setFromDate}
                        disabled={{ before: new Date() }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="text grid">
                  <span className="text-sm text-gray-600">To</span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start h-12">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {toDate ? (
                          format(toDate, "MM/dd/yyyy")
                        ) : (
                          <span className="text-sm text-gray-600">
                            MM/dd/yyyy
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="single"
                        selected={toDate}
                        onSelect={setToDate}
                        disabled={{ before: new Date() }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Amenities */}
              <div className="text">
                <h1 className="text mb-3">Amenities (Tick all that applies)</h1>
                <div className="text flex flex-wrap gap-4">
                  {amenities.map((a) => {
                    const id = a.toString();
                    const selected = form.watch("amenities").includes(a);

                    return (
                      <Label
                        key={id}
                        htmlFor={id}
                        className="flex items-center gap-1 text-sm text-gray-500 font-normal"
                      >
                        <Checkbox
                          id={id}
                          checked={selected}
                          onCheckedChange={(checked) => {
                            const current = form.getValues("amenities");
                            if (checked) {
                              form.setValue("amenities", [...current, a]);
                            } else {
                              form.setValue(
                                "amenities",
                                current.filter((item) => item !== a)
                              );
                            }
                          }}
                          className="data-[state=checked]:border-[#3F7C5F] rounded-full data-[state=checked]:bg-[#3F7C5F] data-[state=checked]:text-white dark:data-[state=checked]:border-[#3F7C5F] dark:data-[state=checked]:bg-[#3F7C5F]"
                        />
                        <span>{a}</span>
                      </Label>
                    );
                  })}
                </div>
              </div>
              {/* Rules */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-normal">Create rules</p>
                <div className="flex flex-wrap gap-2 border rounded-lg p-5">
                  {form.watch("rules").map((r) => (
                    <span
                      key={r}
                      className="bg-gray-100 px-3 py-1 flex items-center gap-1 rounded-full text-sm"
                    >
                      {r}
                      <button
                        onClick={() => {
                          const current = form.getValues("rules");
                          form.setValue(
                            "rules",
                            current.filter((item) => item !== r)
                          );
                        }}
                        className="text cursor-pointer hover:rotate-12"
                      >
                        <X className="hover:text-red-500" size={16} />
                      </button>
                    </span>
                  ))}
                  {!addRule && (
                    <Button
                      className="cursor-pointer"
                      onClick={() => setAddRule(true)}
                      variant="outline"
                      size="sm"
                    >
                      + Add rules
                    </Button>
                  )}
                  {addRule && (
                    <div className="text w-full relative">
                      <Input
                        value={rules}
                        onChange={(e) => setRules(e.target.value)}
                        className="pr-20"
                        required
                        placeholder="Backup hours guaranteed per day?"
                      />
                      <button
                        onClick={() => {
                          const current = form.getValues("rules");
                          setRules("");
                          if (rules) {
                            form.setValue("rules", [...current, rules]);
                            setAddRule(false);
                          }
                        }}
                        className="text absolute right-1 top-1 cursor-pointer bg-green-600 rounded-full text-white px-3 py-0.5"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* Power arrangement */}
              <div>
                <p className="mb-2 text-sm font-medium">Power arrangement</p>

                <RadioGroup
                  value={form.watch("power")}
                  onValueChange={(val) => form.setValue("power", val)}
                  className="flex flex-wrap gap-4 "
                >
                  {powerOptions.map((p, i) => (
                    <div key={p} className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="border-gray-300 text-white data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 data-[state=checked]:text-white "
                        value={p}
                        id={`power-${i}`}
                      />
                      <Label
                        className="text-gray-500 font-normal text-sm"
                        htmlFor={`power-${i}`}
                      >
                        {p}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <Input
                placeholder="Backup hours guaranteed per day?"
                defaultValue="7hrs"
              />
              <p className="text-xs text-gray-500">
                Note: Power must be included in rent
              </p>
            </form>
          </Form>
        </div>

        {/* Right side - Upload */}
        <FileUpload />
      </div>
    </div>
  );
}
