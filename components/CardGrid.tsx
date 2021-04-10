import styles from '../styles/Card.module.css';
import Card from './Card';

const CardGrid = (): JSX.Element => {
	return (
		<div className={styles.grid}>
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardGrid;
