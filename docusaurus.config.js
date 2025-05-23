// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer";
const IS_CHINA_SITE = process.env.CHINA === 'true';
const ICP_LICENSE = process.env.ICP_LICENSE;


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
        titleColor: "white",
        ICP_LICENSE: ICP_LICENSE,
        // 是否为中国站点
        IS_CHINA_SITE: IS_CHINA_SITE,
    },

    markdown: {
        mermaid: true,
    },

    title: '插件翻译文档',
    tagline: '插件翻译文档',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: IS_CHINA_SITE ? 'https://plugin.8aka.cn' : 'https://plugin.8aka.org',

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
                        require.resolve('./src/css/github.css'),
                        require.resolve('./src/css/ad.css'),
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
            {projectId: "pxc3osta7p"},
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
            }], [
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
            }], [
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
            }], [
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
            }], [
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
            }], [
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
        , [
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
                                href: '/intro',
                                label: '主页',
                            },
                            {
                                href: '/ShortDoc/intro',
                                label: '短文档',
                            },
                            {
                                label: 'BetterHud',
                                href: '/BetterHud/intro',
                            },
                            {
                                label: 'HuskClaims',
                                href: '/HuskClaims/intro'
                            },
                            {
                                label: 'HuskTowns',
                                href: '/HuskTowns/intro'
                            },
                            {
                                label: 'BlueMap',
                                href: '/BlueMap/intro'
                            },
                            {
                                label: 'ChestCommands',
                                href: '/ChestCommands/intro'
                            },
                            {
                                label: 'LevelledMobs',
                                href: '/LevelledMobs/intro'
                            }, {
                                label: 'Sonar',
                                href: '/Sonar/intro'
                            }, {
                                label: 'WeaponMechanics',
                                href: '/WeaponMechanics/intro'
                            }, {
                                label: 'ViaVersion',
                                href: '/viaversion/intro'
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
                        href: "https://github.com/8aka-Team/NitWikit",
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
                additionalLanguages: [
                    'java', 'kotlin', 'groovy', 'scala',
                    'bash', 'powershell',
                    'python', 'ruby', 'php', 'go', 'rust',
                    'c', 'cpp', 'csharp',
                    'sql', 'json', 'yaml', 'toml',
                    'css', 'scss', 'less',
                    'javascript', 'typescript', 'jsx', 'tsx',
                    'markup', 'markdown',
                    'nginx', 'docker', 'diff'
                ],
                defaultLanguage: 'plaintext',
                magicComments: [
                    {
                        className: 'theme-code-block-highlighted-line',
                        line: 'highlight-next-line',
                        block: {start: 'highlight-start', end: 'highlight-end'},
                    },
                    {
                        className: 'code-block-error-line',
                        line: 'error-next-line',
                        block: {start: 'error-start', end: 'error-end'},
                    },
                ],
            },
            // 颜色随系统切换
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            mermaid: {
                theme: {light: "neutral", dark: "dark"},
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
