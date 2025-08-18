"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <section className="flex flex-col gap-4 items-center h-screen justify-between ">
        <div className="flex flex-col lg:flex-row justify-between px-4 pt-16 lg:p-16 lg:items-center border-2 h-full w-full border-foreground rounded-lg bg-linear-to-t from-[#E3492F] to-[#FF9900]">
          <h1 className={`text-3xl lg:text-5xl font-semibold`}>
            Balikin moodmu <br />
            dengan satu suapan
          </h1>
          <div>
            <Image
              className="right-40"
              src={"/seblak/seblak-komplit.png"}
              width={200}
              height={200}
              alt="seblak super di balikpapan, seblak bakso"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col grow-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 bg-background min-h-screen">
          {/* Kiri Atas */}
          <div
            onClick={() => router.push("/menu")}
            className="border-2 border-foreground text-foreground p-4 rounded-xl flex flex-col justify-center hover:cursor-pointer hover:bg-foreground hover:text-background"
          >
            <h3 className="text-2xl font-semibold leading-tight">
              Pilihan menu terbaik
              <br />
              lihat disini!
            </h3>
          </div>

          {/* Tengah (Logo dan Judul) */}
          <div className="md:row-span-2 flex-col items-center justify-center bg-[#E3492F] rounded-xl hidden lg:flex">
            <Image
              src={"/seblak-super-logo.svg"}
              width={100}
              height={100}
              alt="Seblak Super, Seblak Favorit di Balikpapan. Balikin Moodmu disini"
            />
          </div>

          {/* Kanan Atas */}
          <div className="border-2 border-foreground p-4 rounded-xl flex flex-col justify-center hover:bg-foreground hover:text-background">
            <h3 className="text-2xl font-semibold leading-snug">
              Mau pesan untuk acara?
              <br />
              Yuk kita lihat!
            </h3>
          </div>

          {/* Kiri Bawah */}
          <div className="border-2 border-foreground text-foreground p-4 rounded-xl flex flex-col justify-center hover:bg-foreground hover:text-background">
            <h3 className="text-2xl font-semibold leading-snug">
              Tempat yang eye catching
              <br />
              Suasana oke
              <br />
              Terbaik
            </h3>
          </div>

          {/* Kanan Bawah */}
          <div className="border-2 border-foreground p-4 rounded-xl flex flex-col justify-center hover:bg-foreground hover:text-background">
            <h3 className="text-2xl font-semibold leading-snug">
              Temukan lokasi kami
              <br />
              disini!
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
