import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export function Figure({ src, alt, width, height, caption }: Props) {
  return (
    <figure className="my-10">
      <div className="border border-rule bg-paper-2">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 768px) 720px, 100vw"
          className="h-auto w-full"
        />
      </div>
      {caption ? <figcaption className="label-sm mt-3">{caption}</figcaption> : null}
    </figure>
  );
}
