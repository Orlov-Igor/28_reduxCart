import { ADD_ITEM, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/cart";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_ITEM: return [...state, {
      id: action.payload,
      quantity: 1,
    }];

    case REMOVE_ITEM: return state.filter(item => item.id !== action.payload);

    case INCREASE_QUANTITY: return state.map((item) => item.id === action.payload? {...item, quantity: ++item.quantity}: item);

    case DECREASE_QUANTITY: return state.map((item) => item.id === action.payload? {...item, quantity: --item.quantity}: item);

    // case LOAD_FROM_LS: return state = JSON.parse(localStorage.getItem('data'));

    default: return state;
  }
};

export default cartReducer;

