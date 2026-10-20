// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';

// export default defineConfig({
//   integrations: [tailwind()],
//   site: 'https://amrpyt.github.io',
//   base: '/solar-panel-website-demo',
// });



import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://greensolor-website.netlify.app',
  base: '/',
});

