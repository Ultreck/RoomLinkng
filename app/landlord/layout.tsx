import Sidebar from "@/components/layout/Sidebar";

export default function LandLordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <section className="flex w-full justify-between p-6 bg-white">
        <aside className="hidden lg:block z-30">
          <Sidebar />
        </aside>
        <div className="w-full pl-5 lg:w-[80%]">
        {children}

        </div>
      </section>
    </main>
  );
}
