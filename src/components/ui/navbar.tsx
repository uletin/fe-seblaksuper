"use client";

import { IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="sticky w-[100%] top-8 h-[56px] px-4 z-50">
      <div className="flex justify-between items-center h-full bg-foreground text-background px-8 rounded-xl">
        <div className="flex gap-3 items-center">
          <Image
            src={"/seblak-super-logo.svg"}
            width={20}
            height={20}
            alt="Seblak Super, Seblak Favorit di Balikpapan. Balikin Moodmu disini"
          />
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
