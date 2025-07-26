import Sidebar from "@/components/layout/Sidebar";

export default function LandLordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <section className="flex-1 p-6 bg-gray-50">
        <Sidebar />
        {children}
      </section>
    </main>
  );
}
