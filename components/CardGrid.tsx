import { FC } from 'react';
import styles from '../styles/Card.module.css';
import Card from './Card';
import { productType } from '../types';

const CardGrid: FC<{ products: productType[] }> = ({ products }) => {
	return (
		<div className={styles.grid}>
			{products.map((item, idx) => {
				return <Card product={item} key={idx} />;
			})}
		</div>
	);
};

export default CardGrid;
