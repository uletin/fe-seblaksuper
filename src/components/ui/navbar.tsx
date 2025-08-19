"use client";

import { IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import SeblakSuperLogo from "./logo";

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
          <button>
            <IconMenu2 />
          </button>
        </div>
      </div>
    </nav>
  );
}
