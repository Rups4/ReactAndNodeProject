import React from 'react';
import '../Body/main.css';
import {Link} from 'react-router-dom'; 





class Tab extends React.Component{

render(){

    return(

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/about'} className="nav-link">About Us</Link></li>
          <li><Link to={'/contact'} className="nav-link">Contact Us</Link></li>
          
        </ul>
        </nav>

    )
}


}



export default Tab;