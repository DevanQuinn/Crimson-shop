import { useState, useEffect } from 'react';

const useInStock = product => {
	const [inStock, setInStock] = useState(true);
	const [sizesInStock, setSizesInStock] = useState();
	useEffect(() => {
		const sizes = product.sizes.filter(size => !size.available);
		const checkStock = sizes.length !== product.sizes.length;
		if (checkStock) setSizesInStock(sizes);
		if (checkStock !== inStock) setInStock(checkStock);
	}, [product]);

	return [product.available, sizesInStock];
};

export default useInStock;
