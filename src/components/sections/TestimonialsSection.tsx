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
    <div className="max-w-screen-xl mx-auto px-6">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {title}
        </h2>
        <div className="w-20 h-1 bg-lime-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl p-8 bg-white shadow-md
                         hover:shadow-xl hover:-translate-y-1 border border-gray-100
                         transition-all duration-300"
          >
            {/* Quote icon */}
            <QuoteIcon className="w-8 h-8 text-lime-500 mb-4" />{" "}
            {/* ✨ added */}
            {/* Quote */}
            <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
              “{t.quote}”
            </p>
            {/* Name & Role */}
            <div className="mt-auto">
              <p className="text-base font-bold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
