import Link from 'next/link';

const Nav = ({ styles }): JSX.Element => {
	return (
		<nav className={styles.nav}>
			<hr className={styles.hr} />
			<Link href='/catalog'>
				<a className={styles.link}>
					<h3>Catalog</h3>
				</a>
			</Link>
			<Link href='/'>
				<a className={styles.title}>
					<h1>CRIMSON</h1>
				</a>
			</Link>
			<Link href='/about'>
				<a className={styles.link}>
					<h3>About</h3>
				</a>
			</Link>
			<hr className={styles.hr} />
		</nav>
	);
};

export default Nav;
