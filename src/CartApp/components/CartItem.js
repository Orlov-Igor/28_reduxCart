import React from 'react';
import { Card, Image, Button, Icon } from 'semantic-ui-react';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/actions/cart';
import { useDispatch } from 'react-redux';

function CartItem({ cartItem, item }) {
	
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

	return (
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
					style={{display: 'inline-block', fontSize: 16}}>{cartItem.quantity}x{item.price} = {item.price * cartItem.quantity}$
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
	)
}

export default CartItem;