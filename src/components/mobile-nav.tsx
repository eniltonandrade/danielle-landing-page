"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { LINKS } from "./nav";
import { Button } from "./ui/button";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <Menu className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary">
        <div className="mt-32 mb-40 mx-auto text-2xl">
          <Link href="/">
            <Image src="/logo.png" height={120} width={210} alt="" />
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {LINKS.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={'mobile_' + index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } hover:text-accent capitalize font-medium transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contato">
            <Button variant="contact">Entre em contato</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
