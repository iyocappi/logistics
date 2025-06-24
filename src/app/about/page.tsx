// app/about/page.tsx

export const metadata = {
  title: "About Us - NaviCore Logistics",
  description:
    "Discover the mission, vision, and values that drive NaviCore Logistics to deliver world-class shipping and logistics solutions across the globe.",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-64 md:h-96">
        <img
          src="/images/about.jpeg" // ← replace with your actual path
          alt="NaviCore Logistics banner"
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            About NaviCore Logistics
          </h1>
        </div>
      </section>

      {/* Page Content */}
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Intro Section */}
          <section className="text-center">
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We&apos;re committed to delivering reliable, efficient, and secure
              logistics solutions tailored to your business needs — globally and
              locally.
            </p>
          </section>

          {/* Mission, Vision, Values */}
          <section className="grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-sm text-muted-foreground">
                To provide seamless, customer-focused logistics solutions that
                empower global trade and business connectivity.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-sm text-muted-foreground">
                To become the world&apos;s most trusted logistics partner,
                enabling people and businesses to reach their full potential.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Values</h2>
              <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                <li>Integrity & Trust</li>
                <li>Customer Success</li>
                <li>Operational Excellence</li>
                <li>Innovation & Agility</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
