"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import LogisticsLogo from "./logo";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center">
              <LogisticsLogo
                width={120}
                height={24}
                className="h-6 w-auto max-w-[120px]"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for global logistics solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {[
                "Ground Transport",
                "Air Freight",
                "Ocean Freight",
                "Warehousing",
              ].map((service, index) => (
                <li key={index}>
                  <Link href={"/services/"} className="hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {["About", "Careers", "News", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:underline block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>navicorelogistics@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NaviCore Logistics. All rights
            reserved.
          </p>
          <div className="flex space-x-4 text-xs text-muted-foreground mt-2 sm:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
