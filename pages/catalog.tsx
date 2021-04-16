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
	const request = await fetch(`${'http://localhost:3000'}/api`);
	const json = await request.json();
	return { props: { products: json.items } };
};
