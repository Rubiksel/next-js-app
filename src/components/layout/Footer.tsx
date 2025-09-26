import Link from "next/link";
import {
  FaHeadset,
  FaBolt,
  FaLock,
  FaClock,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 ">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center px-6 py-4 text-sm text-gray-700">
          {/* Logo + tagline */}
          <div className="flex items-center gap-2 pr-6 border-r border-gray-200">
            <Image
              src="/mojo-star.svg"
              alt="Mojo Helpdesk"
              width={32}
              height={32}
              className="inline-block"
            />
            <span className="font-semibold text-gray-900">
              The smart helpdesk app, for work.
            </span>
          </div>

          {/* Items */}
          <div className="flex items-center gap-8 pl-6 flex-wrap">
            <div className="flex items-center gap-2">
              <FaClock className="text-gray-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBolt className="text-gray-500" />
              <span>Fast & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLock className="text-gray-500" />
              <span>Secure & Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeadset className="text-gray-500" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-sm">
        {/* Product */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase text-gray-900 mb-4">
            Product
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/asset-management" className="hover:text-lime-600">
                Asset Management
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-lime-600">
                Awesome ticket tracking
              </Link>
            </li>
            <li>
              <Link href="/google-workspace" className="hover:text-lime-600">
                Google Workspace
              </Link>
            </li>
            <li>
              <Link href="/knowledge-base" className="hover:text-lime-600">
                Knowledge base
              </Link>
            </li>
          </ul>
        </div>

        {/* Compliance */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase text-gray-900 mb-4">
            Compliance
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                href="/compliance/privacy-gdpr"
                className="hover:text-lime-600"
              >
                Privacy & GDPR
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-lime-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/hipaa" className="hover:text-lime-600">
                HIPAA
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase text-gray-900 mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/blog" className="hover:text-lime-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/webinars" className="hover:text-lime-600">
                Webinars
              </Link>
            </li>
            <li>
              <Link
                href="https://help.mojohelpdesk.com"
                className="hover:text-lime-600"
              >
                Get Support
              </Link>
            </li>
            <li>
              <Link href="/how-to-videos" className="hover:text-lime-600">
                How-To Video
              </Link>
            </li>
            <li>
              <Link
                href="/helpdesk-training-guide"
                className="hover:text-lime-600"
              >
                Tips for Help Desk Agents
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-lime-600">
                Partner Program
              </Link>
            </li>
            <li>
              <Link href="https://jooble.org" className="hover:text-lime-600">
                Jobs
              </Link>
            </li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase text-gray-900 mb-4">
            Developers
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/developer-api" className="hover:text-lime-600">
                Developer API
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase text-gray-900 mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/about" className="hover:text-lime-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-lime-600">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-4 text-xl text-gray-600 mt-5 mb-4">
            <Link
              href="https://www.linkedin.com/company/metadot-corporation"
              className="hover:text-lime-600"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.facebook.com/MojoHelpdesk/"
              className="hover:text-lime-600"
            >
              <FaSquareFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/mojohelpdesk"
              className="hover:text-lime-600"
            >
              <FaSquareInstagram />
            </Link>
            <Link
              href="https://twitter.com/mojohelpdesk"
              className="hover:text-lime-600"
            >
              <FaSquareXTwitter />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 italic leading-relaxed">
            © 2025 Mojo Helpdesk. This is a product of{" "}
            <span className="font-medium">Metadot</span>. All rights reserved.
            Made in Austin, Texas and France.
          </p>
          <Link href="https://mojohelpdesk.montastic.io/">
          <Image
            src="website-OK-brightgreen.svg"
            alt="Website OK Bright Green"
            height={20}
            width={134}
            className="inline-block mt-2"
          /></Link>
        </div>
      </div>
    </footer>
  );
}
