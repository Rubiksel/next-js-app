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
    <div className="max-w-screen-xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        What&apos;s New At Mojo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col w-full max-w-[320px]"
          >
            {/* Image wrapper */}
            <div className="relative w-full h-40 rounded-t-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={320}
                height={200}
                className="max-h-full object-contain"
              />
            </div>

            {/* Text content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 leading-snug flex-grow">
                {item.title}
              </h3>

              <Link
                href={item.href}
                className="group text-blue-600 font-medium inline-flex items-center mt-auto"
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
  );
}
