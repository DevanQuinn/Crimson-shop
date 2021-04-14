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
					<h2>CRIMSON</h2>
					<h3>ATHLETICS</h3>
				</a>
			</Link>
			<Link href='/about'>
				<a className={styles.link}>
					<h3>About</h3>
				</a>
			</Link>
			<div className='snipcart-checkout'>
				<div className={styles.button}>
					<LocalMallIcon />
					<div className={styles['cart-count']}>
						<span className='snipcart-items-count' />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
