import Link from "next/link";
import { Flex, Button, Text } from "@radix-ui/themes";

export default function CtaSection() {
  return (
    <section style={{ backgroundColor: "#bdee63" }} className="py-40">
      <Flex direction="column" align="center" gap="5">
        <Text size="6" weight="bold" className="text-gray-900">
          Sign up for Mojo Helpdesk today
        </Text>

        <Flex gap="4" wrap="wrap" justify="center">
          {/* Primary Button: Black for high contrast */}
          <Button
            size="4"
            variant="outline"
            color="gray"
            highContrast
            asChild
          >
            <Link href="/try-for-free">Try for free</Link>
          </Button>

          {/* Secondary Button: White with black text */}
          <Button
            size="4"
            variant="outline"
            color="gray"
            highContrast
            asChild
          >
            <Link href="/calendar-demo">Book a demo</Link>
          </Button>
        </Flex>
      </Flex>
    </section>
  );
}
