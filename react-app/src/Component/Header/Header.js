import React from 'react';
import '../Header/HeaderCSS.css';
import axios from 'axios';


class Header extends React.Component{
constructor(props){
super(props);
this.state={
	name:'',
	email:'',
	phoneNumber:'',
	headline:'',
	techSkills:'',
}
}

componentDidMount(){

	axios.get('http://localhost:9000/detailsApi/getValue')
	.then(res => {
	  console.log("get Values",res);
	  this.setState({
		  name:res.data[0].fullname,
		  email:res.data[0].email,
		  headline:res.data[0].headline,
		  phoneNumber:res.data[0].phonenumber,
		})
	}).catch(err=>console.log(err)); 

}


render(){
return (

    <nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<div className="nav navbar-nav navbar-left">{this.state.name}</div>
				</div>
				<div className="nav navbar-nav navbar-center">
					<div className="navbar-brand">{this.state.headline}</div>
				</div>
                <div className="nav navbar-nav navbar-right">
		             	Email: {this.state.email} <br/>
                        Mobile Number: {this.state.phoneNumber}
		        </div>
			</div>
   </nav>
)

}

}

export  default  Header;