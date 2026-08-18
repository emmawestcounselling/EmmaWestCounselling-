export const siteName = 'Emma West Counselling';
export const siteUrl = 'https://emmawestcounselling.pages.dev';
export const email = 'emma.west.counselling@gmail.com';
export const bacpRegisterUrl = 'https://www.bacpregister.org.uk/check_register/';
export const bacpNumber = '185778';
export const icoNumber = 'ZA250217';

export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'How can I help you?', href: '/how-can-i-help-you' },
  {
    label: 'All about counselling',
    children: [
      { label: 'Why have online counselling?', href: '/why-have-online-counselling' },
      { label: 'My Approach', href: '/my-approach' },
      { label: 'Frequently Asked Questions', href: '/frequently-asked-questions' },
    ],
  },
  { label: 'About Me', href: '/about-me' },
  { label: 'Psychiatric drug support', href: '/psychiatric-drug-support' },
  { label: 'My articles', href: '/articles' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Contact', href: '/contact' },
];

export const testimonials = [
  'Thank you so much for your help over the last six weeks. I am feeling so much better and more in control of my life now, thank you for helping me look at things in a more balanced way! I’ve loved coming to see you.',
];
