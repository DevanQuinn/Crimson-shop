import { SiTiktok } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import { ImYoutube } from 'react-icons/im';

const Footer = ({ styles }): JSX.Element => {
	const socialStyle = { width: '40px', height: 'auto' };
	return (
		<footer className={styles.footer}>
			<h2>CONNECT WITH US</h2>
			<div className={styles.socials}>
				<a href='https://tiktok.com/@devanthedank' target='blank'>
					<SiTiktok style={socialStyle} />
				</a>
				<a href='https://instagram.com/devan_quinn' target='blank'>
					<FiInstagram style={socialStyle} />{' '}
				</a>
				<a href='https://youtube.com/rigers9000' target='blank'>
					<ImYoutube style={socialStyle} />{' '}
				</a>
			</div>

			<br />
			<p className={styles.copyright}>© 2021 Crimson Athletics Inc.</p>
		</footer>
	);
};

export default Footer;
