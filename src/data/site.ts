export const site = {
  name: 'DevOps Dan',
  author: 'Daniel Rodriguez',
  url: 'https://drod.dev',
  description:
    'Daniel Rodriguez, DevOps engineer in Los Angeles. Cloud infrastructure, Terraform, Kubernetes, CI/CD, and the tools I build along the way.',
  location: { label: 'Los Angeles', lat: '34.05°N', lon: '118.24°W' },
};

// Public contact channels only. Email and phone stay off the site to keep bots out.
export const channels = [
  { id: 'CH.01', name: 'GitHub', handle: '@dantech2000', href: 'https://github.com/dantech2000' },
  { id: 'CH.02', name: 'LinkedIn', handle: 'in/dantech2000', href: 'https://www.linkedin.com/in/dantech2000' },
];

export type NavItem = { num: string; label: string; href: string };

export const nav: NavItem[] = [
  { num: '01', label: 'Home', href: '/' },
  { num: '02', label: 'Resume', href: '/resume' },
  { num: '03', label: 'Projects', href: '/#projects' },
  { num: '04', label: 'Contact', href: '/#contact' },
];

// Added to the nav automatically once a published post exists.
export const blogNavItem: NavItem = { num: '05', label: 'Log', href: '/blog' };
