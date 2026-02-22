export type ProductLine = {
  name: string;
  subtitle: string;
  model: string;
  pricing: string;
  summary: string;
  highlights: string[];
  primaryLink: {
    label: string;
    href: string;
  };
};

export const company = {
  name: 'PastPresence',
  tagline: 'Authored Conversational AI',
  oneLiner: 'Three product lines. One architecture. Built and shipping.',
  contactEmail: 'calebweintraubstudio@gmail.com',
  website: 'https://pastpresence.com',
  hearsayPrimaryUrl: 'https://hearsay.app',
  hearsayAltUrl: 'https://hearsayexperiences.app',
};

export const productLines: ProductLine[] = [
  {
    name: 'HEARSAY Experiences',
    subtitle: 'Voice-first performed fiction',
    model: 'B2C',
    pricing: '$15-20 per experience',
    summary:
      'Six narrative experiences designed, one live. Users talk to authored characters and each session can become a personalized written artifact.',
    highlights: [
      'The Knock is live',
      'Shared writing engine across portfolio',
      'Sensory pack and audiobook add-on potential',
    ],
    primaryLink: {
      label: 'Visit HEARSAY',
      href: 'https://hearsay.app',
    },
  },
  {
    name: 'Echoes Projects',
    subtitle: 'Historical figures in public spaces',
    model: 'B2B',
    pricing: '$50K-250K per installation',
    summary:
      'Site-specific installations for museums, hotels, and cultural spaces using the same authored character architecture.',
    highlights: [
      'Echoes of Indiana: $75K committed',
      'Echoes of Anatolia entered Turkish VC Round 1',
      'Hardware + narrative deployment model is defined',
    ],
    primaryLink: {
      label: 'Request Echoes Brief',
      href: '/contact',
    },
  },
  {
    name: 'Reading Companions',
    subtitle: 'Author-grounded conversational study tools',
    model: 'B2B2C',
    pricing: '$5K-15K school license',
    summary:
      'One companion per author. Designed for reading depth via Socratic dialogue and grounded interpretation.',
    highlights: [
      'Vonnebot prototype is live and working',
      'School pilot model defined',
      'Institutional licensing plus direct subscriptions',
    ],
    primaryLink: {
      label: 'Request Companion Pilot',
      href: '/contact',
    },
  },
];

export const tractionStats = [
  { label: 'Live products', value: '3', detail: 'HEARSAY, Echoes, Vonnebot' },
  { label: 'Committed', value: '$75K', detail: 'Echoes of Indiana' },
  { label: 'Funding raised', value: '$0', detail: 'Built while bootstrapped' },
  { label: 'Company status', value: 'LLC Filed', detail: 'Indiana entity in place' },
];

export const architectureSteps = [
  {
    title: 'Author',
    detail: 'Defines voice, boundaries, and emotional logic.',
  },
  {
    title: 'Character Engine',
    detail: 'Performs in real time within authored constraints.',
  },
  {
    title: 'User Conversation',
    detail: 'User speaks freely; system outputs narrative artifacts.',
  },
];

export const askItems = [
  'Pre-seed target: $500K',
  'Hire first frontend engineer and business development lead',
  'Scale HEARSAY commercial launch and sensory pack production',
  'Close first two Echoes contracts and run 5-10 school companion pilots',
];
