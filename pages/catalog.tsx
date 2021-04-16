import CardGrid from '../components/CardGrid';
import server from '../server';
import { GetServerSideProps } from 'next';
const btoa = require('btoa');

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
	const res = await fetch('https://app.snipcart.com/api/products', {
		headers: {
			Authorization: `Basic ${btoa(process.env.SNIPCART_API_KEY)}`,
			Accept: 'application/json',
		},
	});
	const json = await res.json();
	return { props: { products: json.items } };
};
