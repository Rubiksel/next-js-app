"use client";

import * as Accordion from "@radix-ui/react-accordion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          About ProjectManager
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We help teams of all sizes work smarter, stay organized, and achieve
          more together.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We’re a passionate team of designers, developers, and project
            managers dedicated to building tools that make collaboration
            effortless.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to empower teams around the world with intuitive
            tools that improve productivity, transparency, and alignment.
          </p>
        </div>
        <img
          src="team.webp"
          alt="Our Team"
          className="rounded-lg shadow"
        />
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <span className="text-4xl">🤝</span>
            <h3 className="font-bold text-xl mt-2 mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe teamwork makes the dream work.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <span className="text-4xl">✨</span>
            <h3 className="font-bold text-xl mt-2 mb-2">Transparency</h3>
            <p className="text-gray-600">
              Open communication builds trust and progress.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
            <span className="text-4xl">🚀</span>
            <h3 className="font-bold text-xl mt-2 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We push boundaries to create better solutions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ (Radix Accordion) */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">FAQ</h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          <Accordion.Item
            value="mission"
            className="overflow-hidden rounded-lg border"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-4 py-3 text-left font-semibold text-gray-900 hover:bg-gray-100">
                What makes ProjectManager different?
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-3 text-gray-700 bg-white">
              Our focus on simplicity and collaboration ensures your team spends
              less time managing and more time doing.
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="support" className="overflow-hidden rounded-lg border">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-4 py-3 text-left font-semibold text-gray-900 hover:bg-gray-100">
                Do you offer customer support?
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-3 text-gray-700 bg-white">
              Yes! We provide 24/7 support via email and chat to help your team
              succeed.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </section>
    </div>
  );
}
