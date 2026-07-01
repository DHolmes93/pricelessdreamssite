export const COMPANY = {
  name: 'Priceless Dreams',
  tagline: 'Tech enterprise building apps, platforms, and products that matter.',
  description:
    'We are a technology company focused on shipping mobile apps, web platforms, and innovative digital products—from consumer experiences to enterprise tools.',
  email: 'ceomiles@pricelessdream.com',
} as const;

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
] as const;

export const PRODUCTS = [
  {
    name: 'LuvSense',
    category: 'Lifestyle',
    description:
      'Your relationship journey deserves personalized guidance. LuvSense is a comprehensive relationship wellness platform with intelligent insights—not guesswork.',
    appStoreUrl: 'https://apps.apple.com/us/app/luvsense/id6747411728',
  },
  {
    name: 'OppLinq',
    category: 'Business',
    description:
      'Find your next opportunity—whether that’s a career move, a steady job, or a side hustle you can start today. Answer a few questions and discover your path.',
    appStoreUrl: 'https://apps.apple.com/us/app/opplinq/id6759388798',
  },
] as const;

export const STATS = [
  { value: '2', label: 'Apps on the App Store' },
  { value: '12', label: 'Countries served' },
  { value: '24/7', label: 'Engineering support' },
  { value: '∞', label: 'Ideas in the pipeline' },
] as const;
