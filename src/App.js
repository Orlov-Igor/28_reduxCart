import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ShoppingCart from './CartApp/ShoppingCart'
import createStore from "./CartApp/redux/createStore";
import { Provider } from 'react-redux';

function App() {
  const store = createStore();

  store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

  return (
    <div className='app'>
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    </div>
  );
}

export default App;


