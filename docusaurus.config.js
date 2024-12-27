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
  url: 'https://plugins.yizhan.wiki',
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
    // [
    //   "@gracefullight/docusaurus-plugin-microsoft-clarity",
    //   { projectId: "oyfswsvfpc" },
    // ],
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
      }]
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
            type: 'doc',
            docId: 'zNPCs.md',
            position: 'left',
            label: '简介',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '短文档',
            docsPluginId: 'shortdoc'
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
                to: 'https://yizhan.wiki',
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
                label: '服主资源导航页',
                href: 'http://mcnav.fun',
              },
              {
                label: 'CSKB 日冕知识库',
                href: 'https://kb.corona.studio',
              },
              {
                label: 'McRes 灵依资源站',
                href: 'https://mcres.cn/',
              },
              {
                label: 'Tinksp 资源站',
                href: 'https://www.tinksp.com',
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

      // 搜索
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'D1KV1BYF3B',
      //
      //   // Public API key: it is safe to commit it
      //   apiKey: '4bb3573e59f2c49f30f057ce54edab3f',
      //
      //   indexName: 'yizhan',
      //
      // },
      mermaid: {
        theme: { light: "neutral", dark: "dark" },
      },
    }),

  themes: [
    '@docusaurus/theme-mermaid'

  ],
  scripts: [
    {
      src: '/autoload.js',
      defer: true,
    },
  ],
};

export default config;
