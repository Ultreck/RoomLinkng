'use client'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Button } from '../ui/button';

const KycSetting = () => {
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
              <div className="py-5">
                <Button
                  className="w-full bg-[#8B918EEB]   hover:bg-gray-700 text-white py-7 text-lg font-medium"
                  size="lg"
                >
                  Submit Documents
                </Button>
              </div>
            </div>
          </div>
  )
}

export default KycSetting