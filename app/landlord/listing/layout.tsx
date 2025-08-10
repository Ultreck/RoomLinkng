
export default function ListingLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="">
      <section className="flex w-full justify-between bg-white">
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
}
