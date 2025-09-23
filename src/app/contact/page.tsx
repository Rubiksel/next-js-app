"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Have questions? We’d love to hear from you.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(true); // Show dialog after submit
          }}
          className="space-y-4 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Radix Dialog for confirmation */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            <Dialog.Content className="fixed top-1/2 left-1/2 w-96 max-w-[90%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
              <Dialog.Title className="text-lg font-bold mb-2">Message Sent</Dialog.Title>
              <Dialog.Description className="text-gray-600 mb-4">
                Thank you for reaching out! Our team will get back to you soon.
              </Dialog.Description>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Close
              </button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}

