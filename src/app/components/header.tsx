"use client";

import Link from "next/link";
import { Truck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Truck className="h-6 w-6 text-blue-600" aria-hidden="true" />
          <span className="font-bold text-xl hidden sm:inline-block">
            SwiftLogistics
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-foreground/60">
          {["services", "about", "tracking", "contact"].map((item, index) => (
            <Link
              key={index}
              href={`/${item}`}
              className="hover:text-foreground/80 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        {/* <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Quote</Button>
        </div> */}

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              {/* Mobile Logo */}
              <div className="px-4 py-4 border-b flex items-center space-x-2">
                <Truck className="h-6 w-6 text-blue-600" aria-hidden="true" />
                <span className="font-bold text-xl">SwiftLogistics</span>
              </div>

              {/* Mobile Nav */}
              {/* <div className="p-6 space-y-4">
                <nav className="flex flex-col space-y-3 text-sm font-medium">
                  {["services", "about", "tracking", "contact"].map((item) => (
                    <Link key={item} href={`#${item}`}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  ))}
                </nav>
                <div className="pt-4 border-t flex flex-col space-y-2">
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button>
                  <Button size="sm" className="w-full">
                    Get Quote
                  </Button>
                </div>
              </div> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
