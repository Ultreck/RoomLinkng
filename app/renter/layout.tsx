'use client'
import RenterHeader from "@/components/layout/RenterHeader";

export default function RenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen">
      {/* <header className="">
        <RenterHeader />
      </header> */}
      <div className="flex-1">{children}</div>
    </section>
  );
}
