"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="container flex justify-between text-gray-200 items-center px-12 py-6 ">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={160} height={95} />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="https://wa.me/5515997999842?text=Olá,gostaria%20de%20agendar%20um%20atendimento!" target="_blank">
            <Button variant="default">Entre em contato</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
