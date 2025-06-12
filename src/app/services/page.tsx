"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white text-blue-600">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Comprehensive Logistics Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Discover our wide range of reliable and efficient shipping services
            tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ground Transport */}
          <Card className="overflow-hidden shadow-lg">
            <Image
              src="/images/ground.jpg"
              alt="Ground Transportation"
              width={500}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>Ground Transportation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Reliable truck and van services for local and national shipping.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Same-day delivery
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Temp-controlled vehicles
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Real-time tracking
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Air Freight */}
          <Card className="overflow-hidden shadow-lg">
            <Image
              src="/images/air.jpg"
              alt="Air Freight"
              width={500}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>Air Freight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Speedy international deliveries via trusted airline partners.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Express delivery
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Customs support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Global
                  reach
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Ocean Freight */}
          <Card className="overflow-hidden shadow-lg">
            <Image
              src="/images/ocean.jpg"
              alt="Ocean Freight"
              width={500}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>Ocean Freight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Affordable sea freight options for bulk shipments worldwide.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> FCL
                  and LCL services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Secure
                  containers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />{" "}
                  Port-to-port and door-to-door
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
