"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Package,
  Truck,
  Plane,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  User,
  Phone,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { TRACKING_QUERY } from "@/sanity/lib/trackingQuery";

interface TrackingEvent {
  status: string;
  description: string;
  location: string;
  timestamp: string;
  isCompleted: boolean;
}

interface TrackingData {
  trackingNumber: string;
  status: "in-transit" | "delivered" | "pending" | "exception";
  estimatedDelivery: string;
  origin: string;
  destination: string;
  recipient: string;
  events: TrackingEvent[];
}

function getEventIcon(status: string) {
  switch (status.toLowerCase()) {
    case "package picked up":
      return <Package className="h-4 w-4" />;
    case "in transit":
      return <Truck className="h-4 w-4" />;
    case "at sorting facility":
      return <MapPin className="h-4 w-4" />;
    case "out for delivery":
      return <Truck className="h-4 w-4" />;
    case "delivered":
      return <CheckCircle className="h-4 w-4" />;
    case "departed":
      return <Plane className="h-4 w-4" />;
    default:
      return <AlertCircle className="h-4 w-4" />;
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Delivered
        </Badge>
      );
    case "in-transit":
      return (
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          In Transit
        </Badge>
      );
    case "exception":
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          Exception
        </Badge>
      );
    default:
      return <Badge variant="secondary">Pending</Badge>;
  }
};

export default function PackageTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const data = await client.fetch(TRACKING_QUERY, {
        trackingNumber: trackingNumber.trim(),
      });
      if (data) {
        setTrackingData({
          trackingNumber: data.trackingNumber || "",
          status: data.status || "pending",
          estimatedDelivery: data.estimatedDelivery || "",
          origin: data.origin || "",
          destination: data.destination || "",
          recipient: data.recipient || "",
          events: Array.isArray(data.events)
            ? data.events.map((event: any) => ({
                status: event.status || "",
                description: event.description || "",
                location: event.location || "",
                timestamp: event.timestamp || "",
                isCompleted: !!event.isCompleted,
              }))
            : [],
        });
        setError("");
      } else {
        setTrackingData(null);
        setError("Tracking number not found. Please check and try again.");
      }
    } catch {
      setTrackingData(null);
      setError("Error fetching tracking data.");
    }

    setIsLoading(false);
  };

  const resetTracking = () => {
    setTrackingData(null);
    setTrackingNumber("");
    setError("");
  };

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-96">
        <img
          src="/images/track.jpg" // You can change this to any banner image you prefer
          alt="Tracking banner"
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Track Your Package
          </h1>
        </div>
      </section>

      <section
        id="tracking"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <Badge variant="outline">Package Tracking</Badge>

              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter your tracking number to get real-time updates on your
                package location and delivery status.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Tracking Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Track Package
                </CardTitle>
                <CardDescription>
                  Enter your tracking number to see the latest updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter tracking number (try SW123456789 or SW987654321)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Tracking..." : "Track"}
                  </Button>
                </form>
                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tracking Results */}
            {trackingData && (
              <div className="space-y-6">
                {/* Package Summary */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Package className="h-5 w-5" />
                          Tracking #{trackingData.trackingNumber}
                        </CardTitle>
                        <CardDescription>
                          {trackingData.service} • {trackingData.weight}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(trackingData.status)}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={resetTracking}
                          className="ml-2"
                        >
                          Track Another
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">
                          From
                        </div>
                        <div className="font-medium">{trackingData.origin}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">
                          To
                        </div>
                        <div className="font-medium">
                          {trackingData.destination}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">
                          Recipient
                        </div>
                        <div className="font-medium flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {trackingData.recipient}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">
                          {trackingData.status === "delivered"
                            ? "Delivered"
                            : "Est. Delivery"}
                        </div>
                        <div className="font-medium flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {trackingData.estimatedDelivery}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tracking Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tracking History</CardTitle>
                    <CardDescription>
                      Follow your package journey from pickup to delivery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trackingData.events.map((event, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                event.isCompleted
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-200 text-gray-500"
                              }`}
                            >
                              {getEventIcon(event.status)}
                            </div>
                            {index < trackingData.events.length - 1 && (
                              <div
                                className={`h-8 w-0.5 ${
                                  event.isCompleted
                                    ? "bg-blue-600"
                                    : "bg-gray-200"
                                }`}
                              />
                            )}
                          </div>
                          <div className="flex-1 space-y-1 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">{event.status}</div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {event.timestamp}
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {event.description}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Support */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">
                          Need help with your shipment?
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Our customer service team is here to assist you 24/7
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Demo Instructions */}
            {!trackingData && !error && (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Enter your tracking number above ⬆
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
