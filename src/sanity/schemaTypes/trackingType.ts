import { defineType, defineField } from "sanity";

export default defineType({
  name: "tracking",
  title: "Tracking",
  type: "document",
  fields: [
    defineField({
      name: "trackingNumber",
      title: "Tracking Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "origin",
      title: "Origin",
      type: "string",
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "string",
    }),
    defineField({
      name: "recipient",
      title: "Recipient",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In Transit", value: "in-transit" },
          { title: "Delivered", value: "delivered" },
          { title: "Pending", value: "pending" },
          { title: "Exception", value: "exception" },
        ],
      },
    }),
    defineField({
      name: "estimatedDelivery",
      title: "Estimated Delivery",
      type: "string",
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "string",
    }),
    defineField({
      name: "weight",
      title: "Weight",
      type: "string",
    }),
    defineField({
      name: "events",
      title: "Tracking Events",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "status", type: "string", title: "Status" },
            { name: "description", type: "string", title: "Description" },
            { name: "location", type: "string", title: "Location" },
            { name: "timestamp", type: "datetime", title: "Timestamp" },
            { name: "isCompleted", type: "boolean", title: "Is Completed" },
          ],
        },
      ],
    }),
  ],
});
