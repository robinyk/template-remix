import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
	return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
	return (
		<>
			<header>
				<div className='container py-4'></div>
			</header>
			<main></main>
			<footer></footer>
		</>
	)
}
