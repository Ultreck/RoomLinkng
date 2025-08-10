'use client'

import RenterHeader from "@/components/layout/RenterHeader";

export default function MessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text">
      <header className="">
        <RenterHeader />
      </header>
      <div className="text">{children}</div>
    </main>
  );
}
