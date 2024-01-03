import { SVGIconName } from 'src/types';

export const navRoutes = [
  'Home|/',
  'About us|/about|preventDefault',
  'Health Plans|/health-plans|preventDefault',
  'FAQ|/faq',
  'Blog|https://blog.cribmd.com/'
];
export const navAboutMenu: Array<{
  href: string;
  icon: SVGIconName;
  title: string;
  rider: string;
}> = [
  {
    href: '/our-company',
    icon: 'cribmd-logo',
    title: 'Our Company',
    rider: 'Learn what we stand for, our vision and achievements'
  },
  {
    href: '/in-the-news',
    icon: 'volume',
    title: 'CribMD in the News',
    rider: ' As seen on Spotify and Arise News, catch the latest news about us'
  },
  {
    href: '/gallery',
    icon: 'picture',
    title: 'Gallery',
    rider: 'See our achievements and picture displays!'
  },
  {
    href: '/legal',
    icon: 'cribmd-logo',
    title: 'Legal',
    rider: 'Go through our Privacy Policy and our Terms of Use'
  }
];
export const navPlansMenu: Array<{
  href: string;
  icon: SVGIconName;
  title: string;
  rider: string;
}> = [
  {
    href: '/individual',
    icon: 'credit-card-individual',
    title: 'Individual Plan',
    rider: 'Affordable health plans for yourself and your family.'
  },
  {
    href: '/corporate',
    icon: 'credit-card-corporate',
    title: 'Corporate Plan',
    rider: 'We have the right health plans for your business.'
  }
];
