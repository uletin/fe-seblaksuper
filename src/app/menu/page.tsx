import SeblakItem from "@/components/ui/seblak-item";
import { seblaks } from "@/mock/mock-seblak";

export default function MenuPage() {
  return (
    <section className="flex items-center justify-center">
      <section className="flex gap-4 lg:gap-12 justify-between lg:justify-center flex-wrap">
        {seblaks.map((seblak, index) => (
          <SeblakItem
            key={seblak.title}
            title={seblak.title}
            price={seblak.price}
            imgAlt={seblak.imgAlt}
            imgSrc={seblak.imgSrc}
            isOdd={index % 2 === 0}
          />
        ))}
      </section>
    </section>
  );
}
