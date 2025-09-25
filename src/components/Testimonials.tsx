import { PersonIcon, QuoteIcon } from "@radix-ui/react-icons";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsProps {
  title?: string;
  items: Testimonial[];
}

export default function Testimonials({
  title = "What Our Customers Are Saying",
  items,
}: TestimonialsProps) {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            {title}
          </h2>
          <div className="w-20 h-1 bg-lime-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl p-8 bg-white shadow-sm border border-gray-200 hover:border-lime-400 hover:shadow-md transition duration-300"
            >
              {/* Accent bar (soft green) */}
              <div className="h-1 w-12 rounded-full bg-lime-400 mb-6" />

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed mb-6">
                “{t.quote}”
              </p>

              {/* Name & Role */}
              <div className="mt-auto">
                <p className="text-base font-semibold text-gray-800">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
