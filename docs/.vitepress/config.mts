import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sky Follower Bridge: Free X to Bluesky Migration Tool",
  lastUpdated: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://www.sky-follower-bridge.dev'
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3399ff' }],
    ['meta', { name: 'google-site-verification', content: 'COM1KLUeDMoJ5NU1hCSO3rQb9zuQ6EGpACrNKXtoDnA' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Sky Follower Bridge' }],
    ['meta', { property: 'og:site_name', content: 'Sky Follower Bridge' }],
    ['meta', { property: 'og:image', content: 'https://www.sky-follower-bridge.dev/images/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://www.sky-follower-bridge.dev/' }],
    ['meta', { property: 'og:description', content: 'Instantly find and follow the same users from your 𝕏 followers on Bluesky' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/favicon/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
  ],

  description: "Effortlessly migrate your followers from X, Twitter, and Threads to Bluesky with our free browser extension.",
  themeConfig: {
    siteTitle: "Sky Follower Bridge",
    logo: {
      src: "/images/logo.webp",
      alt: "Sky Follower Bridge Logo",
    },

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Getting Started", items: [
          { text: "For 𝕏", link: "/get-started" },
          { text: "For Threads", link: "/get-started-for-threads" },
        ]
      },
      { text: "Troubleshooting", link: "/troubleshooting" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kawamataryo/sky-follower-bridge",
      },
      {
        icon: "bluesky",
        link: "https://bsky.app/profile/kawamataryo.bsky.social",
      },
      {
        icon: "x",
        link: "https://x.com/KawamataRyo",
      },
      {
        icon: "kofi",
        link: "https://ko-fi.com/kawamataryo",
      },
    ],

    outline: {
      level: "deep",
    },

    editLink: {
      pattern:
        "https://github.com/kawamataryo/sky-follower-bridge/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Ryo Kawamata'
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      title: 'Sky Follower Bridge: 無料のXからBlueskyへの移行ツール',
      description: '無料のブラウザ拡張機能で、X、Twitter、ThreadsからBlueskyへフォロワーを簡単に移行。',
      themeConfig: {
        siteTitle: "Sky Follower Bridge",
        nav: [
          { text: "Home", link: "/" },
          { text: "使い方", link: "/ja/get-started" },
          { text: "トラブルシューティング", link: "/ja/troubleshooting" },
        ],
      }
    },
    it: {
      label: "Italiano",
      lang: "it",
      link: "/it/",
      title: 'Sky Follower Bridge: Strumento gratuito di migrazione da X a Bluesky',
      description: 'Migra facilmente i tuoi follower da X, Twitter e Threads a Bluesky con la nostra estensione del browser gratuita.',
      themeConfig: {
        siteTitle: "Sky Follower Bridge",
        nav: [
          { text: "Home", link: "/" },
          { text: "Iniziare", link: "/it/get-started" },
          { text: "Risoluzione dei problemi", link: "/it/troubleshooting" },
        ],
      }
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      title: 'Sky Follower Bridge: 免费的X到Bluesky迁移工具',
      description: '使用我们的免费浏览器扩展，轻松将您的关注者从X、Twitter和Threads迁移到Bluesky。',
      themeConfig: {
        siteTitle: "Sky Follower Bridge",
        nav: [
          { text: "首页", link: "/" },
          { text: "入门", link: "/zh/get-started" },
          { text: "故障排除指南", link: "/zh/troubleshooting" },
        ],
      }
    },
    fr: {
      label: "Français",
      lang: "fr",
      link: "/fr/",
      title: 'Sky Follower Bridge: Outil gratuit de migration de X vers Bluesky',
      description: 'Migrez facilement vos abonnés de X, Twitter et Threads vers Bluesky avec notre extension de navigateur gratuite.',
      themeConfig: {
        siteTitle: "Sky Follower Bridge",
        nav: [
          { text: "Accueil", link: "/" },
          { text: "Commencer", link: "/fr/get-started" },
          { text: "Résolution des problèmes", link: "/fr/troubleshooting" },
        ],
      }
    },
    pt: {
      label: "Português",
      lang: "pt",
      link: "/pt/",
      title: 'Sky Follower Bridge: Ferramenta gratuita de migração de X para Bluesky',
      description: 'Migre facilmente seus seguidores de X, Twitter e Threads para Bluesky com nossa extensão de navegador gratuita.',
      themeConfig: {
        siteTitle: "Sky Follower Bridge",
        nav: [
          { text: "Início", link: "/" },
          { text: "Introdução", link: "/pt/get-started" },
          { text: "Guia de Solução de Problemas", link: "/pt/troubleshooting" },
        ],
      }
    },
    es: {
      label: "Español",
      lang: "es",
      link: "/es/",
      title: 'Sky Follower Bridge: Herramienta gratuita de migración de X a Bluesky',
      description: 'Migra fácilmente tus seguidores de X, Twitter y Threads a Bluesky con nuestra extensión de navegador gratuita.',
      themeConfig: {
        siteTitle: "Sky Follower Bridge",
        nav: [
          { text: "Inicio", link: "/" },
          { text: "Comenzando", link: "/es/get-started" },
          { text: "Guía de solución de problemas", link: "/es/troubleshooting" },
        ],
      }
    },
    ko: {
      label: "한국어",
      lang: "ko",
      link: "/ko/",
      title: 'Sky Follower Bridge: 무료 X에서 Bluesky로 팔로워 이동 도구',
      description: '무료 브라우저 확장 프로그램으로 X, Twitter, Threads에서 Bluesky로 팔로워를 쉽게 이동할 수 있습니다.',
      themeConfig: {
        siteTitle: "Sky Follower Bridge",
        nav: [
          { text: "홈", link: "/" },
          { text: "시작하기", link: "/ko/get-started" },
          { text: "문제 해결", link: "/ko/troubleshooting" },
        ],
      }
    }
  }
});
