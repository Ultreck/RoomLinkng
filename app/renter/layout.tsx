
export default function RenterLayout({children}: {children: React.ReactNode}) {
  return (
    <section className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">Renter Dashboard</h1>
      </header>
      <div className="flex-1 p-4">
        {children}
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2023 Renter Dashboard
      </footer>
    </section>
  );
}