const btoa = require('btoa');
import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Product.module.css';
import useInStock from '../../../hooks/useInStock';
import AddToCart from '../../../components/AddToCart';
import { BiArrowBack } from 'react-icons/bi';
import RelatedGrid from '../../../components/RelatedGrid';
import { productType } from '../../../types';

const item: FC<{ featuredProduct: productType; products: productType[] }> = ({
	featuredProduct,
	products,
}) => {
	const router = useRouter();
	const { id } = router.query;
	const [inStock] = useInStock(featuredProduct);
	const getFirstAvailableSize = (): any => {
		const firstSize = featuredProduct.variants.filter(size => size.stock > 0);
		if (!featuredProduct.variants.length) return null;
		return firstSize[0].variation[0].option;
	};
	const [selectedSize, setSelectedSize] = useState<string>(() =>
		getFirstAvailableSize()
	);
	const [relatedLength, setRelatedLength] = useState<number>(3);
	const cartInfo = {
		info: { id, product: featuredProduct },
		optional: {
			name: 'Size',
			options: featuredProduct.customFields[0]?.options,
			selectedSize,
		},
	};
	const cartElement: JSX.Element = inStock ? (
		<AddToCart
			info={cartInfo.info}
			optional={featuredProduct.variants.length ? cartInfo.optional : null}
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
						src={featuredProduct.image}
						alt={`image product id ${id}`}
					/>
				</div>

				<div className={styles['right-column']}>
					<h1>{featuredProduct.name}</h1>
					<h2 className={styles.price}>${featuredProduct.price}</h2>
					<hr style={{ visibility: 'hidden' }} />
					{featuredProduct.variants.length ? (
						<div>
							<label htmlFor='size'>Size</label>
							<select
								name='size'
								disabled={!inStock}
								defaultValue={getFirstAvailableSize()}
								onChange={e => setSelectedSize(e.target.value)}
							>
								{featuredProduct.variants.map((size, idx) => {
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

					{featuredProduct.description.split('{NEWLINE}').map((line, idx) => (
						<p key={idx} className={styles.desc}>
							{line}
						</p>
					))}
				</div>
			</div>
			<RelatedGrid
				products={products}
				featuredId={featuredProduct.userDefinedId}
				length={relatedLength}
				handleLoadMore={() => setRelatedLength(relatedLength + 3)}
			/>
		</>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const { id } = context.params;
	const res = await fetch(`https://app.snipcart.com/api/products/`, {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	if (res.status !== 200) return { notFound: true };
	const json = await res.json();
	const featuredProduct = json.items.filter(
		product => product.userDefinedId === id.toString()
	);
	if (!featuredProduct) return { notFound: true };
	return {
		props: { featuredProduct: featuredProduct[0], products: json.items },
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`https://app.snipcart.com/api/products`, {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const catalog = await res.json();
	const ids = catalog.items.map(product => product.userDefinedId);
	const paths = ids.map(id => {
		return {
			params: { id: id.toString() },
		};
	});

	return { paths, fallback: false };
};
export default item;
