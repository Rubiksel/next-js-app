import Link from "next/link";
import Image from "next/image";

export interface NewsCard {
  title: string;
  href: string;
  image: string;
}

interface WhatsNewSectionProps {
  items: NewsCard[];
}

export default function WhatsNewSection({ items }: WhatsNewSectionProps) {
  return (
    <section className="py-20 bg-gray-50"> {/* ✨ Added bg and vertical padding */}
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
          What&apos;s New At Mojo
          <span className="block mt-2 h-1 w-20 bg-lime-500 mx-auto rounded-full" />
          {/* ✨ Added accent underline */}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 flex flex-col w-full max-w-[340px]"
            >
              {/* Image wrapper */}
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform hover:scale-105 transition duration-300"
                />
                {/* ✨ Badge */}
                <span className="absolute top-3 left-3 bg-lime-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {item.title.includes("Webinar")
                    ? "Webinar"
                    : item.title.includes("Case")
                    ? "Case Study"
                    : item.title.includes("Guide")
                    ? "Guide"
                    : "News"}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 leading-snug flex-grow line-clamp-3">
                  {item.title}
                </h3>

                <Link
                  href={item.href}
                  className="group text-lime-600 font-semibold inline-flex items-center mt-auto"
                >
                  Learn more
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
