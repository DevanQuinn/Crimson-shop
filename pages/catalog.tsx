import CardGrid from '../components/CardGrid';
import server from '../server';
import { GetServerSideProps } from 'next';

const Catalog = ({ products }): JSX.Element => {
	return (
		<>
			<h1 className='heading-title'> Catalog</h1>
			<CardGrid products={products} />
		</>
	);
};

export default Catalog;

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${server}/api`);
	const products = await res.json();
	return { props: { products: products.items } };
};
