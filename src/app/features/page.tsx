"use client";

import * as Tabs from "@radix-ui/react-tabs";

export default function FeaturesPage() {
  return (
    <section className="min-h-screen px-6 py-16 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Features
      </h1>

      <Tabs.Root defaultValue="workflow" className="max-w-4xl mx-auto">
        <Tabs.List className="flex justify-center gap-6 border-b mb-8">
          <Tabs.Trigger
            value="workflow"
            className="px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Workflow
          </Tabs.Trigger>
          <Tabs.Trigger
            value="collab"
            className="px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Collaboration
          </Tabs.Trigger>
          <Tabs.Trigger
            value="analytics"
            className="px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Analytics
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="workflow" className="text-center">
          <h2 className="text-xl font-semibold mb-2">Organized Workflow</h2>
          <p className="text-gray-600">
            Visualize projects with boards, lists, and task assignments.
          </p>
        </Tabs.Content>

        <Tabs.Content value="collab" className="text-center">
          <h2 className="text-xl font-semibold mb-2">Team Collaboration</h2>
          <p className="text-gray-600">
            Chat, share files, and stay aligned with your team.
          </p>
        </Tabs.Content>

        <Tabs.Content value="analytics" className="text-center">
          <h2 className="text-xl font-semibold mb-2">Smart Analytics</h2>
          <p className="text-gray-600">
            Monitor productivity and progress with reports and dashboards.
          </p>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
