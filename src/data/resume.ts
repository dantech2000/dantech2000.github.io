// Resume data - modular structure for easy updates and additions

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
}

export interface Experience {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  icon?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
  icon?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon?: string;
}

export interface Language {
  name: string;
  proficiency: string;
  icon?: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Daniel Rodriguez',
  title: 'DevOps Engineer',
  location: 'Los Angeles, USA',
  email: 'dantech2000@gmail.com',
  phone: '562-419-1479',
  summary:
    'Skilled Site Reliability Engineer/DevOps Engineer with hands-on experience in cloud system administration, configuration management, CI/CD, and keeping software systems running smoothly. Comfortable working with a variety of platforms and always up-to-date with the latest development tools and methods. Great at handling projects solo and love being part of a team that gets things done efficiently.',
};

// Employment History
export const experience: Experience[] = [
  {
    company: 'Codecademy.com',
    title: 'DevOps Engineer',
    location: 'New York City, NY (Remote)',
    startDate: 'July 2024',
    endDate: 'Present',
    icon: 'tabler:building',
    responsibilities: [
      'Primarily working with AWS Services: RDS, ElastiCache, IAM, EKS',
      'Maintain infrastructure as code (IaC) for a majority of services using Terraform',
      'Streamlined Product and Application deployments automation and configuration management tasks',
      'Support and maintain internal systems, monitoring availability, latency, and overall system health with DataDog',
      'Manage services life cycle from inception through deployment, operations, and refinement',
      'Build out automation tooling to improve the reliability of the platform, and developer productivity',
      'Provide hands-on technical expertise during service-impacting events, participate in on-call rotation',
      'Collaborate with other engineers on code reviews, internal infrastructure improvements, and process enhancements',
      'Participated in migration from CircleCI to Github Actions',
      'Managed CloudFlare infrastructure including DNS, Caching, Page Rules',
      'Server-less Architecture using AWS Lambda and AWS Step Functions',
    ],
  },
  {
    company: 'GoDaddy.com',
    title: 'Site Reliability Engineer',
    location: 'Marina Del Ray, CA (Hybrid)',
    startDate: 'November 2018',
    endDate: 'July 2022',
    icon: 'tabler:server',
    responsibilities: [
      'Primarily working with *Nix systems (primary focus on RHEL/CentOS/Debian Linux)',
      'Streamlined Product and Application deployments automation and configuration management tasks',
      'Support and maintain internal systems, monitoring availability, latency, and overall system health',
      'Manage services lifecycle from inception through deployment, operations, and refinement',
      'Create and support automation tooling to improve the reliability of the platform',
      'Review logs of various services for troubleshooting and performance improvement',
      'Provide hands-on technical expertise during service-impacting events',
      'Collaborate with other engineers on code reviews, internal infrastructure improvements, and process enhancements',
    ],
  },
  {
    company: 'Media Temple',
    title: 'Cloud Engineer',
    location: 'Marina Del Ray, CA (Hybrid)',
    startDate: 'November 2016',
    endDate: 'November 2018',
    icon: 'tabler:cloud',
    responsibilities: [
      'Work with customers to design cloud-based technical architectures, migration approaches, and application optimizations',
      'Build, deploy, and maintain cloud-based infrastructures using Infrastructure As Code (IaC) with tools like AWS CloudFormation based on technical specifications',
      'Optimize customer infrastructure for increased traffic events',
    ],
  },
  {
    company: 'Media Temple',
    title: 'CloudTech Support',
    location: 'Marina Del Ray, CA (Hybrid)',
    startDate: 'November 2015',
    endDate: 'November 2016',
    icon: 'tabler:headset',
    responsibilities: [
      'Field CloudTech Support Inbound Calls, Support Requests, and Live Chats for Media Temple Services',
      'Expedite On-Demand Services including Database Management, Apache Tuning, MySQL Optimization, Intrusion Prevention',
      'Troubleshoot Web Server Software (Apache & NGINX)',
      'cPanel/WHM & Plesk Troubleshooting and Administration',
      'CentOS/RHEL Troubleshooting and Administration',
      'Monitor site outages with Panopta and take appropriate action to resolve these outages',
    ],
  },
  {
    company: 'Western Dental & Orthodontics',
    title: 'IT Help Desk & Operations Technician',
    location: 'Orange, CA (On-site)',
    startDate: 'March 2008',
    endDate: 'March 2014',
    icon: 'tabler:device-desktop',
    responsibilities: [
      'Provide technical support and assistance to over 600 onsite & 2000 remote users',
      'Field technical issue and information request calls and emails from users',
      'Manage Data Center server backups daily',
      'Install/Configure new servers for Data Center',
      'Monitor WAN Outages & Deployments',
      'After-hours on-call response for Data Center Outages',
      'Complete roll out of various software & hardware releases company-wide',
    ],
  },
];

// Skills organized by category
export const skills: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    icon: 'tabler:cloud',
    skills: [
      { name: 'AWS' },
      { name: 'CloudFlare' },
      { name: 'Google Cloud Platform' },
    ],
  },
  {
    category: 'Infrastructure as Code',
    icon: 'tabler:code',
    skills: [{ name: 'Terraform' }, { name: 'AWS CDK' }],
  },
  {
    category: 'Configuration Management',
    icon: 'tabler:settings',
    skills: [{ name: 'Puppet' }, { name: 'Ansible' }],
  },
  {
    category: 'CI/CD',
    icon: 'tabler:git-merge',
    skills: [{ name: 'Jenkins' }, { name: 'GitHub Actions' }, { name: 'CircleCI' }],
  },
  {
    category: 'Containers & Orchestration',
    icon: 'tabler:box',
    skills: [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'AWS EKS' }],
  },
  {
    category: 'Monitoring & Observability',
    icon: 'tabler:chart-line',
    skills: [{ name: 'DataDog' }, { name: 'Panopta' }, { name: 'Grafana' }, { name: 'Prometheus' }],
  },
  {
    category: 'Operating Systems',
    icon: 'tabler:terminal',
    skills: [{ name: 'Windows/Windows Server' }, { name: 'Debian Linux' }, { name: 'MacOS' }],
  },
  {
    category: 'Programming & Scripting',
    icon: 'tabler:brackets',
    skills: [{ name: 'Python' }, { name: 'SQL' }, { name: 'Bash' }, { name: 'Golang' }],
  },
  {
    category: 'Web Servers',
    icon: 'tabler:world',
    skills: [{ name: 'Apache' }, { name: 'NGINX' }],
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    title: 'AWS Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'November 2018 - November 2020',
    icon: 'tabler:certificate',
  },
  {
    title: 'VMware vSphere VCP5-DCV Certification',
    issuer: 'Coastline Community College, Cypress, CA',
    date: 'September 2013 - September 2014',
    icon: 'tabler:certificate',
  },
];

// Languages
export const languages: Language[] = [
  {
    name: 'English',
    proficiency: 'Native speaker',
    icon: 'tabler:language',
  },
  {
    name: 'Spanish',
    proficiency: 'Highly proficient',
    icon: 'tabler:language',
  },
];


