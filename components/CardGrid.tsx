import styles from '../styles/Card.module.css';
import Card from './Card';

const CardGrid = ({ products }): JSX.Element => {
	return (
		<div className={styles.grid}>
			{products.map((item, idx) => {
				return <Card product={item} index={idx} key={idx} />;
			})}
		</div>
	);
};

export default CardGrid;
