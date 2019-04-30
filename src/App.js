import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import RoomSize from "./components/RoomSize"
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
//import customerInfo from "./components/customerInfo";

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={RoomSize} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
    );
  }
}

export default App;
