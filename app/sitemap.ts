import type { MetadataRoute } from 'next';
import { industries } from '@/lib/data';

const BASE_URL = 'https://shafu.taishoku-todoke.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const industryPages = industries.map(i => ({
    url: `${BASE_URL}/${i.key}/`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    ...industryPages,
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/about`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}

