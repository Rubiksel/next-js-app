import Link from "next/link";
import { Button, Card } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 className="text-5-xl font-bold mb-4">Manage Projects Smarter</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          A modern project management tool to organize tasks, track progress,
          and collaborate with your team, all in one place.
        </p>
        <div className="flex gap-4">
          <Button asChild size="4">
            <Link href="/features">Explore Features</Link>
          </Button>
          <Button asChild variant="surface" size="4">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      {/* Info Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <h3 className="font-bold text-xl mb-2">Organized Workflow</h3>
            <p className="text-gray-600">
              Stay on top of tasks with clean boards and lists.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold text-xl mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Invite teammates and work together seamlessly.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold text-xl mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Visualize project milestones and deadlines easily.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
