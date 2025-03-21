"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#002E5B] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Navigation */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-lw6i8fmi648vV3dPwali3bfDvmJcfv.png"
                alt="NexusFinX Logo"
                width={200}
                height={50}
                className="invert brightness-0 invert"
              />
            </Link>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services/offshore-banking"
                className="hover:text-yellow-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Work Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Work Hours</h3>
            <p className="mb-4">
              We work all days a week. Please contact us for any inquiry.
            </p>
            <div className="space-y-2">
              <p>Monday - Friday: 11:00 am - 8:00 pm</p>
              <p>Saturday: 10:00 am - 6:00 pm</p>
              <p>Sunday: 11:00 am - 6:00 pm</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-yellow-400" />
                <a
                  href="mailto:Info@nexusfinx.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Info@nexusfinx.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-yellow-400" />
                <span>Anjouan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            Copyright ©{new Date().getFullYear()} All rights reserved
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
