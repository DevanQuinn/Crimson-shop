import CardGrid from '../components/CardGrid';

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

export const getServerSideProps = async () => {
	const res = await fetch('http://localhost:3000/api/products');
	const catalog = await res.json();
	return { props: { products: catalog } };
};
