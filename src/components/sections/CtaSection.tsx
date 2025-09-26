import Link from "next/link";
import { Flex, Button, Text } from "@radix-ui/themes";

export default function CtaSection() {
  return (
    <section className="relative bg-gradient-to-r from-lime-200 to-lime-500 py-20 text-center overflow-hidden">
      {/* Subtle background pattern for depth */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_70%)]"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Sign up for Mojo Helpdesk today
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Button asChild variant="surface" size="4">
            <Link href="/try-for-free">Try for free</Link>
          </Button>

          <Button asChild variant="surface" size="4">
            <Link href="/calendar-demo">Book a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
