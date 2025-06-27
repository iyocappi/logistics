import { Card, CardContent } from "@/components/ui/card";
import { Globe, Package, Clock, Headphones } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Globe,
      value: "50+",
      label: "Countries Served",
      description: "Global reach across continents",
    },
    {
      icon: Package,
      value: "1M+",
      label: "Packages Delivered",
      description: "Trusted by millions worldwide",
    },
    {
      icon: Clock,
      value: "99.9%",
      label: "On-Time Delivery",
      description: "Reliable and punctual service",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Customer Support",
      description: "Always here to help you",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Trusted by Millions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our commitment to excellence is reflected in these impressive
            numbers that showcase our dedication to quality service.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-background/60 backdrop-blur-sm"
              >
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live statistics updated in real-time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
