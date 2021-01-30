import React from 'react';
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react';
import { useSelector, useDispatch  } from 'react-redux';
import { addItem } from '../redux/actions/cart';

function ProductList() {
	const { shop } = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	const addToCart = (id) => {
		dispatch(addItem(id));
	}
	
	return(
		<Grid columns='3'>
			{shop.map(item => (
				<Grid.Column>
					<Card key={item.id} style={{ height: 450, padding: 10 }}>
						<Image src={item.image} wrapped ui={false} />
						<Card.Content style={{ position: 'absolute', bottom: 10 }}>
							<Card.Header>{item.name}</Card.Header>
							<Card.Meta>
								<h1 className='date'>{item.price}$</h1>
							</Card.Meta>
							<Card.Description>
								<Button onClick={() => addToCart(item.id)}>Add to cart
									 <Icon name='cart arrow down' style={{ marginLeft: 5 }}/>
								</Button>
							</Card.Description>
							</Card.Content>
							<Card.Content extra>
						</Card.Content>
					</Card>
				</Grid.Column>
			))}
		</Grid>
	)
}

export default ProductList;


