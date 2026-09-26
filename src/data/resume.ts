export interface Job {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  /** Short title for the homepage list. */
  short: string;
  years: string;
  items: string[];
}

export const summary =
  'Site Reliability and DevOps engineer with hands-on experience in cloud administration, configuration management, CI/CD, and keeping software systems running smoothly. Works well solo and on teams that ship.';

/** First ops role: Media Temple, Nov 2015. */
export const careerStart = new Date(Date.UTC(2015, 10, 1));

/** Whole years since careerStart, evaluated at build time. */
export function yearsInOps(now = new Date()) {
  return Math.floor((now.getTime() - careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
}

// Newest first.
export const jobs: Job[] = [
  {
    company: 'Codecademy',
    title: 'DevOps Engineer',
    short: 'DevOps Engineer',
    location: 'New York, NY (remote)',
    start: 'Jul 2024',
    end: 'Present',
    years: '2024 — Now',
    items: [
      'AWS day to day: RDS, ElastiCache, IAM, EKS',
      'Maintain infrastructure as code for most services with Terraform',
      'Automate product and application deployments and config management',
      'Monitor availability, latency, and system health with Datadog',
      'Build automation tooling for platform reliability and developer productivity',
      'On-call rotation and hands-on support during incidents',
      'Helped migrate CI from CircleCI to GitHub Actions',
      'Manage Cloudflare DNS, caching, and page rules',
      'Serverless workloads on AWS Lambda and Step Functions',
      'Own service lifecycle from inception through operations',
    ],
  },
  {
    company: 'GoDaddy',
    title: 'Site Reliability Engineer',
    short: 'Site Reliability Eng.',
    location: 'Marina del Rey, CA (hybrid)',
    start: 'Nov 2018',
    end: 'Jul 2022',
    years: '2018 — 2022',
    items: [
      'Ran *nix fleets with a focus on RHEL, CentOS, and Debian',
      'Automated deployments and configuration management',
      'Monitored availability, latency, and overall system health',
      'Built automation tooling to improve platform reliability',
      'Reviewed service logs for troubleshooting and performance',
      'Hands-on support during service-impacting events',
    ],
  },
  {
    company: 'Media Temple',
    title: 'Cloud Engineer',
    short: 'Cloud Engineer',
    location: 'Marina del Rey, CA (hybrid)',
    start: 'Nov 2016',
    end: 'Nov 2018',
    years: '2016 — 2018',
    items: [
      'Designed cloud architectures and migration plans with customers',
      'Built and maintained infrastructure as code with CloudFormation',
      'Tuned customer infrastructure for high-traffic events',
    ],
  },
  {
    company: 'Media Temple',
    title: 'CloudTech Support',
    short: 'CloudTech Support',
    location: 'Marina del Rey, CA (hybrid)',
    start: 'Nov 2015',
    end: 'Nov 2016',
    years: '2015 — 2016',
    items: [
      'Handled inbound calls, tickets, and live chat',
      'Database management, Apache tuning, MySQL optimization',
      'Troubleshot Apache and NGINX web servers',
      'Administered cPanel/WHM, Plesk, and CentOS/RHEL',
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: 'Cloud Platforms', items: ['AWS', 'Cloudflare', 'Google Cloud'] },
  { category: 'Infrastructure as Code', items: ['Terraform', 'AWS CDK'] },
  { category: 'Config Management', items: ['Puppet', 'Ansible'] },
  { category: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'CircleCI'] },
  { category: 'Containers', items: ['Docker', 'Kubernetes', 'AWS EKS'] },
  { category: 'Observability', items: ['Datadog', 'Grafana', 'Prometheus', 'Panopta'] },
  { category: 'Operating Systems', items: ['Debian', 'RHEL/CentOS', 'macOS', 'Windows Server'] },
  { category: 'Languages', items: ['Go', 'Rust', 'Swift', 'Python', 'Bash', 'SQL'] },
  { category: 'Web Servers', items: ['NGINX', 'Apache'] },
];

export const certifications = [
  { title: 'AWS Solutions Architect — Associate', issuer: 'Amazon Web Services', dates: '2018 — 2020', status: 'Expired' },
  { title: 'VMware vSphere VCP5-DCV', issuer: 'Coastline Community College', dates: '2013 — 2014', status: 'Expired' },
];

export const languages = [
  { name: 'English', level: 'Native' },
  { name: 'Español', level: 'Highly proficient' },
];
