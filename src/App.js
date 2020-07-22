import React from 'react';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import CART from "./components/Cart"
import Details from "./components/Details"
import Product from "./components/Product"
import ProductList from "./components/ProductList"
import Default from "./components/Default"
import Modal from "./components/Modal"



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}  />
        <Route path="/details" component={Details}  />
        <Route path="/cart" component={CART}  />
        <Route component={Default}  />
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
