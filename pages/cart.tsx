import { useContext, useEffect } from 'react';

const cart = (): JSX.Element => {
	useEffect(() => {
		localStorage.setItem('cartData', JSON.stringify([{ id: '1' }]));
		console.log(localStorage.getItem('cartData'));
	}, []);
	return <h1 className='heading-title'>Cart</h1>;
};

export default cart;
