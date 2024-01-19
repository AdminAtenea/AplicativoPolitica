import Navbar from "@/components/Navbar";

export default async function RootLayout({ children }) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <div className="space-y-4">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
