export const site = {
  title: 'Liri',
  description: 'An OS and apps built with modern design and features.',
  url: 'https://liri.io',
  email: 'info@liri.io',
};

export const navItems = [
  { href: '/blog/', label: 'News', section: 'blog' },
  { href: 'https://blog.liri.io', label: 'Blog', external: true },
  { href: '/apps/', label: 'Apps', section: 'apps' },
  { href: '/screenshots/', label: 'Screenshots', section: 'screenshots' },
  { href: '/get-involved/', label: 'Get Involved', section: 'get-involved' },
  { href: '/download/', label: 'Download', section: 'download' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/lirios' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCYtVjJpp1ORWhytmYQEPNig' },
  { label: 'Facebook', href: 'https://www.facebook.com/Liri-935614733238741' },
  { label: 'Twitter', href: 'https://twitter.com/liridev' },
  { label: 'Reddit', href: 'https://www.reddit.com/r/liri' },
  { label: 'Mastodon', href: 'https://mastodon.cloud/@liri' },
  { label: 'Chat on Matrix', href: 'https://riot.im/app/#/room/#liri:matrix.org' },
];

export const authors = {
  plfiorini: {
    name: 'Pier Luigi Fiorini',
    picture: '/images/avatars/avatar_pier.png',
    twitter: 'plfiorini',
    googleplus: '+PierLuigiFiorini',
    github: 'plfiorini',
  },
  iBeliever: {
    name: 'Michael Spencer',
    picture: '/images/avatars/avatar_michael.jpg',
    twitter: 'iBeliever316',
    googleplus: '+MichaelSpencer',
    github: 'iBelieve',
  },
  timsueberkrueb: {
    name: 'Tim Süberkrüb',
    picture: '/images/avatars/avatar_tim.png',
    twitter: 'TimSueberkrueb',
    googleplus: '+TimSüberkrübDE',
    github: 'tim-sueberkrueb',
  },
  pierremtb: {
    name: 'Pierre Jacquier',
    picture: '/images/avatars/avatar_pierre.jpg',
    twitter: 'PierreJacquier',
    googleplus: '+PierreJacquierFR',
    github: 'pierremtb',
  },
  aldrog: {
    name: 'Andrew Penkrat',
    picture: '/images/ic_account_circle.png',
  },
  nickgermaine: {
    name: 'Nick Germaine',
    picture: '/images/ic_account_circle.png',
  },
  grecko: {
    name: 'Pierre-Yves Siret',
    picture: '/images/ic_account_circle.png',
  },
  zigapk: {
    name: 'Ziga Patacko Koderman',
    picture: '/images/avatars/avatar_zigapk.jpg',
    github: 'zigapk',
  },
} as const;
