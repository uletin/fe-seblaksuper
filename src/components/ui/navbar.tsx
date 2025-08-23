"use client";

import {
  IconBuildingStore,
  IconEmpathize,
  IconMenu2,
  IconMoon,
  IconSoup,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import SeblakSuperLogo from "./logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  return (
    <nav className="sticky w-[100%] top-8 h-[56px] px-4 z-50">
      <div className="flex justify-between items-center h-full border-2 border-foreground bg-background text-foreground px-8 rounded-xl">
        <div
          onClick={() => router.push("/")}
          className="flex gap-3 items-center hover:cursor-pointer"
        >
          <SeblakSuperLogo />
          <h1 className="font-semibold hidden lg:block">Seblak Super</h1>
        </div>
        <div className="flex gap-8">
          <button
            className="flex gap-[8px] p-[4px] cursor-pointer"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme === "dark" ? (
              <span className="flex gap-2">
                <IconMoon /> <p>Dark</p>
              </span>
            ) : (
              <span className="flex gap-2">
                <IconSun /> <p>Light</p>
              </span>
            )}
          </button>
          <Sheet>
            <SheetTrigger>
              <IconMenu2 />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-2xl">Navigasi</SheetTitle>
              </SheetHeader>
              <div
                className="px-4 flex flex-col gap-4"
                onClick={() => router.push("/menu")}
              >
                <button className="flex gap-2 text-xl cursor-pointer">
                  <IconSoup /> Menu
                </button>
                <button
                  className="flex gap-2 text-xl cursor-pointer"
                  onClick={() => router.push("/event")}
                >
                  <IconEmpathize /> Pesan Untuk Acara
                </button>
                <button
                  className="flex gap-2 text-xl cursor-pointer"
                  onClick={() => router.push("/about-us")}
                >
                  <IconBuildingStore /> Tentang Kami
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
