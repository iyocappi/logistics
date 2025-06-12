"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

interface TrackingEvent {
  id: string
  status: string
  description: string
  location: string
  timestamp: string
  isCompleted: boolean
  icon: React.ReactNode
}

interface TrackingData {
  trackingNumber: string
  status: "in-transit" | "delivered" | "pending" | "exception"
  estimatedDelivery: string
  origin: string
  destination: string
  service: string
  weight: string
  recipient: string
  events: TrackingEvent[]
}

const mockTrackingData: Record<string, TrackingData> = {
  SW123456789: {
    trackingNumber: "SW123456789",
    status: "in-transit",
    estimatedDelivery: "Dec 15, 2024 by 6:00 PM",
    origin: "Los Angeles, CA",
    destination: "New York, NY",
    service: "Express Delivery",
    weight: "2.5 lbs",
    recipient: "John Smith",
    events: [
      {
        id: "1",
        status: "Package Picked Up",
        description: "Package has been picked up from sender",
        location: "Los Angeles, CA",
        timestamp: "Dec 12, 2024 9:15 AM",
        isCompleted: true,
        icon: <Package className="h-4 w-4" />,
      },
      {
        id: "2",
        status: "In Transit",
        description: "Package is on its way to sorting facility",
        location: "Los Angeles Distribution Center",
        timestamp: "Dec 12, 2024 2:30 PM",
        isCompleted: true,
        icon: <Truck className="h-4 w-4" />,
      },
      {
        id: "3",
        status: "At Sorting Facility",
        description: "Package arrived at sorting facility",
        location: "Phoenix, AZ",
        timestamp: "Dec 13, 2024 6:45 AM",
        isCompleted: true,
        icon: <MapPin className="h-4 w-4" />,
      },
      {
        id: "4",
        status: "In Transit",
        description: "Package is on its way to destination city",
        location: "Denver, CO",
        timestamp: "Dec 13, 2024 8:20 PM",
        isCompleted: true,
        icon: <Plane className="h-4 w-4" />,
      },
      {
        id: "5",
        status: "Out for Delivery",
        description: "Package is out for delivery",
        location: "New York, NY",
        timestamp: "Dec 14, 2024 7:30 AM",
        isCompleted: false,
        icon: <Truck className="h-4 w-4" />,
      },
      {
        id: "6",
        status: "Delivered",
        description: "Package will be delivered to recipient",
        location: "New York, NY",
        timestamp: "Expected Dec 15, 2024",
        isCompleted: false,
        icon: <CheckCircle className="h-4 w-4" />,
      },
    ],
  },
  SW987654321: {
    trackingNumber: "SW987654321",
    status: "delivered",
    estimatedDelivery: "Delivered Dec 10, 2024 at 2:15 PM",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    service: "Standard Delivery",
    weight: "5.2 lbs",
    recipient: "Sarah Johnson",
    events: [
      {
        id: "1",
        status: "Package Picked Up",
        description: "Package has been picked up from sender",
        location: "Chicago, IL",
        timestamp: "Dec 8, 2024 10:00 AM",
        isCompleted: true,
        icon: <Package className="h-4 w-4" />,
      },
      {
        id: "2",
        status: "In Transit",
        description: "Package is on its way to destination",
        location: "Atlanta, GA",
        timestamp: "Dec 9, 2024 3:20 PM",
        isCompleted: true,
        icon: <Truck className="h-4 w-4" />,
      },
      {
        id: "3",
        status: "Out for Delivery",
        description: "Package is out for delivery",
        location: "Miami, FL",
        timestamp: "Dec 10, 2024 8:00 AM",
        isCompleted: true,
        icon: <Truck className="h-4 w-4" />,
      },
      {
        id: "4",
        status: "Delivered",
        description: "Package delivered successfully",
        location: "Miami, FL",
        timestamp: "Dec 10, 2024 2:15 PM",
        isCompleted: true,
        icon: <CheckCircle className="h-4 w-4" />,
      },
    ],
  },
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-500"
    case "in-transit":
      return "bg-blue-500"
    case "exception":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
    case "in-transit":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Transit</Badge>
    case "exception":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Exception</Badge>
    default:
      return <Badge variant="secondary">Pending</Badge>
  }
}

export default function PackageTracking() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      return
    }

    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[trackingNumber.toUpperCase()]
      if (data) {
        setTrackingData(data)
        setError("")
      } else {
        setTrackingData(null)
        setError("Tracking number not found. Please check and try again.")
      }
      setIsLoading(false)
    }, 1000)
  }

  const resetTracking = () => {
    setTrackingData(null)
    setTrackingNumber("")
    setError("")
  }

  return (
    <section id="tracking" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <Badge variant="outline">Package Tracking</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Track Your Package</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enter your tracking number to get real-time updates on your package location and delivery status.
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
              <CardDescription>Enter your tracking number to see the latest updates</CardDescription>
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
                      <Button variant="ghost" size="sm" onClick={resetTracking} className="ml-2">
                        Track Another
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">From</div>
                      <div className="font-medium">{trackingData.origin}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">To</div>
                      <div className="font-medium">{trackingData.destination}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Recipient</div>
                      <div className="font-medium flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {trackingData.recipient}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">
                        {trackingData.status === "delivered" ? "Delivered" : "Est. Delivery"}
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
                  <CardDescription>Follow your package journey from pickup to delivery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingData.events.map((event, index) => (
                      <div key={event.id} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              event.isCompleted ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                            }`}
                          >
                            {event.icon}
                          </div>
                          {index < trackingData.events.length - 1 && (
                            <div className={`h-8 w-0.5 ${event.isCompleted ? "bg-blue-600" : "bg-gray-200"}`} />
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
                          <div className="text-sm text-muted-foreground">{event.description}</div>
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
                      <div className="font-medium">Need help with your shipment?</div>
                      <div className="text-sm text-muted-foreground">
                        Our customer service team is here to assist you 24/7
                      </div>
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
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
                  <div className="font-medium">Try the demo!</div>
                  <div className="text-sm text-muted-foreground">
                    Use tracking numbers <code className="bg-muted px-1 rounded">SW123456789</code> or{" "}
                    <code className="bg-muted px-1 rounded">SW987654321</code> to see sample tracking data
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
