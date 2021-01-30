import React from 'react';
import { Grid, Image, Card, Button, Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/actions/cart';

function Cart() {

	const { cart, shop } = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	const removeFromCart = (id) => {
		dispatch(removeItem(id));
	}

	const increase = (id) => {
		dispatch(increaseQuantity(id));
	}

	const decrease = (id) => {
		dispatch(decreaseQuantity(id));
	}

	return(
		<Grid columns='3'>
			{cart.map(cartItem => (
			shop.map(item => (
				item.id === cartItem.id &&
				<Grid.Column>
					<Card 
					key={item.id} 
					style={{ 
						height: 500,
						padding: 10 }}>
						<Image 
						src={item.image} 
						wrapped ui={false} />
						<Card.Content 
						style={{ position: 'absolute', bottom: 10 }}>
							<Card.Header 
							style={{display: 'inline-block', textTransform: 'uppercase'}}>{item.name}</Card.Header>
							<span style={{fontSize: 16, fontWeight: 700, position: 'absolute', right: 26, bottom: 140 }}>quantity: {cartItem.quantity}</span>
							<Card.Meta>
								<h2 
								className='date' 
								style={{display: 'inline-block'}}>{item.price * cartItem.quantity}$
								</h2>
								<Button.Group 
								size='small' 
								style={{position: 'absolute', right: 26, bottom: 100}} >
									<Button 
									onClick={() => cartItem.quantity > 1?decrease(cartItem.id): null}
									color='red' 
									style ={{display: 'inline-block'}}>-</Button>
									<Button.Or />
									<Button 
									onClick={() => increase(cartItem.id)} color='green' 
									style ={{display: 'inline-block'}}>+</Button>
								</Button.Group>
								<Button 
								color='green' 
								style={{width: 240}}>Make an order</Button>
							</Card.Meta>
							<Card.Description>
								<Button 
								style={{ width: 240 }}
								onClick={() => removeFromCart(item.id)}>Remove from cart
									 <Icon 
									 name='remove' 
									 style={{ marginLeft: 5 }}/>
								</Button>
							</Card.Description>
							</Card.Content>
							<Card.Content extra>
						</Card.Content>
					</Card>
				</Grid.Column>
			))
			))}
		</Grid>	
	)
}

export default Cart;