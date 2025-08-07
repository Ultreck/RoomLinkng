'use client'

import RenterHeader from "@/components/layout/RenterHeader";

export default function HelpLayout({
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
