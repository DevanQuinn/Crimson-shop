import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { BsArrowRightShort } from 'react-icons/bs';

const Home = (): JSX.Element => {
	return (
		<>
			<div className={styles['header-wrapper']}>
				<span className={styles['over-img-info']}>
					<h1>New Drop April 21st</h1>
					<Link href='/catalog'>
						<div className={styles['catalog-link']}>
							<a>View Current Catalog</a>
							<BsArrowRightShort
								style={{
									width: '1.6em',
									height: 'auto',
								}}
							/>
						</div>
					</Link>
				</span>
				<Image src='/img/header.png' layout='fill' objectFit='cover' />
			</div>
		</>
	);
};

export default Home;
