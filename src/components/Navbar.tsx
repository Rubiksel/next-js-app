"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <NavigationMenu.Root className="flex justify-between items-center p-4 shadow bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/mojo-logo-big.png"
          alt="Mojo Helpdesk Logo"
          width={300}
          height={82}
        />
      </Link>

      {/* Navigation */}
      <NavigationMenu.List className="flex ">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link className="nav-link" href="/">
              Features
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        {/* Solutions */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="nav-trigger">
            Solutions <CaretDownIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="dropdown">
            <ul className="grid grid-cols-2 gap-8">
              <li>
                <h3 className="dropdown-section">By Department</h3>
                <ul className="space-y-1">
                  <DropdownLink href="/solutions/it">IT Service Desk</DropdownLink>
                  <DropdownLink href="/solutions/customer">Customer Service</DropdownLink>
                  <DropdownLink href="/solutions/asset">Asset Management</DropdownLink>
                </ul>
              </li>
              <li>
                <h3 className="dropdown-section">By Industry</h3>
                <ul className="space-y-1">
                  <DropdownLink href="/solutions/growing">Growing Businesses</DropdownLink>
                  <DropdownLink href="/solutions/ecommerce">E-commerce</DropdownLink>
                  <DropdownLink href="/solutions/education">Education</DropdownLink>
                  <DropdownLink href="/solutions/healthcare">Healthcare</DropdownLink>
                </ul>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {/* Resources */}
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="nav-trigger">
            Resources <CaretDownIcon />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="dropdown">
            <ul className="grid grid-cols-2 gap-8">
              <li>
                <h3 className="dropdown-section">Case Studies</h3>
                <ul className="space-y-1">
                  <DropdownLink href="/resources/case-studies/austin">Austin Community College</DropdownLink>
                  <DropdownLink href="/resources/case-studies/hebron">Hebron Public School</DropdownLink>
                  <DropdownLink href="/resources/case-studies/raksha">Raksha Technologies</DropdownLink>
                  <DropdownLink href="/resources/case-studies/marion">Marion Central School</DropdownLink>
                </ul>
              </li>
              <li>
                <h3 className="dropdown-section">Free Guides</h3>
                <ul className="space-y-1">
                  <DropdownLink href="/resources/guides/evaluate">Evaluate IT Helpdesk</DropdownLink>
                  <DropdownLink href="/resources/guides/features">10 Features</DropdownLink>
                  <DropdownLink href="/resources/guides/best-practices">Best Practices</DropdownLink>
                  <DropdownLink href="/resources/guides/faqs">FAQs</DropdownLink>
                </ul>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link className="nav-link" href="/">
              Pricing
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* Auth buttons */}
      <div className="flex items-center gap-3">
        <Button asChild variant="surface" size="4">
          <Link href="/signin">Sign in</Link>
        </Button>
        <Button asChild size="4" color="lime">
          <Link href="/signup">Try for free</Link>
        </Button>
      </div>
    </NavigationMenu.Root>
  );
}

/* Reusable Dropdown Link */
function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          href={href}
          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-lime-50 hover:text-lime-700 transition"
        >
          {children}
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}
