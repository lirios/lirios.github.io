import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,markdown}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.date(), z.string()]).transform((value) => new Date(value)),
    author: z.string().optional(),
    categories: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.union([z.string(), z.array(z.string())]).optional(),
    layout: z.string().optional(),
    style: z.string().optional(),
    navitem: z.string().optional(),
    redirect_to: z.string().optional(),
    redirect_from: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
