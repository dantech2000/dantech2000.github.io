export type Diagram = 'refresh' | 'digg' | 'amanu';

export interface Project {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  href: string;
  /** Button text. Defaults to "View source". */
  linkLabel?: string;
  diagram: Diagram;
}

export const projects: Project[] = [
  {
    name: 'Refresh',
    kind: 'Go / CLI',
    description:
      'A Go CLI to manage and monitor AWS EKS clusters and nodegroups: health checks, fast list and describe, and smart scaling.',
    tags: ['Golang', 'AWS EKS', 'CLI'],
    href: 'https://github.com/dantech2000/refresh',
    diagram: 'refresh',
  },
  {
    name: 'digg',
    kind: 'Rust / CLI',
    description: 'My own take on the classic dig DNS lookup tool, rewritten from scratch in Rust.',
    tags: ['Rust', 'DNS', 'CLI'],
    href: 'https://github.com/dantech2000/digg',
    diagram: 'digg',
  },
  {
    name: 'Amanu',
    kind: 'Swift / macOS',
    description:
      'Push-to-talk dictation for macOS. Hold a key, speak, release, and the text lands at your cursor. Everything runs on-device.',
    tags: ['Swift', 'macOS', 'On-device ML'],
    href: 'https://getamanu.com',
    linkLabel: 'Visit site',
    diagram: 'amanu',
  },
];
