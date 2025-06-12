import PackageTracking from "../components/tracking";

export const metadata = {
  title: "Track Your Shipment - SwiftLogistics",
  description:
    "Enter your tracking number to get real-time updates on your shipment status with SwiftLogistics.",
};

export default function TrackingPage() {
  return (
    <main className="container py-10">
      <PackageTracking />
    </main>
  );
}
