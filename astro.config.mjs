import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://xraycore.org',
  output: 'static',
  trailingSlash: 'always',
  integrations: [starlight({
    title: 'FAQ',
    defaultLocale: 'ru',
	  customCss: ['/src/styles/custom.css'],
    locales: {
      ru: {
        label: 'Русский',
        lang: 'ru',
        dir: 'ltr',
        translation: () => import('./src/i18n/ru.json'),
      },
      en: {
        label: 'English',
        lang: 'en',
        dir: 'ltr',
        translation: () => import('./src/i18n/en.json'),
      }
    },
	  sidebar: [
      {
        label: 'Разное',
        translations: {
          en: 'Miscellaneous'
        },
        autogenerate: { directory: 'misc' }
      },
      {
          label: 'Remnawave',
          translations: {
            en: 'Remnawave'
          },
          autogenerate: { directory: 'Remnawave' }
      }
	  ],	  
    social: [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/TheMelbine/xrayfaq'
      }
    ]
  }), sitemap(), react()],
  markdown: {
    syntaxHighlight: 'shiki',
  }
});