import React from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'

type RememberMeCheckBoxProps = {
    id: string;
}
const RememberMeCheckBox = ({id}: RememberMeCheckBoxProps) => {
  return (
    <div>
         <Label className="">
        <Checkbox
          id={id}
        //   defaultChecked
          className="data-[state=checked]:border-[#3F7C5F] data-[state=checked]:bg-[#3F7C5F] data-[state=checked]:text-white dark:data-[state=checked]:border-[#3F7C5F] dark:data-[state=checked]:bg-[#3F7C5F"
        />
        <div >
          <p className="">
           Remember me
          </p>
        </div>
      </Label>
    </div>
  )
}

export default RememberMeCheckBox