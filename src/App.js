import Home from './page/Home'
import Cart from "./component/Cart";
import {useObserver,observer,useLocalStore} from "mobx-react";
import {RootStore} from './stores/index'
import logo from './logo.svg';
import './App.css';


function App() {
  const localStore = useLocalStore(() => RootStore);
  return useObserver(()=>
    <div className="app">
      <Home/>
      {localStore.cartStore.showAllCart?<Cart/>:''}
    </div>
  );
}

export default App;
