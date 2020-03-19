import React from 'react';



class Welcome extends React.Component{
constructor(){
    super()
   this.state = {
       message : 'Hello  on It preset and changed'
   }

}
OnclickMethod(){
this.setState({
message :  'Changed is happen'
});
}


render()
{
return (
<div>
<h1>Welcome to the js file {this.props.name}</h1>
{this.props.children}
{this.state.message}
<button onClick={ ()=> this.OnclickMethod()}>Action</button>
</div>
);


}
}


export default Welcome;