import Image from "next/image";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="bg-zinc-900 flex items-center justify-center min-h-[calc(100vh_-_80px)] w-full">
      <Image
        src="/404.jpg"
        alt="A Desert"
        draggable={false}
        fill
        role="banner"
        className="object-cover"
      />

      <div
        className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-zinc-900/50 rounded-lg
        text-center
        "
      >
        <h2 className="text-8xl">404</h2>

        <span>it looks like You are lost.</span>
        <span className="block">
          Go back to the{" "}
          <Link href="/" className="underline underline-offset-2">
            Safe area
          </Link>
        </span>
      </div>
    </div>
  );
}

// Imagem de <a href="https://pixabay.com/pt/users/_marion-36647/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=279862">Marion</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=279862">Pixabay</a>
