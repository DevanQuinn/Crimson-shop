import CardGrid from '../components/CardGrid';
import server from '../server';

const Catalog = ({ products }): JSX.Element => {
	console.log(products);
	return (
		<>
			<h1 className='heading-title'> Catalog</h1>
			<CardGrid products={products} />
		</>
	);
};

export default Catalog;

export const getStaticProps = async () => {
	const res = await fetch(server + '/api/products');
	const catalog = await res.json();
	return { props: { products: catalog } };
};
