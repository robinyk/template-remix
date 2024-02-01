import path from 'path'

import { unstable_vitePlugin as remix } from '@remix-run/dev'
import tsconfigPaths from 'vite-tsconfig-paths'

/** @type {import('vite').UserConfig} */
export default {
	plugins: [
		remix({
			ignoredRouteFiles: ['**/.*']
		}),
		tsconfigPaths()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './app')
		}
	},
	server: {
		host: true,
		port: 5173
	}
}
