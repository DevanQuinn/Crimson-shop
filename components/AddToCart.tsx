import { useRef } from 'react';

const AddToCart = ({ info, inStock, optional = null }): JSX.Element => {
	const buttonRef = useRef(null);
	const attr = {
		'data-item-id': info.id,
		'data-item-price': info.product.price,
		'data-item-url': `/products/${info.id}`,
		'data-item-description': info.product.description,
		'data-item-image': info.product.image,
		'data-item-name': info.product.name,
		disabled: !inStock,
	};
	const optionalAttr = optional
		? {
				'data-item-custom1-required': 'true',
				'data-item-custom1-name': optional?.name,
				'data-item-custom1-options': optional?.options,
				'data-item-custom1-value': optional?.selectedSize,
		  }
		: null;

	return (
		<button
			ref={buttonRef}
			className='snipcart-add-item'
			{...attr}
			{...optionalAttr}
		>
			Add to cart
		</button>
	);
};

export default AddToCart;
