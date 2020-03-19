import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Hello }  from './Component/Hello';
import Welcome from './Component/Welcome';
import JsxCode from './Component/Jsxfile';
import Stateset from './Component/Stateset';
import Conditional from './Component/conditional';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';
import Footer from './Component/Footer/Footer';
import {Container,Row,Col,Button, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import MountLifeCycleA from './Component/MountLifeCycleA';
import Tab from './Component/Tab/Tab';
import {BrowserRouter as Router, Route , Switch , Link } from 'react-router-dom';



class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      
      <div className="App">
       <Header/>
        <Body/>
        <footer> 
          Copy Right
          </footer>
      </div>
    
      
      
     
     
      
    );
  }
}

export default App;
