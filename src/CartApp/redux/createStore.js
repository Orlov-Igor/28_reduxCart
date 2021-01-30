import { createStore } from "redux";
import rootReducer from './reducers';

export default function(){
 
  const savedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

  return createStore(
    rootReducer,
    savedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
