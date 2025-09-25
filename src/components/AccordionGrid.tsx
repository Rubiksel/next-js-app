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
      <div className="max-w-screen-xl mx-auto px-4">
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
              className="border rounded-lg shadow-sm overflow-hidden self-start"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="group flex w-full items-center justify-between px-4 py-3 font-semibold text-left text-gray-800 hover:bg-gray-50"
                >
                  {item.title}
                  <ChevronDownIcon
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content
                className="accordion-content overflow-hidden"
              >
                <div className="px-6 py-4 text-sm text-gray-700 space-y-3">
                  {item.content?.length ? (
                    <ul className="list-disc pl-4 space-y-1">
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
                      className="inline-block mt-3 px-4 py-2 text-sm font-medium text-white bg-lime-600 rounded-md hover:bg-lime-700 transition"
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
