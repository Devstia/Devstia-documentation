import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  server: {
    host: true
  },
  lastUpdated: true,
  cleanUrls: true,
  base: '/documentation',
  title: "Devstia Documentation",
  description: "The technical documentation website for Devstia.",
  head: [
    ['link', { rel: 'icon', sizes: 'any', href: 'https://devstia.com/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Devstia.com', link: 'https://devstia.com' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'About Devstia', link: '/introduction/about' },
          { text: 'Devstia Personal Web', link: '/introduction/devstia-personal-web' },
          { text: 'Devstia Cloud Connect', link: '/introduction/devstia-cloud-connect' }
        ]
      },
      {
        text: 'QuickStart',
        collapsed: false,
        items: [
          { text: 'About QuickStart', link: '/quickstart/about' },
          { text: 'Create a new website', link: '/quickstart/create-a-new-website' },
          { text: 'Remove or copy a website', link: '/quickstart/remove-or-copy-a-website' },
          { text: 'Import or export a website', link: '/quickstart/import-or-export-a-website' },
          { text: 'Blueprint Creator API', link: '/quickstart/blueprint-creator-api' }
        ]
      },
      {
        text: 'Developer Tools',
        collapsed: false,
        items: [
          { text: 'Open VSCode', link: '/developer-tools/openvscode' },
          { text: 'MailCatcher', link: '/developer-tools/mailcatcher' },
          { text: 'NodeApp Bootstrap API', link: '/developer-tools/nodeapp-bootstrap-api' }
        ]
      },
      {
        text: 'Hestia Control Panel',
        collapsed: false,
        items: [
          { text: 'About HestiaCP', link: '/hestia-control-panel/about' },
          { text: 'User Guide', link: '/hestia-control-panel/user-guide' },
          { text: 'Server Administration', link: '/hestia-control-panel/server-administration' },
          { text: 'API', link: '/hestia-control-panel/api' },
          { text: 'CLI', link: '/hestia-control-panel/cli' }
        ]
      },
      {
        text: 'Pluginable',
        collapsed: false,
        items: [
          { text: 'About Pluginable', link: '/pluginable/about' },
          { text: 'HCPP API', link: '/pluginable/hcpp-api' },
          { text: 'Plugins', link: '/pluginable/plugins'}
        ]
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'License', link: '/reference/license' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Devstia' },
      { icon: 'twitter', link: 'https://x.com/devstia_com' },
      { icon: 'facebook', link: 'https://www.facebook.com/devstia.page' }
    ],

		footer: {
			message: 'Released under the GPLv3 License.',
			copyright: 'Copyright © 2024-present Virtuosoft',
		},

    editLink: {
      pattern: 'https://github.com/Devstia/Devstia-documentation/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    }
  }
})
