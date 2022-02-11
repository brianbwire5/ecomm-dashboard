import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import Header from './Header';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';


function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Switch> 
          <Route path="/login">
           <Login />
          </Route>
         <Route path="/register">
          <Register />
           </Route>
          <Route path="/add">
            <Protected Cmp={AddProduct} />
           </Route>
           <Route path="/update/:id">
           <Protected Cmp={UpdateProduct}/>
          </Route>
          <Route path="/search">
            <Protected Cmp={SearchProduct} />
           </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
           </Route>
           
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
