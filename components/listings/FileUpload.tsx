import { UploadCloud } from "lucide-react";
import React, { useCallback, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useDropzone } from "react-dropzone";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface PreviewFile extends File {
  preview: string;
}

const FileUpload = () => {
  const [files, setFiles] = useState<PreviewFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mappedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...mappedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
    },
  });

  // cleanup URLs on unmount
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  console.log(files);

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-lg bg-[#F9F9F9] mt-10 flex flex-col items-center justify-center h-48 text-center text-gray-500 cursor-pointer"
      >
        <input {...getInputProps()} />
        <UploadCloud className="w-6 h-6 mb-2" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div>
            <p>Click to Upload</p>
            <p className="text-xs">Drag and drop here</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-2 overflow-x-hidden px-3">
          <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
            >
            <CarouselContent>
            {files.map((file, i) => (
                <CarouselItem key={i} className="md:basis-1/2 group lg:basis-1/3">
                    <div className="group hover:scale-105  shadow-none hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <Image
                    key={i}
                    src={file.preview}
                    alt={file.name}
                    className="w-20 h-20 rounded-lg object-cover border"
                  />

                    </div>
                </CarouselItem>
            
            ))}
            </CarouselContent>
            <CarouselPrevious className="top-1/2 -left-3" />
            <CarouselNext className="top-1/2 -right-3" />
          </Carousel>
      </div>

      <Button variant="outline" className="mt-3 py-5 w-full">
        Upload Images
      </Button>
    </div>
  );
};

export default FileUpload;
