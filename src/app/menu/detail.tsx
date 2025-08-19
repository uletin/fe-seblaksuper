import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { seblaks } from "@/mock/mock-seblak";
import Image from "next/image";

export default function MenuDetail({
  open,
  onOpenChange,
  id,
}: {
  open: boolean;
  onOpenChange: any;
  id: string | null;
}) {
  const seblak = seblaks.find((item) => item.seblak_id === id);

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="flex flex-col px-4">
        <div>
          <Image
            className="mt-[-50%]"
            src={seblak?.imgSrc as string}
            width={400}
            height={400}
            alt={seblak?.imgAlt as string}
          />
        </div>
        <div className="mt-4 mb-8 flex flex-col justify-between h-full w-full">
          <div>
            <DrawerTitle className="text-foreground text-3xl">
              {seblak?.title}
            </DrawerTitle>
            <DrawerDescription>
              Kerupuk, sawi, telur rebus, pentol, ceker
            </DrawerDescription>
          </div>
          <p className="text-5xl text-end">{seblak?.price}K</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
