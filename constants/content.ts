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
] as const;

export const CREATEDPLAYAS_URL = 'https://createdplayas.com' as const;

export const PRODUCTS = [
  {
    name: 'CreatedPlayas',
    category: 'Owned & operated',
    description:
      'Live conversation practice for men who freeze up mid-conversation. Run reps on camera, recover when your mind goes blank, and build confidence through deliberate practice.',
    websiteUrl: CREATEDPLAYAS_URL,
  },
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
