import { SiTiktok } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { ImYoutube } from 'react-icons/im';
import Link from 'next/link';

const Footer = ({ styles }): JSX.Element => {
	const socialStyle = { width: '2em', height: 'auto' };

	return (
		<footer className={styles.footer}>
			<h2>CONNECT WITH US</h2>
			<div className={styles.socials}>
				<a
					href='https://tiktok.com/@devanthedank'
					target='blank'
					aria-label='tiktok'
				>
					<SiTiktok style={socialStyle} />
				</a>
				<a
					href='https://instagram.com/devan_quinn'
					target='blank'
					aria-label='instagram'
				>
					<FiInstagram style={socialStyle} />
				</a>
				<a
					href='https://youtube.com/rigers9000'
					target='blank'
					aria-label='youtube'
				>
					<ImYoutube style={socialStyle} />
				</a>
			</div>

			<Link href='/contact'>
				<a className={styles.copyright}>
					<h3>Contact Us</h3>
				</a>
			</Link>
			<div className={styles.misc}>
				<p className={styles.copyright}>© 2021 Crimson Athletics Inc.</p>
				<Link href='/privacy'>
					<a className={styles.copyright}>Privacy Policy</a>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
