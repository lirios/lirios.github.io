import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;

export const normalizeList = (value: string | string[] | undefined) => {
  if (!value) {
    return [];
  }

  return Array.isArray(value)
    ? value
    : value.split(/\s+/).filter(Boolean);
};

export const sortedPosts = (posts: Post[]) =>
  [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const postSlugParts = (post: Post) => {
  const basename = post.id.replace(/\.(md|markdown)$/, '').split('/').pop() ?? post.id;
  const match = basename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);

  if (!match) {
    return ['blog', basename, 'index'];
  }

  return ['blog', match[1], match[2], match[3], match[4]];
};

export const postUrl = (post: Post) => {
  const parts = postSlugParts(post);
  const slug = parts.pop();

  return `/${parts.join('/')}/${slug}.html`;
};

export const formatPostDate = (date: Date) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);

export const authorName = (post: Post, authors: Record<string, { name: string }>) =>
  post.data.author && authors[post.data.author]?.name
    ? authors[post.data.author].name
    : 'Liri Team';

export const excerpt = (post: Post, maxLength = 220) => {
  const text = post.body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[#*_>`\[\]()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}...`;
};
