'use client'

import Link from "next/link"
import { Truck, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <span className="font-bold text-xl">SwiftLogistics</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for global logistics solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {["Ground Transport", "Air Freight", "Ocean Freight", "Warehousing"].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:underline">
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
              {["About Us", "Careers", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
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
                <span>info@swiftlogistics.com</span>
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
            © {new Date().getFullYear()} SwiftLogistics. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-muted-foreground mt-2 sm:mt-0">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
