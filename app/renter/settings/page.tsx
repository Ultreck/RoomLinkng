"use client";

import React, { useCallback, useState } from "react";

import {
  User,
  Shield,
  Lock,
  Eye,
  Edit2,
  Camera,
  Trash2,
  Check,
  X,
  Loader,
  ChevronLeft,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import imgProfile from "../../../assets/images/profile.png";
import Image from "next/image";
import profileIcon from "../../../assets/icons/profile-icon.svg";
import securityIcon from "../../../assets/icons/security.svg";
import verityIcon from "../../../assets/icons/verify.svg";
import passwordIcon from "../../../assets/icons/password.svg";
import z, { email } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/registrations/CustomInput";
import { useDropzone } from "react-dropzone";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  fullname: z
    .string()
    .min(3, { message: "Full name should be at least 3 characters long" }),
  phone: z
    .string()
    .min(11, { message: "Phone number should be at least 11 characters long" }),
  nin: z.instanceof(File).optional(),
  address: z
    .string()
    .min(5, { message: "Address should at least be 5 letter words" }),
  birthdate: z.string({ message: "Birthdate is required" }),
});
function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [editingField, setEditingField] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  //   const [passType, setPassType] = useState<"text" | "password">("password");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "Gladys Abelle",
      email: "g***@gmail.com",
      phone: "090***98809",
      nin: undefined,
      address: "",
      birthdate: "MM/YY/YYYY",
    },
  });

  const sidebarItems = [
    { id: "profile", url: profileIcon, label: "Profile", icon: User },
    { id: "kyc", url: verityIcon, label: "KYC", icon: Shield },
    { id: "password", url: passwordIcon, label: "Password", icon: Lock },
    { id: "privacy", url: securityIcon, label: "Privacy", icon: Eye },
  ];

  // type EditingField = keyof FormData | null

  interface EditHandler {
    (field: string): void;
  }

  const handleEdit: EditHandler = (field) => {
    setEditingField(field);
  };

  interface HandleSave {
    (field: string): void;
  }

  const handleSave: HandleSave = (field) => {
    setEditingField(undefined);
    console.log(field);

    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setEditingField(undefined);
    // Reset form data if needed
  };

  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Add new files to existing ones
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
    },
  });
  console.log(files);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={imgProfile.src} alt="Profile" />
                  <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">
                    DA
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 shadow-none rounded-full"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Change Picture
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 shadow-none rounded-full hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  key: "fullname",
                  label: "Full name",
                  placeholder: "Enter your full name",
                },
                {
                  key: "email",
                  label: "Email address",
                  placeholder: "Enter your email",
                },
                {
                  key: "phone",
                  label: "Phone number",
                  placeholder: "Enter your phone number",
                },
                {
                  key: "nin",
                  label: "Identity verification (NIN)",
                  placeholder: "Verify your account with your NIN",
                },
                {
                  key: "address",
                  label: "Residential address",
                  placeholder: "Enter your address",
                },
                {
                  key: "birthdate",
                  label: "Birthdate",
                  placeholder: "MM/DD/YYYY",
                },
              ].map(({ key, label, placeholder }) => (
                <div
                  key={key}
                  className="space-y-2 flex justify-between items-center"
                >
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-2/3 space-y-8 "
                    >
                      <CustomInput
                        type={"text"}
                        name={key}
                        label={label}
                        form={form}
                        isPassword={false}
                        className="h-[40px] shadow-none border-0"
                        disabled={editingField !== key}
                        placeholder={placeholder}
                        lableStyle="text-gray-800 font-semibold text-base"
                      />
                    </form>
                  </Form>
                  <div className="text">
                    {editingField === key ? (
                      <>
                        <Button
                          variant="ghost"
                          onClick={() => handleSave(key)}
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        >
                          <Check className="h-5 w-5 lg:h-8 lg:w-8" />
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={handleCancel}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="h-5 w-5 lg:h-8 lg:w-8" />
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="ghost"
                        onClick={() => {
                          handleEdit(key);
                        }}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                      >
                        <Edit2 className="h-5 w-5 lg:h-8 lg:w-8" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "kyc":
        return (
          <div className="space-y-6">
            <div className="text mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Submit Required Documents
              </h2>
              <p className="text-gray-600">
                You are a few steps away from unlocking all features. Provide
                the information needed below.
              </p>
            </div>

            <div className="space-y-6">
              {/* Government Document */}
              <div className="">
                <div
                  {...getRootProps()}
                  className={`flex ${
                    files[0]
                      ? "border-[3px] border-dashed border-green-200  bg-green-100/50"
                      : "border-2 border-dashed border-gray-200 rounded-lg bg-gray-100/50"
                  } rounded-lg justify-between items-center cursor-pointer mb-4  p-6`}
                >
                  <div>
                    <input {...getInputProps()} />
                    <h3 className="text-lg text-gray-800 mb-2">
                      Government Document
                    </h3>
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p className={`${files[0] && "hidden"}`}>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                    {files[0] && (
                      <div className="mt-4 text-sm text-gray-700">
                        <strong>Selected file:</strong> {files[0]?.name}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className={` ${
                      files[0]
                        ? "bg-green-200/50 text-green-700 font-bold"
                        : "bg-white"
                    } hover:bg-gray-50`}
                  >
                    {files[0] ? "File Attached" : "Upload file"}
                  </Button>
                </div>
              </div>

              {/* Proof of Income */}
              <div className="">
                <div
                  {...getRootProps()}
                  className={`flex ${
                    files[1]
                      ? "border-[3px] border-dashed border-green-200  bg-green-100/50"
                      : "border-2 border-dashed border-gray-200 rounded-lg bg-gray-100/50"
                  } rounded-lg justify-between items-center cursor-pointer mb-4  p-6`}
                >
                   <div>
                    <input {...getInputProps()} />
                    <h3 className="text-lg text-gray-800 mb-2">
                      Proof of Income
                    </h3>
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p className={`${files[1] && "hidden"}`}>
                        Drag 'n' drop some files here, or click to <span className="text italic">upload your bank statement (from 3months ago)</span>
                      </p>
                    )}
                    {files[1] && (
                      <div className="mt-4 text-sm text-gray-700">
                        <strong>Selected file:</strong> {files[1]?.name}
                      </div>
                    )}
                  </div>
                   <Button
                    variant="outline"
                    className={` ${
                      files[1]
                        ? "bg-green-200/50 text-green-700 font-bold"
                        : "bg-white"
                    } hover:bg-gray-50`}
                  >
                    {files[1] ? "File Attached" : "Upload file"}
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  className="w-full bg-[#8B918EEB]   hover:bg-gray-700 text-white py-7 text-lg font-medium"
                  size="lg"
                >
                  Submit Documents
                </Button>
              </div>
            </div>
          </div>
        );
      case "password":
        return (
          <div className="">
            <div className="text flex justify-center items-center w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-2/3 space-y-8"
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
      case "privacy":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Activity & Data Use
              </h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="platform-activity">
                  Allow my platform activity to be used for insights & product
                  improvements
                </Label>
                <input
                  type="checkbox"
                  id="platform-activity"
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="anonymized-data">
                  Allow anonymized data for research, stats, and trends
                </Label>
                <input
                  type="checkbox"
                  id="anonymized-data"
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Data Management
              </h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Download My Data
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get a copy of your info, listings, and activity log
                    (JSON/CSV)
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Legal Reference
              </h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">
                    We are committed to privacy
                  </h4>
                  <p className="text-sm text-gray-600">
                    We are committed to keeping your data protected. See details
                    in our Privacy Policy.
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen mt-16 bg-white">
      <div className="flex max-w-[70%] mx-auto">
        {/* Sidebar */}
        <div className="w-64 bg-white  border-r min-h-screen">
          <div className="">
            <h1 className="pl-4 text-[24px] font-semibold text-[#474747] mb-6">
              Settings
            </h1>
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                // const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-48 flex items-center space-x-3 px-3 py-2 rounded-full text-left transition-all duration-200 ${
                      activeTab === item.id ? "bg-[#F6F6F6] font-semibold" : ""
                    }`}
                  >
                    <Image src={item.url} alt={item.id} className={`h-5 w-5`} />
                    <span className="">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white">
          <Card className="max-w-2xl gap-0 bg-white shadow-none border-0 p-0">
            <CardHeader className="bg-white border-0 "></CardHeader>
            <CardContent className="">{renderContent()}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AccountSettingsPage;
