import { useState, useEffect } from 'react';

const useInStock = product => {
	const [inStock, setInStock] = useState(true);
	const [sizesInStock, setSizesInStock] = useState();
	useEffect(() => {
		setInStock(product.totalStock > 0);
	}, [product]);

	return [inStock, sizesInStock];
};

export default useInStock;
