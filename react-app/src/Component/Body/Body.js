import React from 'react';
import Tab from '../Tab/Tab';
import {BrowserRouter as Router, Route , Switch , Link } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Body extends React.Component{
render(){ 
    return(
 <div className="main">
 <Router>
        <Tab/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
        </Switch>
        </Router>
        </div>
    )
}

}


export default Body;

