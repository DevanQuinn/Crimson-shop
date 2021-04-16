import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Product.module.css';
import useInStock from '../../../hooks/useInStock';
import { GetServerSideProps } from 'next';
import AddToCart from '../../../components/AddToCart';
import { BiArrowBack } from 'react-icons/bi';
import server from '../../../server';
const btoa = require('btoa');

const item = ({ product }): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;
	const [inStock] = useInStock(product);
	const getFirstAvailableSize = (): any => {
		const firstSize = product.variants.filter(size => size.stock > 0);
		if (!product.variants.length) return null;
		return firstSize[0].variation[0].option;
	};
	const [selectedSize, setSelectedSize] = useState(() =>
		getFirstAvailableSize()
	);
	const cartInfo = {
		info: { id, product },
		optional: {
			name: 'Size',
			options: product.customFields[0]?.options,
			selectedSize,
		},
	};
	const cartElement: JSX.Element = inStock ? (
		<AddToCart
			info={cartInfo.info}
			optional={product.variants.length ? cartInfo.optional : null}
			inStock
		/>
	) : (
		<button disabled>Sold out</button>
	);

	return (
		<>
			<Link href='/catalog'>
				<a className={styles['back-arrow']} aria-label='Back to catalog'>
					<BiArrowBack style={{ height: 'inherit', width: 'inherit' }} />
				</a>
			</Link>
			<div className={styles.wrapper}>
				<div className={styles['image-wrapper']}>
					<Image
						layout='fill'
						objectFit='contain'
						src={product.image}
						alt={`image product id ${id}`}
					/>
				</div>

				<div className={styles['right-column']}>
					<h1>{product.name}</h1>
					<h2 className={styles.price}>${product.price}</h2>
					<hr style={{ visibility: 'hidden' }} />
					{product.variants.length ? (
						<div>
							<label htmlFor='size'>Size</label>
							<select
								name='size'
								disabled={!inStock}
								defaultValue={getFirstAvailableSize()}
								onChange={e => setSelectedSize(e.target.value)}
							>
								{product.variants.map((size, idx) => {
									const isAvailable = size.stock > 0;
									return (
										<option
											value={size.variation[0].option}
											disabled={!isAvailable}
											key={idx}
										>
											{size.variation[0].option}
										</option>
									);
								})}
							</select>
						</div>
					) : null}
					{cartElement}
					<hr style={{ color: 'white', width: '100%', marginTop: '50px' }} />

					{product.description.split('{NEWLINE}').map((line, idx) => (
						<p key={idx} className={styles.desc}>
							{line}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

export const getStaticProps = async context => {
	const { id } = context.params;
	const res = await fetch(`https://app.snipcart.com/api/products/${id}`, {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	if (res.status !== 200) return { notFound: true };
	const json = await res.json();
	return { props: { product: json } };
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://app.snipcart.com/api/products`, {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const catalog = await res.json();
	const ids = catalog.items.map((_item, idx) => idx + 1);
	const paths = ids.map(id => {
		return {
			params: { id: id.toString() },
		};
	});

	return { paths, fallback: false };
};
export default item;
