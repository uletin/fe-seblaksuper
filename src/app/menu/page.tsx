"use client";

import SeblakItem from "@/components/ui/seblak-item";
import { seblaks } from "@/mock/mock-seblak";
import MenuDetail from "./detail";
import { useState } from "react";
import { IconMeat, IconMilkshake, IconSoup } from "@tabler/icons-react";

export default function MenuPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [seblakId, setSeblakId] = useState<string | null>(null);
  const [seblakVariant, setSeblakVariant] = useState<string>("seblak");

  const seblakOnFilter = seblaks.filter(
    (item) => item.variant === seblakVariant
  );

  return (
    <section className="relative flex flex-col items-center justify-center z-0">
      <section className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {seblakOnFilter.map((seblak, index) => (
          <SeblakItem
            key={seblak.seblak_id}
            title={seblak.title}
            price={seblak.price}
            imgAlt={seblak.imgAlt}
            imgSrc={seblak.imgSrc}
            isOdd={index % 2 === 0}
            onClick={() => {
              setOpen(true);
              setSeblakId(seblak.seblak_id);
            }}
          />
        ))}
      </section>
      <section className="fixed bottom-4 w-full lg:w-3/12 ">
        <div className="text-[12px] rounded-lg bg-background flex items-center justify-center border-2 border-foreground mx-4">
          <button
            className="px-8 py-1 flex flex-col items-center gap-1 hover:cursor-pointer"
            onClick={() => setSeblakVariant("seblak")}
          >
            <IconSoup height={25} width={25} /> Seblak
          </button>
          <button
            className="px-8 py-1 flex flex-col items-center gap-1 hover:cursor-pointer"
            onClick={() => setSeblakVariant("lalapan")}
          >
            <IconMeat height={25} width={25} /> Lalapan
          </button>
          <button
            className="px-8 py-1 flex flex-col items-center gap-1 hover:cursor-pointer"
            onClick={() => setSeblakVariant("minum")}
          >
            <IconMilkshake height={25} width={25} /> Minum
          </button>
        </div>
      </section>
      <MenuDetail open={open} onOpenChange={setOpen} id={seblakId} />
    </section>
  );
}
