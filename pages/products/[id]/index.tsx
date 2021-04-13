import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../../styles/Product.module.css';
import useInStock from '../../../hooks/useInStock';
import Popup from '../../../components/UI/Popup';
import { GetStaticProps, GetStaticPaths } from 'next';
import { catalog } from '../../api/products.json';
import AddToCart from '../../../components/AddToCart';

const item = ({ product }): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;
	const [inStock] = useInStock(product);
	const [selectedSize, setSelectedSize] = useState('none');
	const [popupOpen, setPopupOpen] = useState(false);
	const showPopup = () => {
		setPopupOpen(true);
	};

	const getCartSizes = () => {
		const sizes = product.sizes.map(size => {
			if (size.available) return size.name.toString();
		});
		const filteredSizes = sizes.filter(size => size);
		return filteredSizes.join('|');
	};
	const cartInfo = {
		info: { id, product },
		optional: {
			name: 'Size',
			options: getCartSizes(),
		},
	};
	const cartElement = inStock ? (
		<AddToCart info={cartInfo.info} optional={cartInfo.optional} inStock />
	) : (
		<button disabled>Sold out</button>
	);

	return (
		<div className={styles.wrapper}>
			{/* <Popup
				info={{ message: 'Added to cart' }}
				open={popupOpen}
				autoClose={5000}
				onClose={() => setPopupOpen(false)}
			/> */}
			<div className={styles['image-wrapper']}>
				<Image
					layout='fill'
					objectFit='contain'
					src={`/img/${product.img}`}
					alt={`image product id ${id}`}
				/>
			</div>

			<div className={styles['right-column']}>
				<h1>{product.name}</h1>
				<h2 className={styles.price}>${product.price}</h2>
				<hr />
				<div>
					<label htmlFor='size'>Size</label>
					<select
						name='size'
						disabled={!inStock}
						defaultValue={product.sizes[0].name}
						onChange={e => setSelectedSize(e.target.value)}
					>
						{product.sizes.map((size, idx) => {
							const isAvailable = size.available;
							return (
								<option value={size.name} disabled={!isAvailable} key={idx}>
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
