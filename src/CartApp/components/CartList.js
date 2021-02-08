import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function CartList() {

	const { cart, shop } = useSelector(state => state.shoppingCart);
	
	return(
		<Grid columns='3'>
			{cart.map(cartItem => (
			shop.map(item => (
				item.id === cartItem.id &&
				<Grid.Column>
					<CartItem cartItem={cartItem} item={item}/>
				</Grid.Column>
			))
			))}
		</Grid>	
	)
}

export default CartList;