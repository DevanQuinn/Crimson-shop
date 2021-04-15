import Link from 'next/link';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useRef } from 'react';
import useVisible from '../hooks/useVisible';
import { useRouter } from 'next/router';
import NavLink from '../components/NavLink';

const Nav = ({ styles }): JSX.Element => {
	const path = useRouter().pathname;
	const titleRef = useRef(null);
	const isVisible = useVisible(titleRef);

	return (
		<header>
			<nav className={styles.nav}>
				<hr className={styles.hr} />
				<NavLink href='/catalog'>
					<h3>Catalog</h3>
				</NavLink>
				<Link href='/'>
					<a className={styles.title} ref={titleRef}>
						<h2>CRIMSON</h2>
						<h3>ATHLETICS</h3>
					</a>
				</Link>
				<NavLink href='/about'>
					<h3>About</h3>
				</NavLink>
				<div className='snipcart-checkout'>
					<div className={!isVisible ? styles['fixed-button'] : styles.button}>
						<LocalMallIcon style={{ marginBottom: '3px' }} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
