import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../../styles/Product.module.css';
import useInStock from '../../../hooks/useInStock';
import Popup from '../../../components/UI/Popup';
import { GetStaticProps, GetStaticPaths } from 'next';
import { catalog } from '../../api/products.json';

const item = ({ product }): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;
	const [inStock] = useInStock(product);
	const [selectedSize, setSelectedSize] = useState('none');
	const [popupOpen, setPopupOpen] = useState(false);
	const showPopup = () => {
		setPopupOpen(true);
	};
	const cartElement = (
		<button disabled={selectedSize === 'none' || !inStock} onClick={showPopup}>
			{inStock ? 'Add to cart' : 'Sold out'}
		</button>
	);

	return (
		<div className={styles.wrapper}>
			<Popup
				info={{ message: 'Added to cart' }}
				open={popupOpen}
				autoClose={5000}
				onClose={() => setPopupOpen(false)}
			/>
			<Image
				width='300'
				height='300'
				src={`/img/${product.img}`}
				alt={`image product id ${id}`}
			/>
			<div className={styles['left-column']}>
				<h1>{product.name}</h1>
				<h2 className={styles.price}>${product.price}</h2>
				<hr />
				<div>
					<select
						name='size'
						disabled={!inStock}
						defaultValue='none'
						onChange={e => setSelectedSize(e.target.value)}
					>
						<option value='none'>Select Size</option>
						{product.sizes.map((size, idx) => {
							const isAvailable = size.available;
							return (
								<option value={size.value} disabled={!isAvailable} key={idx}>
									{size.name}
								</option>
							);
						})}
					</select>
				</div>
				{cartElement}
				<p>{product.desc}</p>
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const { id } = context.params;
	const product = catalog[Number(id) - 1];
	if (!product) return { notFound: true };

	return { props: { product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const ids = catalog.map((_item, idx) => idx + 1);
	const paths = ids.map(id => {
		return {
			params: { id: id.toString() },
		};
	});

	return { paths, fallback: false };
};

export default item;
