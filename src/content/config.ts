import { z, defineCollection } from "astro:content";

// Blog schema with validation for unique tags
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  badge: z.string().optional(),
  tags: z
      .array(z.string())
      .refine((items) => new Set(items).size === items.length, {
        message: "tags must be unique",
      })
      .optional(),
});


// Export inferred types for use elsewhere
export type BlogSchema = z.infer<typeof blogSchema>;
// Register collections with their schemas
const blogCollection = defineCollection({ schema: blogSchema });

export const collections = {
  blog: blogCollection
};