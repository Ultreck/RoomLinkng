"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
const DiscardChangesModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="border rounded-full px-5 hover:bg-gray-200">
        Cancel
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Discard Changes?</DialogTitle>
          <DialogDescription className="text-black">
            Any changes you've made to this project will not be saved. <br />
            The action can not be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="text flex items-center justify-end gap-4">
          <Button className="bg-white border hover:bg-gray-100 rounded-full cursor-pointer text-gray-700">
            Save as draft
          </Button>
          <Button className="bg-[#474747] hover:bg-gray-700 rounded-full cursor-pointer text-white">
            Recorver changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscardChangesModal;
