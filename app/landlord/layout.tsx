import Sidebar from "@/components/layout/Sidebar";

export default function LandLordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <section className="flex w-full justify-between md:p-6 sm:p-3 p-2 bg-white">
        <aside className="hidden lg:block z-30 ">
          <Sidebar />
        </aside>
        <div className="w-full lg:ml-72 lg:pl-5 lg:p-0 lg:w-[80%]">
          {children}
        </div>
      </section>
    </main>
  );
}
