import React from 'react';
import { Route, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { Container, Header, Menu, Icon, Label } from 'semantic-ui-react';
 import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NotFound from './components/NotFound';



function ShoppingCart() {
	const { cart } = useSelector(state => state.shoppingCart);
    
	return(
		<Container>
			<Router>
				<Header>
					<NavLink to='/'>Shop</NavLink>
				</Header>
				<Menu style={{display: 'flex'}}>
					<NavLink to='/list' className='item'>Product List</NavLink>
					<NavLink to='/cart' className='item' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
						<div style={{display: 'flex'}}>Cart</div>
					    <div style={{display: 'flex', marginLeft: 15}}>
							<Icon name='cart' size='large' />
							<Label>{cart.length}</Label>
						</div>
					</NavLink>
					<NavLink to='/sale' className='item'>Sale</NavLink>
					<NavLink to='/blog' className='item'>Blog</NavLink>
					<NavLink to='/filter' className='item'>Filter</NavLink>
				</Menu>
				<Switch >
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/list' exact>
						<ProductList />
					</Route>
					<Route path='/cart'>
						{cart.length === 0?'Cart is empty':<Cart />}  
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>	
		</Container>
	)
}

export default ShoppingCart;






