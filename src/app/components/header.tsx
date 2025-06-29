"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogisticsLogo from "./logo";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Services", href: "/services", color: "text-blue-600" },
    { name: "About", href: "/about", color: "text-green-600" },
    { name: "Tracking", href: "/tracking", color: "text-purple-600" },
    { name: "Contact", href: "/contact", color: "text-red-600" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between px-3 py-3 sm:px-4 sm:py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <LogisticsLogo
            width={160}
            height={40}
            className="h-10 w-auto max-w-[140px] sm:h-11 sm:max-w-[160px] md:h-12 md:max-w-[180px] lg:h-14 lg:max-w-[220px] transition-all duration-200"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-foreground/60">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === item.href ? item.color + " font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2">
          {/* <Button variant="ghost" size="sm">
            Sign In
          </Button> */}
          <Button size="sm">Get Quote</Button>
        </div>

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
                <LogisticsLogo
                  width={120}
                  height={32}
                  className="h-9 w-auto max-w-[120px] sm:h-10 sm:max-w-[140px] transition-all duration-200"
                />
              </div>

              {/* Mobile Nav */}
              <div className="p-6 space-y-4">
                <nav className="flex flex-col space-y-3 text-sm font-medium">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`transition-colors ${
                        pathname === item.href
                          ? item.color + " font-semibold"
                          : "text-foreground/60 hover:text-foreground/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-4 border-t flex flex-col space-y-2">
                  {/* <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button> */}
                  <Button size="sm" className="w-full">
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
