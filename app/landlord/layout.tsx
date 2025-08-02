import Sidebar from "@/components/layout/Sidebar";

export default function LandLordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <section className="flex w-full justify-between p-6 bg-gray-50">
        <aside className="">
          <Sidebar />
        </aside>
        <div className="w-[80%]">
        {children}

        </div>
      </section>
    </main>
  );
}
