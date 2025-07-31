import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Camera, Check, Edit2, Trash2, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import CustomInput from '../registrations/CustomInput';
import imgProfile from "../../assets/images/profile.png";
import { UseFormReturn } from 'react-hook-form';
import { SettingFormValues } from '@/app/renter/settings/page';
import { fields } from '@/lib/helper';

type profileSettingType = {
    form: UseFormReturn<SettingFormValues>;
    onSubmit: (data: SettingFormValues) => void;
    editingField: string | undefined;
    handleSave: (field: string) => void;
    handleCancel: () => void;
    handleEdit: (field: string) => void;

}
const ProfileSetting = ({form, onSubmit, editingField, handleSave, handleCancel, handleEdit}: profileSettingType) => {
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
              <div className="sm:space-x-2 space-x-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 shadow-none rounded-full"
                >
                  <Camera className="h-4 w-4 sm:mr-2" />
                  Change Picture
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 shadow-none rounded-full hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 sm:mr-2" />
                  Delete
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {fields.map(({ key, label, placeholder }) => (
                <div
                  key={key}
                  className="space-y-2 flex justify-between items-center"
                >
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-2/3 space-y-8 "
                    >
                      <CustomInput<SettingFormValues>
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
  )
}

export default ProfileSetting