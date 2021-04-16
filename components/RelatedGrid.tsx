import PropTypes from 'prop-types';
import styles from '../styles/RelatedGrid.module.css';
import Card from './Card';

const RelatedGrid = ({
	products,
	featuredId,
	length = 3,
	handleLoadMore,
}): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>WHY NOT BUY ONE OF THESE TOO?</h2>
			<div className={styles['flex-wrapper']}>
				<div className={styles.flex}>
					{products.map((item, idx) => {
						if (item.userDefinedId === featuredId || idx > length) return;
						return <Card product={item} key={idx} />;
					})}
				</div>
			</div>
			{products.length > length && (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button onClick={handleLoadMore} className={styles['load-more']}>
						Load More
					</button>
				</div>
			)}
		</div>
	);
};

RelatedGrid.propTypes = {
	products: PropTypes.array.isRequired,
	featuredId: PropTypes.string.isRequired,
	length: PropTypes.number,
};

export default RelatedGrid;
