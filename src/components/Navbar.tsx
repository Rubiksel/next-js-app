"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu.Root className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-600">ProjectManager</div>
      <NavigationMenu.List className="flex gap-6">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/">Home</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/features">Features</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/about">About</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/contact">Contact</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
