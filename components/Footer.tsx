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

			<br />
			<p className={styles.copyright}>© 2021 Crimson Athletics Inc.</p>
			<Link href='/privacy'>
				<a style={{ textDecoration: 'underline' }} className={styles.copyright}>
					Privacy Policy
				</a>
			</Link>
		</footer>
	);
};

export default Footer;
