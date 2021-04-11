import CardGrid from '../components/CardGrid';
import { catalog } from './api/products.json';

const Catalog = ({ products }): JSX.Element => {
	return (
		<>
			<h1 className='heading-title'> Catalog</h1>
			<CardGrid products={products} />
		</>
	);
};

export default Catalog;

export const getStaticProps = async () => {
	return { props: { products: catalog } };
};
