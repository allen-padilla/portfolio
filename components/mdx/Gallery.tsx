import Image from "next/image";

type Item = { src: string; alt: string; width: number; height: number; caption?: string };

/** Side-by-side figures. Made for portrait phone screenshots that would be too tall stacked. */
export function Gallery({ items }: { items: Item[] }) {
  const cols = items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`my-10 grid gap-5 ${cols}`}>
      {items.map((img) => (
        <figure key={img.src} className="m-0">
          <div className="border border-rule bg-paper-2">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 640px) 240px, 100vw"
              className="h-auto w-full"
            />
          </div>
          {img.caption ? <figcaption className="label-sm mt-3">{img.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
