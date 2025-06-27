import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Truck,
  Plane,
  Ship,
  Package,
  Clock,
  Shield,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Ground Transportation",
      description:
        "Reliable truck and van services for local and national shipping with real-time tracking.",
      image: "/images/ground.jpg",
      features: [
        "Same-day delivery",
        "Temperature-controlled vehicles",
        "Real-time tracking",
        "Flexible scheduling",
      ],
      color: "blue",
    },
    {
      icon: Plane,
      title: "Air Freight",
      description:
        "Speedy international deliveries via trusted airline partners with customs support.",
      image: "/images/air.jpg",
      features: [
        "Express delivery",
        "Customs support",
        "Global reach",
        "Priority handling",
      ],
      color: "green",
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description:
        "Affordable sea freight options for bulk shipments worldwide with secure containers.",
      image: "/images/ocean.jpg",
      features: [
        "FCL and LCL services",
        "Secure containers",
        "Port-to-port delivery",
        "Cost-effective",
      ],
      color: "purple",
    },
    {
      icon: Package,
      title: "Warehousing",
      description:
        "Secure storage solutions with inventory management and distribution services.",
      image: "/images/warehouse2.jpg",
      features: [
        "Climate-controlled storage",
        "Inventory management",
        "Pick & pack services",
        "24/7 security",
      ],
      color: "orange",
    },
    {
      icon: Shield,
      title: "Insurance & Security",
      description:
        "Comprehensive cargo insurance and security services for peace of mind.",
      image: "/images/insurance.jpg",
      features: [
        "Full cargo insurance",
        "Risk assessment",
        "Secure handling",
        "Claims support",
      ],
      color: "red",
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description:
        "Ultra-fast delivery services for time-sensitive shipments and urgent deliveries.",
      image: "/images/express.jpg",
      features: [
        "Same-day delivery",
        "2-hour express",
        "Priority handling",
        "Live tracking",
      ],
      color: "indigo",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Request Quote",
      description:
        "Get an instant quote for your shipping needs with our online calculator.",
    },
    {
      step: "02",
      title: "Book Service",
      description:
        "Choose your preferred service and schedule pickup at your convenience.",
    },
    {
      step: "03",
      title: "Track Shipment",
      description:
        "Monitor your shipment in real-time with our advanced tracking system.",
    },
    {
      step: "04",
      title: "Delivery Confirmation",
      description:
        "Receive confirmation and proof of delivery once your package arrives.",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green:
        "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple:
        "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange:
        "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      indigo:
        "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div>
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Comprehensive Logistics Solutions
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
              Discover our wide range of reliable and efficient shipping
              services tailored to your business needs, backed by cutting-edge
              technology and exceptional customer service.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Service Portfolio
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From ground transportation to international shipping, we provide
                end-to-end logistics solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-background/60 backdrop-blur-sm"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={500}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${getColorClasses(
                            service.color
                          )} flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent"
                      >
                        <a href="/contact#contact-form">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our streamlined process ensures your shipments are handled
                efficiently from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Ship with NaviCore?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Get started today with a free quote and experience the
                difference of working with logistics experts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Contact Sales
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm">4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
