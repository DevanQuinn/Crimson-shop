import { SiTiktok } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { ImYoutube } from 'react-icons/im';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC<{ styles }> = ({ styles }) => {
	const socialStyle = { width: '2em', height: 'auto' };

	return (
		<footer className={styles.footer}>
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

			<div className={styles.misc}>
				<Link href='/contact'>
					<a className={styles.copyright}>
						<h4>Contact Us</h4>
					</a>
				</Link>
				|
				<Link href='/privacy'>
					<a className={styles.copyright}>
						<h4>Privacy Policy</h4>
					</a>
				</Link>
			</div>
			<h5 className={styles.copyright}>© 2021 Crimson Athletics Inc.</h5>
		</footer>
	);
};

export default Footer;
