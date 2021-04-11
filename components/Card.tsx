import styles from '../styles/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRightCircle } from 'react-icons/fi';
import useInStock from '../hooks/useInStock';

const Card = ({ product, index }): JSX.Element => {
	const [inStock] = useInStock(product);
	const noStock = (
		<div className={styles['no-stock']}>
			<h4>OUT OF STOCK</h4>
		</div>
	);
	return (
		<Link href={`/products/${index + 1}`}>
			<a className={styles['card-bkg']}>
				<div className={styles.hover}>
					<span>
						<FiArrowRightCircle
							style={{
								height: '75px',
								width: '75px',
								color: 'white',
							}}
						/>
					</span>
				</div>
				<div className={styles.img}>
					<Image
						layout='fill'
						objectFit='cover'
						alt='yea'
						src={`/img/${product.img}`}
					/>
				</div>
				{!inStock ? noStock : null}

				<div className={styles.info}>
					<h3>{product.name}</h3>
					<h4>${product.price}</h4>
				</div>
			</a>
		</Link>
	);
};

export default Card;
