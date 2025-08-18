import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';
const SaveButtonModal = () => {
  return (
   <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex cursor-pointer items-center bg-[#F6F6F6] hover:bg-gray-200 rounded-full w-32">
          <Heart
                className={`h-4 w-4 cursor-pointer`}
              />
          Save
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-2xl px-0 max-w-sm w-xs">
        <DialogHeader className="flex items-center justify-between mb-4">
          <DialogTitle className="text-lg font-semibold">
            Save Room
          </DialogTitle>
        </DialogHeader>

        {/* Share Options Grid */}
        <div className="grid grid-cols-4 px-6 gap-4 mb-6">
          
        </div>
         
      </DialogContent>
    </Dialog>
  )
}

export default SaveButtonModal