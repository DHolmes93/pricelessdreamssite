import type { ImageSourcePropType } from 'react-native';

export const COMPANY = {
  name: 'Priceless Dreams',
  tagline: 'Tech enterprise building apps, platforms, and products that matter.',
  description:
    'We are a technology company focused on shipping mobile apps, web platforms, and innovative digital products—from consumer experiences to enterprise tools.',
  email: 'CeoMiles@pricelessdream.com',
  phone: '215-913-9840',
  website: 'PricelessDream.com',
  websiteUrl: 'https://pricelessdream.com',
  founder: {
    name: 'Donovan Holmes',
    title: 'Founder & CEO',
  },
} as const;

export const FOUNDER_ROLES = [
  { icon: 'laptop' as const, label: 'Tech Consultant' },
  { icon: 'book' as const, label: 'Author' },
  { icon: 'users' as const, label: 'Relationship Expert' },
  { icon: 'user' as const, label: 'Life Coach' },
  { icon: 'code' as const, label: 'Software Engineer' },
] as const;

export const SERVICES = [
  {
    icon: 'mobile' as const,
    title: 'Mobile Apps',
    description: 'Native and cross-platform apps for iOS, Android, and beyond.',
  },
  {
    icon: 'globe' as const,
    title: 'Web Platforms',
    description: 'Scalable web apps, dashboards, and customer-facing products.',
  },
  {
    icon: 'cubes' as const,
    title: 'Product Engineering',
    description: 'End-to-end design, build, and launch for new product lines.',
  },
  {
    icon: 'cloud' as const,
    title: 'Cloud & APIs',
    description: 'Backend services, integrations, and infrastructure you can trust.',
  },
  {
    icon: 'briefcase' as const,
    title: 'Consulting',
    description: 'Strategic tech guidance, architecture reviews, and hands-on support for teams shipping digital products.',
  },
] as const;

export const CONVO_LAB_URL = 'https://theconvolab.com' as const;

export type Product = {
  name: string;
  category: string;
  description: string;
  authors?: string;
  logo?: ImageSourcePropType;
  comingSoon?: boolean;
  appStoreUrl?: string;
  websiteUrl?: string;
  amazonUrl?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: 'Once A Slave Always A Slave',
    category: 'Book',
    authors: 'Bishop Don · Donovan Holmes',
    description:
      'A bold look at mental slavery, miseducation, and the conditioning that keeps people trapped—calling readers to break free and think for themselves.',
    amazonUrl: 'https://www.amazon.com/dp/B09FRZZP58',
  },
  {
    name: 'Real Man Or Real Nigga',
    category: 'Book',
    authors: 'Donovan Holmes · Bishop Don',
    description:
      'You Either Build or Destroy. Street-tested wisdom for young men who want to leave destruction behind and step into real manhood, principles, and purpose.',
    amazonUrl: 'https://www.amazon.com/dp/1533083150',
  },
  {
    name: 'The Convo Lab',
    category: 'Owned & operated',
    description:
      'Live conversation practice for men who freeze up mid-conversation. Run reps on camera, recover when your mind goes blank, and build confidence through deliberate practice.',
    logo: require('@/assets/images/the-convo-lab.png'),
    websiteUrl: CONVO_LAB_URL,
  },
  {
    name: 'LuvSense',
    category: 'App',
    description:
      'Your relationship journey deserves personalized guidance. LuvSense is a comprehensive relationship wellness platform with intelligent insights—not guesswork.',
    logo: require('@/assets/images/luvsense.png'),
    appStoreUrl: 'https://apps.apple.com/us/app/luvsense/id6747411728',
  },
  {
    name: 'OppLinq',
    category: 'App',
    description:
      'Find your next opportunity—whether that’s a career move, a steady job, or a side hustle you can start today. Answer a few questions and discover your path.',
    logo: require('@/assets/images/opplinq.png'),
    appStoreUrl: 'https://apps.apple.com/us/app/opplinq/id6759388798',
  },
  {
    name: 'Debonaé',
    category: 'App',
    description:
      'The beauty app for shopping diverse-owned brands, consulting licensed professionals, and building community.',
    logo: require('@/assets/images/debonae.png'),
    websiteUrl: 'https://debonae.com',
    comingSoon: true,
  },
  {
    name: 'BrandLxft',
    category: 'Platform',
    description:
      'Your AI co-founder for growth. BrandLxft learns your business, studies your market, finds revenue opportunities, and tells you exactly what to do next.',
    logo: require('@/assets/images/brandlxft.png'),
    websiteUrl: 'https://www.brandlxft.com',
    comingSoon: true,
  },
];

export const STATS = [
  { value: '2', label: 'Books published' },
  { value: '2', label: 'Apps on the App Store' },
  { value: '12', label: 'Countries served' },
  { value: '24/7', label: 'Engineering support' },
] as const;
