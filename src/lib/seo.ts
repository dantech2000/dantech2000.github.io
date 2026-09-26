import { site, channels } from '~/data/site';
import { jobs } from '~/data/resume';

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

export const person = {
  '@type': 'Person',
  '@id': personId,
  name: site.author,
  alternateName: site.name,
  url: site.url,
  jobTitle: jobs[0].title,
  worksFor: { '@type': 'Organization', name: jobs[0].company, url: 'https://www.codecademy.com' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: channels.map((c) => c.href),
  knowsAbout: ['DevOps', 'Site reliability engineering', 'AWS', 'Terraform', 'Kubernetes', 'Amazon EKS', 'CI/CD', 'Go', 'Rust'],
  knowsLanguage: ['en', 'es'],
};

export const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: site.url,
  name: site.name,
  inLanguage: 'en',
  publisher: { '@id': personId },
};

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export function profilePage(url: string) {
  return {
    '@type': 'ProfilePage',
    '@id': `${url}#page`,
    url,
    isPartOf: { '@id': websiteId },
    mainEntity: { '@id': personId },
  };
}

export function blogPosting(post: { url: string; title: string; description: string; date: Date; tags: string[] }) {
  return {
    '@type': 'BlogPosting',
    '@id': `${post.url}#article`,
    url: post.url,
    mainEntityOfPage: post.url,
    headline: post.title,
    description: post.description,
    datePublished: post.date.toISOString(),
    keywords: post.tags.join(', '),
    image: `${site.url}/og.png`,
    inLanguage: 'en',
    author: { '@id': personId },
    publisher: { '@id': personId },
    isPartOf: { '@id': websiteId },
  };
}

/** Public path for a page: build.format 'file' reports `/index` and `/resume.html`. */
export function publicPath(pathname: string) {
  const p = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '');
  return p || '/';
}
