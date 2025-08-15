import { BsFileEarmarkText } from "react-icons/bs";
import React, { useCallback, useState } from "react";
import ProgressCircle from "../modals/ProgressCircle";
import { useDropzone } from "react-dropzone";
import { VerificatioSchemaProps } from "./ListingVerification";
import { UseFormReturn } from "react-hook-form";

type FrontSideProps = {
  form: UseFormReturn<VerificatioSchemaProps>;
};
const VerificationFrontside = ({ form }: FrontSideProps) => {
  const [files, setFiles] = useState<
    { name: string; size: string; originalSize: string }[]
  >([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    
    const mapped = acceptedFiles.map((file) => ({
      name: file.name,
      size: formatBytes(file.size),
      originalSize: String(file.size),
    }));
    setFiles(mapped);
    form.setValue("frontFile", acceptedFiles[0])
  }, []);

  const formatBytes = (bytes: number, decimals = 2) => {
    if (!bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
    },
  });
  return (
    <div
      {...getRootProps()}
      className="flex items-center cursor-pointer gap-4 border rounded-lg p-4"
    >
      <BsFileEarmarkText className="w-6 h-6 text-gray-500" />
      <input {...getInputProps()} />
      <div className="text flex justify-between w-full items-center">
        <div className="flex-1">
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <>
              {files.length === 0 && (
                <div className="text">
                  <p>Click to Upload</p>
                  <p className="text-xs">Drag and drop here</p>
                </div>
              )}
            </>
          )}
          {files[0] && (
            <div className="text">
              <p className="text-sm font-medium">Utility bill.pdf</p>
              <p className="text-xs text-gray-500">{files[0].size}</p>
            </div>
          )}
        </div>
        {files[0] && <ProgressCircle data={100} />}
      </div>
    </div>
  );
};

export default VerificationFrontside;
