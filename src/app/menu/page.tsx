"use client";

import SeblakItem from "@/components/ui/seblak-item";
import { seblaks } from "@/mock/mock-seblak";
import MenuDetail from "./detail";
import { useState } from "react";

export default function MenuPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [seblakId, setSeblakId] = useState<string | null>(null);

  return (
    <section className="flex items-center justify-center">
      <section className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {seblaks.map((seblak, index) => (
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
      <MenuDetail open={open} onOpenChange={setOpen} id={seblakId} />
    </section>
  );
}
