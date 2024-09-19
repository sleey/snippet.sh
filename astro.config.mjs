import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'snippet.sh',
			head: [
				{
				  tag: 'script',
				  attrs: {
					src: 'https://stats.sleey.dev/js/script.js',
					'data-domain': 'snippet.sh',
					defer: true,
				  },
				},
			  ],
			social: {
				github: 'https://github.com/sleey/snippet.sh',
			},
			pagination: false,
			editLink: {
				baseUrl: 'https://github.com/sleey/snippet.sh/edit/main/docs/',
			  },
		}),
	],
});
