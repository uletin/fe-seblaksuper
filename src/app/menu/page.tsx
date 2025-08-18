import SeblakItem from "@/components/ui/seblak-item";
import { seblaks } from "@/mock/mock-seblak";

export default function MenuPage() {
  return (
    <section className="flex items-center justify-center">
      <section className="grid grid-cols-2 lg:grid-cols-6 gap-4">
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
