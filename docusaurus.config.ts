import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'uberdriver',
  tagline: 'Complete UI/UX & Flutter Code Documentation for VINCYUBER Driver App',
  favicon: 'img/favicon.ico',

  url: 'https://mmks735.github.io',
  baseUrl: '/uberdriver/',

  organizationName: 'mmks735',
  projectName: 'uberdriver',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/vincyuber-banner.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'uberdriver Docs',
      logo: {
        alt: 'uberdriver Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '🚐 Driver Screens',
        },
        {
          href: 'https://github.com/mmks735/uberdriver',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Core Flows',
          items: [
            {label: 'App Overview', to: '/'},
            {label: 'Onboarding & Splash', to: '/onboarding'},
            {label: 'Authentication & Setup', to: '/auth'},
            {label: 'Home & Operations', to: '/home'},
          ],
        },
        {
          title: 'Operations & Finance',
          items: [
            {label: 'QR Scanner & Boarding', to: '/qr-scanner'},
            {label: 'Refund Management', to: '/refund'},
            {label: 'Earnings & Payouts', to: '/earnings'},
            {label: 'Live GPS Tracking', to: '/tracking'},
          ],
        },
        {
          title: 'Vehicle & Account',
          items: [
            {label: 'Vehicle Profile', to: '/vehicle'},
            {label: 'Driver Documents', to: '/documents'},
            {label: 'Notifications', to: '/notifications'},
            {label: 'Security Settings', to: '/security-settings'},
            {label: 'Legal & Support', to: '/legal-support'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} uberdriver | VINCYUBER Driver App. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['dart', 'bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
