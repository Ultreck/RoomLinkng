import { UploadCloud } from "lucide-react";
import React, { useCallback, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { VerificatioSchemaProps } from "./ListingVerification";
import { useDropzone } from "react-dropzone";

type BacksideProps = {
  form: UseFormReturn<VerificatioSchemaProps>;
};
const VerificationBackside = ({ form }: BacksideProps) => {
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);

    const mapped = acceptedFiles.map((file) => ({
      name: file.name,
      size: formatBytes(file.size),
    }));
    setFiles(mapped);
    form.setValue("backFile", acceptedFiles[0]);
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
      className={`bg-[#F9F9F9] rounded-lg ${
        files[0] && "border border-green-500"
      } flex flex-col items-center justify-center p-10 text-gray-500 cursor-pointer`}
    >
      <input {...getInputProps()} />
      <UploadCloud className="w-6 h-6 mb-2" />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          {files.length === 0 && (
            <div className="text-center">
              <p className="text-sm font-medium">Click to Upload</p>
              <p className="text-xs">Drag and drop here</p>
              <p className="text-xs mt-1">
                PDF, JPG, JPEG, PNG less than 10MB.
              </p>
              <p className="text-xs">
                Ensure your documents are in good condition and readable
              </p>
            </div>
          )}
        </>
      )}
      {files[0] && (
        <div className="text-center">
          <p className="text-sm text-center text-green-600 font-medium">
            File Attached
          </p>
          <p className="text-xs text-gray-500">
            {files[0].name} - {files[0].size}
          </p>
        </div>
      )}
    </div>
  );
};

export default VerificationBackside;
