import Image from "next/image";

export default function SeblakItem({
  imgSrc,
  imgAlt,
  title,
  price,
  isOdd,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  price: number;
  isOdd: boolean;
}) {
  const isBakground = isOdd
    ? "bg-linear-to-t from-[#E3492F] to-[#FF9900] text-foreground"
    : "bg-foreground text-background";

  return (
    <div
      className={`${isBakground} h-full flex flex-col items-center gap-12 rounded-b-full lg:w-[200px] justify-between`}
    >
      <div className="p-4 flex flex-col items-center justify-between gap-2">
        <h1 className="text-2xl font-light font-bebas text-center">{title}</h1>
        <p className="text-4xl font-bold text-center">{price} K</p>
      </div>
      <div>
        <Image src={imgSrc} height={300} width={300} alt={imgAlt} />
      </div>
    </div>
  );
}
