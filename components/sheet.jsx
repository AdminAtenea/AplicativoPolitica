"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { AlignLeft } from "lucide-react";

const NavSheet = () => {
  const pathname = usePathname();
  const tabs = [
    {
      title: "Resumen",
      href: "/",
    },
    {
      title: "Lideres",
      href: "/leaders",
    },
    {
      title: "Votantes",
      href: "/voters",
    },
    {
      title: "Reuniones",
      href: "/meetings",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <AlignLeft size={24} />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col space-y-4 mt-4">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                pathname === tab.href && "bg-accent"
              )}
            >
              {tab.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
