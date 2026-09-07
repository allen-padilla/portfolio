type Props = {
  /** MP4 source, the one every browser plays. */
  src: string;
  /** Optional WebM source, offered first because it's smaller. */
  webm?: string;
  poster?: string;
  width: number;
  height: number;
  caption?: string;
  /** Plain-language description for assistive tech. */
  label: string;
};

/**
 * A silent, looping clip that behaves like an animated GIF but at a fraction of
 * the size. Autoplays inline without any client JS. Users with reduced motion
 * still get the poster and the controls to play it themselves.
 */
export function Video({ src, webm, poster, width, height, caption, label }: Props) {
  return (
    <figure className="my-10">
      <div className="border border-rule bg-paper-2">
        <video
          className="block h-auto w-full"
          width={width}
          height={height}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          aria-label={label}
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {caption ? <figcaption className="label-sm mt-3">{caption}</figcaption> : null}
    </figure>
  );
}
