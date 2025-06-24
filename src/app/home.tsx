"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Package,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="absolute inset-0 z-0">
            <Image
              src="/banner1.jpg?height=800&width=1200"
              alt="Logistics warehouse with trucks and cargo"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-600/20 text-blue-100 border-blue-400/30"
                >
                  Global Logistics Leader
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Delivering Excellence
                  <br />
                  Across the Globe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Fast, reliable, and secure logistics solutions for businesses
                  worldwide. From local deliveries to international shipping,
                  we&apos;ve got you covered.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Track Package
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Text Content */}
              <div className="flex flex-col space-y-6 text-center lg:text-left lg:items-start items-center">
                <div className="space-y-2">
                  <Badge variant="outline">Why Choose Us</Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                    Built for Modern Business
                  </h2>
                  <p className="max-w-xl text-muted-foreground text-base md:text-lg">
                    We combine cutting-edge technology with decades of logistics
                    expertise to deliver unmatched service quality and
                    reliability.
                  </p>
                </div>

                <div className="grid gap-4 grid-cols-2 w-full max-w-md">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">Global Network</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">Secure Handling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">
                      Package Insurance
                    </span>
                  </div>
                </div>
              </div>

              <Image
                src="/images/warehouse.jpg?height=400&width=600"
                alt="Modern logistics facility"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline">Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Complete Logistics Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From air freight to ground transportation, we provide
                  comprehensive logistics services tailored to your business
                  needs.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {/* Ground Transportation */}
              <Card className="overflow-hidden">
                <Image
                  src="/images/ground.jpg"
                  alt="Ground Transportation"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="text-center">
                  <CardTitle>Ground Transportation</CardTitle>
                  <CardDescription>
                    Reliable truck and van delivery services for local and
                    long-distance shipping.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Same-day delivery
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Temperature controlled
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Real-time tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Air Freight */}
              <Card className="overflow-hidden">
                <Image
                  src="/images/air.jpg"
                  alt="Air Freight"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="text-center">
                  <CardTitle>Air Freight</CardTitle>
                  <CardDescription>
                    Fast international shipping via our global network of
                    airline partners.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Express delivery
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Customs clearance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Door-to-door service
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Ocean Freight */}
              <Card className="overflow-hidden">
                <Image
                  src="/images/ocean.jpg"
                  alt="Ocean Freight"
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="text-center">
                  <CardTitle>Ocean Freight</CardTitle>
                  <CardDescription>
                    Cost-effective sea shipping for large volumes and heavy
                    cargo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Full container loads
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Less than container
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      Port-to-port delivery
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-muted-foreground">
                  Countries Served
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-muted-foreground">
                  Packages Delivered
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-muted-foreground">
                  On-Time Delivery
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Customer Support
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
