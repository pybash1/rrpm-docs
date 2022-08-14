// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RRPM Documentation',
  tagline: 'Complete documentation for the RRPM command line tool',
  url: 'https://rrpm.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rrpm-org', // Usually your GitHub org/user name.
  projectName: 'rrpm', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'rrpm',
          routeBasePath: 'rrpm',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/rrpm-org/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "rrpmpkg",
        path: "rrpmpkg",
        routeBasePath: "rrpmpkg",
        sidebarPath: require.resolve('./sidebarsRrpmpkg.js'),
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RRPM',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'RRPM',
          },
          {
            to: '/rrpmpkg/intro',
            position: 'left',
            label: 'RRPMPkg',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'RRPM',
                to: '/rrpm/intro',
              },
              {
                label: 'RRPMPkg',
                to: '/rrpmpkg/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ax-a-dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'RRPMPkg',
                to: 'https://github.com/rrpm-org/rrpmpkg',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rrpm-org/rrpm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RRPM. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
