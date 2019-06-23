import Link from 'next/link';
import Head from 'next/head';

function DefaultLayout({ children, title }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta
					name="description"
					content="Genera tu octágono como el ministerio de Salud del Perú"
				/>
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Eduardo P. Rivero" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@eperedo" />
				<meta name="twitter:title" content="Genera tu octágono" />
				<meta
					name="twitter:description"
					content="Genera tu octágono como el ministerio de Salud del Perú"
				/>
				<meta
					name="twitter:image"
					content="https://octagonos.netlify.com/static/example.png"
				/>

				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Genera tu octágono como el ministerio de Salud del Perú"
				/>
				<meta property="og:url" content="https://octagonos.netlify.com" />
				<meta
					property="og:image"
					content="https://octagonos.netlify.com/static/example.png"
				/>
			</Head>
			<style global jsx>{`
				* {
					font-family: Arial;
				}
			`}</style>
			<style jsx>{`
				ul {
					display: flex;
					justify-content: center;
					list-style: none;
				}

				li {
					margin: 10px;
				}
			`}</style>
			<nav>
				<ul>
					<li>
						<Link prefetch href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link prefetch href="/about">
							<a>FAQ</a>
						</Link>
					</li>
				</ul>
			</nav>
			{children}
		</div>
	);
}

export default DefaultLayout;
