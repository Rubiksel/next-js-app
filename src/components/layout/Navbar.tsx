"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  Cog,
  Users,
  Package,
  Rocket,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  BookOpen,
  FileSearch,
  ListChecks,
  CheckCircle,
  HelpCircle,
  School,
  Library,
  NotebookText,
} from "lucide-react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // <NavigationMenu.Root className="flex justify-between items-center p-4 shadow bg-white">
    <nav className="w-full bg-white shadow mb-8">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-20">
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

        <NavigationMenu.Root className="flex">
          <NavigationMenu.List className="flex">
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
                      <DropdownLink href="/solutions/it" icon={<Cog />}>
                        IT Service Desk
                      </DropdownLink>
                      <DropdownLink href="/solutions/customer" icon={<Users />}>
                        Customer Service
                      </DropdownLink>
                      <DropdownLink href="/solutions/asset" icon={<Package />}>
                        Asset Management
                      </DropdownLink>
                    </ul>
                  </li>
                  <li>
                    <h3 className="dropdown-section">By Industry</h3>
                    <ul className="space-y-1">
                      <DropdownLink href="/solutions/growing" icon={<Rocket />}>
                        Growing Businesses
                      </DropdownLink>
                      <DropdownLink
                        href="/solutions/ecommerce"
                        icon={<ShoppingCart />}
                      >
                        E-commerce
                      </DropdownLink>
                      <DropdownLink
                        href="/solutions/education"
                        icon={<GraduationCap />}
                      >
                        Education
                      </DropdownLink>
                      <DropdownLink
                        href="/solutions/healthcare"
                        icon={<HeartPulse />}
                      >
                        Healthcare
                      </DropdownLink>
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
                      <DropdownLink
                        href="/resources/case-studies/austin"
                        icon={<School />}
                      >
                        Austin Community College
                      </DropdownLink>
                      <DropdownLink
                        href="/resources/case-studies/hebron"
                        icon={<Library />}
                      >
                        Hebron Public School
                      </DropdownLink>
                      <DropdownLink
                        href="/resources/case-studies/raksha"
                        icon={<Building2 />}
                      >
                        Raksha Technologies
                      </DropdownLink>
                      <DropdownLink
                        href="/resources/case-studies/marion"
                        icon={<NotebookText />}
                      >
                        Marion Central School
                      </DropdownLink>
                    </ul>
                  </li>
                  <li>
                    <h3 className="dropdown-section">Free Guides</h3>
                    <ul className="space-y-1">
                      <DropdownLink
                        href="/resources/guides/evaluate"
                        icon={<FileSearch />}
                      >
                        Evaluate IT Helpdesk
                      </DropdownLink>
                      <DropdownLink
                        href="/resources/guides/features"
                        icon={<ListChecks />}
                      >
                        10 Features
                      </DropdownLink>
                      <DropdownLink
                        href="/resources/guides/best-practices"
                        icon={<CheckCircle />}
                      >
                        Best Practices
                      </DropdownLink>
                      <DropdownLink
                        href="/resources/guides/faqs"
                        icon={<HelpCircle />}
                      >
                        FAQs
                      </DropdownLink>
                    </ul>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            {/* <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
				<NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
			</div> */}

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link className="nav-link" href="/">
                  Pricing
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

        </NavigationMenu.Root>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <Button asChild variant="surface" size="4">
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button asChild size="4">
            <Link href="/try-for-free">Try for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

/* Reusable Dropdown Link */
function DropdownLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          href={href}
          className="flex items-center gap-2 rounded-md py-2 px-2 text-sm text-gray-700 hover:bg-lime-50 hover:text-lime-700 transition"
        >
          {icon && (
            <span className="flex items-center justify-center w-4 h-4 text-lime-600">
              {icon}
            </span>
          )}
          <span className="leading-none">{children}</span>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}
