import React from 'react';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { UseFormReturn } from 'react-hook-form';

type RememberMeCheckBoxProps = {
  id: string;
  label?: string;
  form: UseFormReturn<any>;
  name: string;
};

const RememberMeCheckBox = ({ id, form, name, label = 'Remember me' }: RememberMeCheckBoxProps) => {
  const { register } = form;

  return (
    <div>
      <Label htmlFor={id} className="flex items-center gap-2">
        <Checkbox
          id={id}
          {...register(name)}
          className="data-[state=checked]:border-[#3F7C5F] data-[state=checked]:bg-[#3F7C5F] data-[state=checked]:text-white dark:data-[state=checked]:border-[#3F7C5F] dark:data-[state=checked]:bg-[#3F7C5F]"
        />
        <span>{label}</span>
      </Label>
    </div>
  );
};

export default RememberMeCheckBox;
