import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Product.module.css';
import useInStock from '../../../hooks/useInStock';
import { GetStaticProps, GetStaticPaths } from 'next';
import { catalog } from '../../api/products.json';
import AddToCart from '../../../components/AddToCart';
import { BiArrowBack } from 'react-icons/bi';

const item = ({ product }): JSX.Element => {
	const router = useRouter();
	const { id } = router.query;
	const [inStock] = useInStock(product);
	const getFirstAvailableSize = (): any => {
		const firstSize = product.sizes.forEach(size => size.isAvailable);
		return firstSize;
	};
	const [selectedSize, setSelectedSize] = useState(() =>
		getFirstAvailableSize()
	);

	const getCartSizes = (): string => {
		const sizes: string[] = product.sizes.map(size => {
			if (size.available) return size.name.toString();
		});
		// Remove blank entries
		const filteredSizes = sizes.filter(size => size);
		return filteredSizes.join('|');
	};
	const cartInfo = {
		info: { id, product },
		optional: {
			name: 'Size',
			options: getCartSizes(),
			selectedSize,
		},
	};
	const cartElement: JSX.Element = inStock ? (
		<AddToCart
			info={cartInfo.info}
			optional={product.sizes.length ? cartInfo.optional : null}
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
						src={`/img/${product.img}`}
						alt={`image product id ${id}`}
					/>
				</div>

				<div className={styles['right-column']}>
					<h1>{product.name}</h1>
					<h2 className={styles.price}>${product.price}</h2>
					<hr style={{ visibility: 'hidden' }} />
					{product.sizes.length ? (
						<div>
							<label htmlFor='size'>Size</label>
							<select
								name='size'
								disabled={!inStock}
								defaultValue={getFirstAvailableSize()?.name}
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
					) : null}
					{cartElement}
					<hr style={{ color: 'white', width: '100%', marginTop: '50px' }} />

					{product.desc.split('{NEWLINE}').map((line, idx) => (
						<p key={idx} className={styles.desc}>
							{line}
						</p>
					))}
				</div>
			</div>
		</>
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
