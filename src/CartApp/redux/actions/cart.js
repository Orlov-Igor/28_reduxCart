export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const LOAD_FROM_LS = 'LOAD_FROM_LS';

export const addItem = itemId => ({
  type: ADD_ITEM,
  payload: itemId
});

export const removeItem = itemId=> ({
  type: REMOVE_ITEM,
  payload: itemId
});

export const increaseQuantity = itemId=> ({
  type: INCREASE_QUANTITY,
  payload: itemId
});

export const decreaseQuantity = itemId=> ({
  type: DECREASE_QUANTITY,
  payload: itemId
});

// export const loadFromLS = (state)=> ({
//   type: LOAD_FROM_LS,
//   payload: state
// });