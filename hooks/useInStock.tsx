import { useState, useEffect } from 'react';
import { productType } from '../types';

const useInStock = (product: productType) => {
	const [inStock, setInStock] = useState(true);
	// const [sizesInStock, setSizesInStock] = useState();
	useEffect(() => {
		setInStock(product.totalStock > 0);
	}, [product]);

	return [inStock];
};

export default useInStock;
