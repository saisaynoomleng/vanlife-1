import { defineField, defineType } from "sanity";
import { FaShuttleVan } from "react-icons/fa";
import { VanPriceInput } from "./components/VanPriceInput";

export const vanType = defineType({
  name: "van",
  title: "Vans",
  type: "document",
  icon: FaShuttleVan,
  fields: [
    defineField({
      name: "name",
      title: "Van Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      components: {
        input: VanPriceInput,
      },
    }),
  ],
});
