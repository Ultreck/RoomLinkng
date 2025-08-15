import z from "zod";

export const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size > 0, { message: "File is required" })
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "File must be less than 5MB",
  })
  .refine(
    (file) => ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
    { message: "Only JPG, PNG, or PDF files are allowed" }
  );