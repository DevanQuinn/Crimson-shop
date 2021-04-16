import CardGrid from '../components/CardGrid';
import server from '../server';
import { GetServerSideProps } from 'next';

const Catalog = ({ products }): JSX.Element => {
	return (
		<>
			<h1 className='heading-title'> Catalog</h1>
			<h2>{products.status}</h2>
			{/* <CardGrid products={products} /> */}
		</>
	);
};

export default Catalog;

export const getServerSideProps: GetServerSideProps = async () => {
	const request = await fetch(`${server}/api`, {
		headers: {
			Authorization: `Basic ${Buffer.from(
				process.env.SNIPCART_API_KEY
			).toString('base64')}`,
			Accept: 'application/json',
		},
	});
	// const json = await request.json();
	console.log(request);
	return { props: { products: request.status } };
};
