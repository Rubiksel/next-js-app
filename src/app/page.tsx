import Link from "next/link";
import ContentWithImage from "../components/ContentWithImage";
import { Container, Flex, Box, Button, Text, Card } from "@radix-ui/themes";
import LogoCarousel from "../components/LogoCarousel";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <section className="pb-16">
        <Container size="4">
          <h1 className="text-5xl font-bold text-center">
            The Best Solution To Support Customers & Employees
          </h1>
          <p className="text-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto">
            Mojo Helpdesk makes customer service easy. Centralize requests,
            assign, automate, track progress, and get more done faster.
          </p>
          <Flex align="center" justify="center" direction="column" gap="3 ">
            <img
              src="/mojo-ui.png"
              alt="Dashboard preview"
              className="rounded-lg"
            />
            <Flex gap="4" mt="4">
              <Button size="4" variant="solid" color="lime">
                <Link href="/try-for-free">Try for free</Link>
              </Button>
              <Button size="4" variant="outline">
                <Link href="/calendar-demo">Request a demo</Link>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="px-6 bg-gray-100 text-center pb-16 pt-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <Flex gap="6" justify="center" wrap="wrap">
            <Card className="w-80">
              <Flex direction="column" gap="3">
                <Text size="5" weight="bold">
                  Centralize requests
                </Text>
                <Text color="gray">
                  Still using spreadsheets and emails for requests? Migrate to
                  Mojo Helpdesk to put them all in a powerful ticket tracker.
                </Text>
              </Flex>
            </Card>

            <Card className="w-80">
              <Flex direction="column" gap="3">
                <Text size="5" weight="bold">
                  Knowledge base
                </Text>
                <Text color="gray">
                  Cut down incoming requests with the self-service knowledge
                  base.
                </Text>
              </Flex>
            </Card>

            <Card className="w-80">
              <Flex direction="column" gap="3">
                <Text size="5" weight="bold">
                  Assign, prioritize, tag
                </Text>
                <Text color="gray">
                  Mojo keeps things organized. Tickets can be assigned and
                  tagged automatically.
                </Text>
              </Flex>
            </Card>
          </Flex>
        </div>
      </section>
      <section className="pb-16 pt-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <ContentWithImage
          reverse={false} // flip to put image on left if needed
          image={
            <img
              src="/happy-user.jpg"
              alt="Happy customer giving thumbs up"
              className="rounded-lg shadow-lg h-160 w-auto object-cover"
            />
          }
          eyebrow="The Tool of the Trade"
          title="Centralize, Assign, Auto-Assign, Tag, Reuse Answers. Simple To Start, Powerful At Scale."
          subtitle=""
          cta={{ label: "Try for free →", href: "/try-for-free" }}
          bullets={[
            {
              text: "Plug & Play Customer Support:",
              highlight:
                "The simplest, quickest implementation (live in days, not months).",
            },
            {
              text: "Get just what you need:",
              highlight:
                "Don’t pay for or wrestle with complexity, long term contracts, aggressive upsell.",
            },
            {
              text: "Work with us (and drive our roadmap!):",
              highlight:
                "Customers love our Austin, TX–based support team.",
            },
            {
              text: "Over 2.5 million happy users.",
              highlight: "",
              href: "/try-for-free",
            },
          ]}
        />
        </div>
      </section>

      {/* Info Section */}

      <section className="py-16 px-6 bg-gray-100 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <LogoCarousel />
        </div>
      </section>
    </div>
  );
}
