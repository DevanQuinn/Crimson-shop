import Link from 'next/link';
import LocalMallIcon from '@material-ui/icons/LocalMall';

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
					<h6>ATHLETICS</h6>
				</a>
			</Link>
			<Link href='/about'>
				<a className={styles.link}>
					<h3>About</h3>
				</a>
			</Link>
			<button className={styles.button}>
				<LocalMallIcon />
			</button>
		</nav>
	);
};

export default Nav;
