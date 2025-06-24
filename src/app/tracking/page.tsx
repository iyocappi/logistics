import PackageTracking from "../components/tracking";

export const metadata = {
  title: "Track Your Shipment - NaviCore Logistics",
  description:
    "Enter your tracking number to get real-time updates on your shipment status with NaviCore Logistics.",
};

export default function TrackingPage() {
  return (
    <main className="container py-10">
      <PackageTracking />
    </main>
  );
}
