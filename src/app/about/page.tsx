// app/about/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us - NaviCore Logistics",
  description:
    "Discover the mission, vision, and values that drive NaviCore Logistics to deliver world-class shipping and logistics solutions across the globe.",
};

export default function AboutPage() {
  const values = [
    "Integrity & Trust",
    "Customer Success",
    "Operational Excellence",
    "Innovation & Agility",
  ];
  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpeg"
            alt="NaviCore Logistics banner"
            fill
            priority
            className="w-full h-full object-contain md:object-fit"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            About NaviCore Logistics
          </h1>
        </div>
      </section>

      {/* Page Content */}
      <div className="w-full px-4 py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Intro Section */}
          <section className="text-center space-y-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground text-xl leading-relaxed">
                We&apos;re committed to delivering reliable, efficient, and
                secure logistics solutions tailored to your business needs —
                globally and locally.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full"></div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="grid gap-8 md:grid-cols-3">
            {/* Mission */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide seamless, customer-focused logistics solutions
                    that empower global trade and business connectivity.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the world&apos;s most trusted logistics partner,
                    enabling people and businesses to reach their full
                    potential.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Our Values
                  </h2>
                  <ul className="space-y-3">
                    {values.map((value, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center space-x-2 text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Stats or Additional Info */}
          <section className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Why Choose NaviCore Logistics?
              </h3>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Global Partners
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Customer Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
