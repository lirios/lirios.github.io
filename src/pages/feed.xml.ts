import { getCollection } from 'astro:content';
import { authors, site } from '@data/site';
import { authorName, normalizeList, postUrl, sortedPosts } from '@utils/posts';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const posts = sortedPosts(await getCollection('posts')).slice(0, 10);
  const now = new Date().toUTCString();

  const items = posts.map((post) => {
    const url = `${site.url}${postUrl(post)}`;
    const categories = [
      ...normalizeList(post.data.tags),
      ...normalizeList(post.data.categories),
    ]
      .map((category) => `<category>${escapeXml(category)}</category>`)
      .join('');

    return `<item>
      <title>${escapeXml(post.data.title)}</title>
      <description>${escapeXml(post.body)}</description>
      <author>${escapeXml(authorName(post, authors))}</author>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      ${categories}
    </item>`;
  }).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <description>${escapeXml(site.description)}</description>
    <link>${site.url}/</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>
    <pubDate>${now}</pubDate>
    <lastBuildDate>${now}</lastBuildDate>
    <generator>Astro</generator>
    ${items}
  </channel>
</rss>`, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
    },
  });
}
