import { combineReducers } from "redux";
import cart from './cart';
import shop from './shop';

export default combineReducers({
  shoppingCart: combineReducers({
    shop: shop,
    cart: cart
  }),
})




