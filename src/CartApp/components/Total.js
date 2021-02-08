import React from 'react';
import { useSelector } from 'react-redux';
import { Label } from 'semantic-ui-react';

function Total() {

	const initialValue = 0;
	const { cart, shop } = useSelector(state => state.shoppingCart);
	const totalQuantity = cart.reduce((acc, item) => {
		return acc + item.quantity
	}, initialValue);

	const totalPrice = cart.reduce((acc, item) => {
		return acc + (item.quantity* shop.find(elem => elem.id === item.id).price);
	}, initialValue);


	return(
		(cart.length > 0)&&<Label style={{fontSize: 14}}>{totalQuantity} products, total price: {totalPrice}$</Label>
	)
}

export default Total;