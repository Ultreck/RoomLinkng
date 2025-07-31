import RegistrationPageClient from "@/components/RegistrationPageClient";
import React, { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading registration...</div>}>
      <RegistrationPageClient />
    </Suspense>
  );
}
