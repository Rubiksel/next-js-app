import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface ContentWithImageProps {
  image: React.ReactNode; // you can pass in a <div>, <img>, or custom component
  eyebrow?: string; // small label above heading
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  bullets?: { text: string; highlight: string; href?: string }[];
  reverse?: boolean; // allows swapping image/text sides
}

export default function ContentWithImage({
  image,
  eyebrow,
  title,
  subtitle,
  cta,
  bullets = [],
  reverse = false,
}: ContentWithImageProps) {
  return (
    <section
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Left/Right image */}
      <div className={reverse ? "lg:col-start-2" : ""}>
        <div className="flex items-center justify-center">{image}</div>
      </div>

      {/* Text content */}
      <div className={reverse ? "lg:col-start-1" : ""}>
        {eyebrow && <h3 className="text-sm font-semibold mb-2">{eyebrow}</h3>}
        <h2 className="text-3xl font-bold leading-tight mb-3">{title}</h2>
        <p className="text-xl text-gray-500 mb-6">{subtitle}</p>

        <Button size="4" asChild>
          <Link href={cta.href}>
            {cta.label}
          </Link>
        </Button>

        {bullets.length > 0 && (
          <ul className="space-y-2 mt-3 text-sm text-gray-600 list-disc list-outside pl-10">
            {bullets.map((b, i) => (
              <li key={i}>
                {b.href ? (
                  <>
                    {b.text}{" "}
                    <Link
                      href={b.href}
                      className="underline font-medium text-gray-900"
                    >
                      {b.highlight}
                    </Link>
                  </>
                ) : (
                  <>
                    {b.text} <span className="font-medium">{b.highlight}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
