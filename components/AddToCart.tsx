const AddToCart = ({ info, inStock, optional = null }): JSX.Element => {
	const attr = {
		'data-item-id': info.id,
		'data-item-price': info.product.price,
		'data-item-url': `/products/${info.id}`,
		'data-item-description': info.product.desc,
		'data-item-image': `/img/${info.product.img}`,
		'data-item-name': info.product.name,
		disabled: !inStock,
	};
	const optionalAttr = {
		'data-item-custom1-name': optional?.name,
		'data-item-custom1-options': optional?.options,
		'data-item-custom1-value': optional?.selectedSize,
	};
	console.log(optionalAttr);
	return (
		<button className='snipcart-add-item' {...attr} {...optionalAttr}>
			Add to cart
		</button>
	);
};

export default AddToCart;
