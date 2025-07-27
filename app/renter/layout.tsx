import RenterHeader from "@/components/layout/RenterHeader";
import SearchBar from "@/components/SearchBar";

export default function RenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen">
      <header className="">
        <RenterHeader />
        <SearchBar />
      </header>
      <div className="flex-1 p-4">{children}</div>
    </section>
  );
}
