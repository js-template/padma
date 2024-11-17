// @ts-ignore
import nextra from 'nextra'

const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
	staticImage: true,
	latex: true,
	flexsearch: {
		codeblocks: true,
	},
	defaultShowCopyCode: true
	

})

export default withNextra({
	reactStrictMode: true,
	// eslint: {
	// 	// Eslint behaves weirdly in this monorepo.
	// 	ignoreDuringBuilds: true,
	// },
		images: {
		unoptimized: true,
	  },
	  reactStrictMode: true,
	  swcMinify: true,
	  trailingSlash: true,
	  output: "export",
})

