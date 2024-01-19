import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function FormLayout({ children }) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <div className="space-y-4">
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          <ChevronLeft size={20} />
          atrás
        </Link>
        {children}
      </div>
    </main>
  );
}
