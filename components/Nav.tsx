import Link from 'next/link';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useRef, useEffect, useState } from 'react';

const Nav = ({ styles }): JSX.Element => {
	const [isVisible, setIsVisible] = useState(true);
	const titleRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				// isIntersecting is true when element and viewport are overlapping
				// isIntersecting is false when element and viewport don't overlap
				setIsVisible(entries[0].isIntersecting);
			},
			{ threshold: [0] }
		);
		observer.observe(titleRef.current);
		return observer.unobserve(titleRef.current);
	});

	return (
		<nav className={styles.nav}>
			<hr className={styles.hr} />
			<Link href='/catalog'>
				<a className={styles.link}>
					<h3>Catalog</h3>
				</a>
			</Link>
			<Link href='/'>
				<a className={styles.title} ref={titleRef}>
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
				<div className={!isVisible ? styles['fixed-button'] : styles.button}>
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
