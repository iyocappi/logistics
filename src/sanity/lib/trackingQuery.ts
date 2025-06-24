import { groq } from "next-sanity";

export const TRACKING_QUERY = groq`*[_type == "tracking" && trackingNumber == $trackingNumber][0]{
  trackingNumber,
  origin,
  destination,
  recipient,
  status,
  estimatedDelivery,
  events[]{
    status,
    description,
    location,
    timestamp,
    isCompleted
  }
}`;
