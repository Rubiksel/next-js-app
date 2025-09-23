import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5-xl font-bold mb-4">Manage Projects Smarter</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          A modern project management tool to organize tasks, track progress,
          and collaborate with your team, all in one place.
        </p>
        <div className="flex gap-4">
          <Link
            href="/features"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore Features
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
      {/* Info Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Organized Workflow</h3>
            <p className="text-gray-600">
              Stay on top of tasks with clean boards and lists.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Invite teammates and work together seamlessly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Visualize project milestones and deadlines easily.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
