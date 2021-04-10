import styles from '../styles/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ product }): JSX.Element => {
	return (
		<a className={styles['card-bkg']}>
			<div className={styles.hover}>
				<Link href={`/products/${product.id}`}>
					<button>View</button>
				</Link>
				<button>Add to cart</button>
			</div>
			<div className={styles.img}>
				<Image
					layout='fill'
					objectFit='cover'
					alt='yea'
					src={`/img/${product.img}`}
				/>
			</div>
			<div className={styles.info}>
				<h3>{product.name}</h3>
				<p>{product.price}</p>
			</div>
		</a>
	);
};

export default Card;
