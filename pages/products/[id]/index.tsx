import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../../styles/Product.module.css';

const product = ({ product }): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;
	const checkInStock = () => {
		const outOfStockItems = product.sizes.filter(size => size.available);
		return outOfStockItems.length !== 0;
	};
	const [inStock, setInStock] = useState(checkInStock);
	const [addToCart, setAddToCart] = useState();
	useEffect(() => {
		let cartElement;
		if (inStock) cartElement = <button>Add to cart</button>;
		else cartElement = <button disabled>Sold out</button>;
		setAddToCart(cartElement);
	}, [inStock]);

	if (!product) return <h1>Product Not Found</h1>;
	return (
		<div className={styles.wrapper}>
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
					<select name='size' disabled={!inStock} defaultValue='none'>
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
				{addToCart}
				<p>{product.desc}</p>
			</div>
		</div>
	);
};

export default product;
export const getServerSideProps = async context => {
	const res = await fetch(
		`http://localhost:3000/api/products/${context.params.id}`
	);
	if (res.status !== 200) return { props: { product: null } };
	const product = await res.json();

	return { props: { product } };
};
