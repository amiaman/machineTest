import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes'; // itemsDescription
import { itemsDescription } from './shared/itemsDescription.js';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                items: itemsDescription
            };
      }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                 <Menu items={this.state.items} />
            </div>
        );
    }
}   
export default App;
