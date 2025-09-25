import Link from "next/link";
import ContentWithImage from "../components/ContentWithImage";
import { Container, Flex, Box, Button, Text, Card } from "@radix-ui/themes";
import LogoCarousel from "../components/LogoCarousel";
import AccordionGrid from "../components/AccordionGrid";
import Testimonials from "../components/Testimonials";
import CtaSection from "../components/CtaSection";
import WhatsNewSection, { NewsCard } from "../components/WhatsNewSection";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const departmentItems = [
  {
    title: "IT Support",
    content: [
      "Centralize IT & maintenance requests to improve triage and organization",
      "Automate repetitive tasks to decrease workload and free up staff",
      "Cut down on new requests with built-in knowledge base",
    ],
    cta: { label: "Learn more", href: "/it-helpdesk" },
  },
  {
    title: "Customer Service",
    content: [
      "Boost customer satisfaction with self-service knowledge base",
      "Resolve issues faster with automation",
      "Measure customer satisfaction to improve where it's needed",
    ],
    cta: { label: "Learn more", href: "/customer-service-help-desk" },
  },
  {
    title: "Facility & Maintenance Management",
    content: [
      "Create maintenance tickets & auto-assign them",
      "Manage assets, maintenance contracts & create tickets related to them",
      "Display news alert in the public knowledge base",
    ],
  },
  {
    title: "Product Management",
    content: [
      "Log all product issues in Mojo",
      "Measure time spent by ticket categories",
      "Slice and dice ticket reports with tag filters",
      "Assign automatically based on user roles",
    ],
  },
  {
    title: "Operations Management",
    content: [
      "Assign work duties with Mojo Helpdesk",
      "Watch work progress and send automated reminders",
      "Catch run-away tickets before it's too late",
    ],
  },
  {
    title: "Human Resources",
    content: [
      "On-boarding sequences",
      "Vacation requests",
      "Leave requests",
      "Training requests",
      "Etc...",
    ],
  },
  {
    title: "Software Management",
    content: [
      "Track feature requests and tag them",
      "Manage bugs and filter by outcome",
      "Incident reporting",
    ],
  },
  {
    title: "Anything else? Yes!",
    content: [
      "Mojo Helpdesk can track anything. From contracts, to defects, credit applications, registration requests, bugs, improvement requests. Virtually anything.",
    ],
  },
];

const newsItems: NewsCard[] = [
  {
    title: "How To Keep Help Desk Agents From Burning Out",
    href: "/blog-one",
    image: "/news/burnout.png",
  },
  {
    title: "Case Study: Austin Community College Case & Mojo Helpdesk Study",
    href: "/case-studies/austin-community-college",
    image: "/news/undraw_analysis.png",
  },
  {
    title: "FREE GUIDE: Why Every Help Desk Needs These 11 Functions",
    href: "/downloadable/11-points-helpdesk",
    image: "/news/11-points-hd.jpg",
  },
  {
    title: "Upcoming Webinar: Is Mojo Helpdesk Right For Your Organization?",
    href: "/webinars/is-mojo-right-for-org",
    image: "/news/is_mojo_right.png",
  },
  {
    title: "On-Demand Webinar: Cybersecurity For The Rest Of Us",
    href: "/webinars/2020-07-07-cybersecurity-for-the-rest-of-us",
    image: "/news/cyber-secu.png",
  },
  {
    title:
      "On-Demand Webinar: How To Save Hundreds Of Thousands Of Dollars With A Self-Service Knowledge Base",
    href: "/webinar/save-hundred-of-thousand-dollars",
    image: "/news/save-hundred-of-thousand.png",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <section className=" pt-24 bg-gradient-to-b from-white to-gray-100 text-center">
        <Container size="3">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-snug mb-8 bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent">
            The Best Solution To Support Customers & Employees
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-700 mb-10">
            Helping over{" "}
            <span className="font-bold text-lime-600">2.5 million users</span>{" "}
            daily
          </p>

          {/* CTAs */}
          <Flex justify="center" gap="5" wrap="wrap" className="mb-10">
            <Button size="4" asChild>
              <Link href="/try-for-free">Try for free</Link>
            </Button>
            <Button size="4" variant="surface" asChild>
              <Link href="/calendar-demo">Request a demo</Link>
            </Button>
          </Flex>

          {/* Trial line */}
          <Flex
            justify="center"
            align="center"
            gap="2"
            className="text-gray-700 text-base sm:text-lg"
          >
            <CheckCircledIcon className="text-lime-600 w-5 h-5" />
            <span>
              <strong>100% free trial.</strong> No credit card required.
            </span>
          </Flex>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="px-6 bg-gray-100 text-center pb-20 pt-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <Flex gap="8" justify="center" wrap="wrap">
            {/* Card 1 */}
            <Card className="w-80 rounded-2xl border-t-4 border-lime-500 bg-gradient-to-b from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300">
              <Flex direction="column" gap="3" className="p-6 text-left">
                <Text size="6" weight="bold" className="text-gray-900">
                  Centralize requests
                </Text>
                <Text size="3" color="gray" className="leading-relaxed">
                  Still using spreadsheets and emails for requests? Migrate to
                  Mojo Helpdesk to put them all in a powerful ticket tracker.
                </Text>
              </Flex>
            </Card>

            {/* Card 2 */}
            <Card className="w-80 rounded-2xl border-t-4 border-indigo-500 bg-gradient-to-b from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300">
              <Flex direction="column" gap="3" className="p-6 text-left">
                <Text size="6" weight="bold" className="text-gray-900">
                  Knowledge base
                </Text>
                <Text size="3" color="gray" className="leading-relaxed">
                  Cut down incoming requests with the self-service knowledge
                  base.
                </Text>
              </Flex>
            </Card>

            {/* Card 3 */}
            <Card className="w-80 rounded-2xl border-t-4 border-pink-500 bg-gradient-to-b from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300">
              <Flex direction="column" gap="3" className="p-6 text-left">
                <Text size="6" weight="bold" className="text-gray-900">
                  Assign, prioritize, tag
                </Text>
                <Text size="3" color="gray" className="leading-relaxed">
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
                highlight: "Customers love our Austin, TX–based support team.",
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
      <section className="py-16 px-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Mojo Helpdesk Is Used In All Departments Of An Organization
        </h2>
        <AccordionGrid items={departmentItems} columns={2} />
      </section>
      <section className="py-16 px-16 bg-gray-100">
        <ContentWithImage
          image={
            <img
              src="/call-center.jpg"
              alt="Call Center"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          }
          title="Designed with Purpose"
          subtitle="Mojo Helpdesk is an easy to use cloud ticket tracking that helps companies provide superior employee & customer service at a lower cost. Over 10 years ago, Metadot, the Mojo's parent company needed a help desk that would give our customers personal, dynamic, and natural experiences. We couldn’t find one that met our needs, so we built it. We've now made this available for organization like yours, and today thousands of educational organizations, from small to large, use Mojo Helpdesk to manage their IT, maintenance requests from staff, faculty and more."
          cta={{ label: "Try for free", href: "/try-for-free" }}
        />
      </section>
      <section className="py-16 px-16">
        <Testimonials
          items={[
            {
              quote:
                "A lot of organisations our size use enterprise products that are far more expensive, and we have tried a few, but now our staff have used Mojo, they don’t want to go back to anything else. You have created an absolute gem.",
              name: "Nick Elder",
              role: "CIO, Southern Institute of Technology, New Zealand",
            },
            {
              quote:
                "Mojo Helpdesk has allowed us to get far more people outside of IT involved. Many tickets cross-organizational boundaries as they are multi-step so Mojo Helpdesk has helped solve that problem.",
              name: "Mike H.",
              role: "Director, Campus Technology Services",
            },
            {
              quote:
                "We needed to reduce complexity and find a solution that was sized and priced right for our business. Mojo checked all the boxes.",
              name: "Todd A.",
              role: "General Manager of Technology, Sona Dermatology & MedSpa",
            },
          ]}
        />
      </section>
      <CtaSection />
      <section className="px-16 py-16">
        <WhatsNewSection items={newsItems} />
      </section>
    </div>
  );
}
