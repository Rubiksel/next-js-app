"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

interface DepartmentAccordionProps {
  columns?: number; // number of columns in the grid
  items: {
    title: string;
    content?: string[];
    cta?: { label: string; href: string };
  }[];
}

export default function DepartmentAccordion({
  columns = 2,
  items,
}: DepartmentAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
      <div className="max-w-5xl mx-auto px-4">
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        className={`grid gap-6 grid-cols-1 md:grid-cols-${columns} items-start`}
      >
        {items.map((item, i) => (
          <Accordion.Item
            key={i}
            value={item.title}
            className="bg-white rounded-xl border border-gray-200 shadow-sm
                       hover:shadow-md transition-all overflow-hidden self-start
                       hover:border-lime-400" // ✨ green border on hover
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="group flex w-full items-center justify-between px-5 py-4
                           font-semibold text-gray-900 text-left
                           hover:bg-lime-50 focus:outline-none focus:ring-2
                           focus:ring-lime-500 focus:ring-offset-2"
              >
                {/* ✨ green accent bar left of title */}
                <span className="flex items-center gap-2">
                  {item.title}
                </span>
                <ChevronDownIcon
                  className="h-5 w-5 shrink-0 text-lime-500 transition-transform duration-200
                             group-data-[state=open]:rotate-180" // ✨ lime chevron
                />
              </Accordion.Trigger>
            </Accordion.Header>

            {/* ✨ kept your animation class */}
            <Accordion.Content className="accordion-content overflow-hidden">
              <div className="px-6 py-5 text-sm text-gray-700 space-y-4 bg-gray-50 border-t border-lime-100">
                {item.content?.length ? (
                  <ul className="list-disc pl-5 space-y-2 marker:text-lime-600">
                    {item.content.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="italic text-gray-400">No details available</p>
                )}
                {item.cta && (
                  <Link
                    href={item.cta.href}
                    className="inline-block mt-4 px-4 py-2 text-sm font-medium
                               text-white bg-lime-600 rounded-lg shadow-sm
                               hover:bg-lime-700 hover:shadow-md transition"
                  >
                    {item.cta.label}
                  </Link>
                )}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
