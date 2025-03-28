// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";


/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    experimental_faster: true,
  },

  customFields: {
    // 标题前缀
    titlePrefix: "主页",
    // 开始按钮文字
    start: "快速开始 🥵",
  },

  markdown: {
    mermaid: true,
  },

  title: '插件翻译文档',
  tagline: '插件翻译文档',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://plugins.8aka.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '8aka-Team', // Usually your GitHub org/user name.
  projectName: '插件翻译文档', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  clientModules: [
    require.resolve('./src/clientModules/adsModules.js'),
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  // clientModules: [
  //     require.resolve('./src/clientModules/routeModules.js')
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [
              require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],
  plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
    [
      "@gracefullight/docusaurus-plugin-microsoft-clarity",
      { projectId: "pxc3osta7p" },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'shortdoc',
        path: 'shortdoc',
        routeBasePath: 'ShortDoc',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'betterhud',
        path: 'betterhud',
        routeBasePath: 'BetterHud',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'huskclaims',
        path: 'huskclaims',
        routeBasePath: 'HuskClaims',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'husktowns',
        path: 'husktowns',
        routeBasePath: 'HuskTowns',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bluemap',
        path: 'bluemap',
        routeBasePath: 'BlueMap',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'chestcommands',
        path: 'chest-commands',
        routeBasePath: 'ChestCommands',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'levelledmobs',
        path: 'levelledmobs',
        routeBasePath: 'LevelledMobs',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'sonar',
        path: 'sonar',
        routeBasePath: 'Sonar',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'weaponmechanics',
        path: 'weaponmechanics',
        routeBasePath: 'WeaponMechanics',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }],[
        '@docusaurus/plugin-content-docs',
      {
        id: 'viaversion',
        path: 'viaversion',
        routeBasePath: 'viaversion',
        editUrl: 'https://github.com/8aka-Team/PluginsWiki/tree/main',
        sidebarPath: require.resolve('./sidebars.js'),
        editCurrentVersion: true,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }
    ]
    ,[
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/book.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // giscus: {
      //   repo: '8aka-Team/NitWikit',
      //   repoId: 'R_kgDOLkVR-A',
      //   category: 'Announcements',
      //   categoryId: 'DIC_kwDOLkVR-M4CkTAe'
      // },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
      // 标题渲染范围
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      // Replace with your project's social card
      // sidebar自动折叠
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '插件翻译文档',
        logo: {
          alt: 'Logo',
          src: 'img/book.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'dropdown',
            label: '翻译文档',
            position: 'left',
            items: [
              {
                href: 'https://plugins.8aka.org/intro',
                label: '主页',
              },
              {
                href: 'https://plugins.8aka.org/ShortDoc/intro',
                label: '短文档',
              },
              {
                label: 'BetterHud',
                href: 'https://plugins.8aka.org/BetterHud/intro',
              },
              {
                label: 'HuskClaims',
                href: 'https://plugins.8aka.org/HuskClaims/intro'
              },
              {
                label: 'HuskTowns',
                href: 'https://plugins.8aka.org/HuskTowns/intro'
              },
              {
                label: 'BlueMap',
                href: 'https://plugins.8aka.org/BlueMap/intro'
              },
              {
                label: 'ChestCommands',
                href: 'https://plugins.8aka.org/ChestCommands/intro'
              },
              {
                label: 'LevelledMobs',
                href: 'https://plugins.8aka.org/LevelledMobs/intro'
              },{
                label: 'Sonar',
                href: 'https://plugins.8aka.org/Sonar/intro'
              },{
                label: 'WeaponMechanics',
                href: 'https://plugins.8aka.org/WeaponMechanics/intro'
              },{
                label: 'ViaVersion',
                href: 'https://plugins.8aka.org/viaversion/intro'
              },
            ],
          },
          // 搜索框
          // {
          //   type: 'search',
          //   position: 'right',
          // },
          // GitHub
          {
            href: "https://github.com/8aka-Team/PluginWiki",
            className: "header-github-link",
            position: "right",
          },
          // 顶部导航栏显示切换语言按钮
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },

      // 底部链接
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '驿站主页',
                to: 'https://8aka.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/8aka-Team/PluginsWiki',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: 'QQ 群',
                href: 'https://qm.qq.com/q/dENGavSflK',
              },
            ],
          },
          {
            title: '友链',
            items: [
              {
                label: 'Continue Project',
                href: 'https://snowcutieowo.github.io/',
              },
            ],
          },
        ],
        // 底部版权信息
        copyright: `Copyright © ${new Date().getFullYear()} <b>8aka-Team</b>, All Rights Reserved.`,
      },
      // 深浅主题
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
      // 颜色随系统切换
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      mermaid: {
        theme: { light: "neutral", dark: "dark" },
      },
    }),

  themes: [
    '@docusaurus/theme-mermaid',
        [
        require.resolve("@easyops-cn/docusaurus-search-local"),
            ({
              hashed: true,
              language: ["en", "zh"],
              indexDocs: true,
              indexBlog: false,
              indexPages: false,
              docsRouteBasePath: "/"
            })
        ],
  ],
  scripts: [
    {
      src: '/autoload.js',
      defer: true,
    }
  ],
};

export default config;
