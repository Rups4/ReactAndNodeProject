import React from 'react';

class conditional extends React.Component{
constructor()
{
    super()
    this.state = {
        condition : true
    }
}

render(){
 return (

<div>Here is condition check {this.state.condition}?'Hello':'Hi'</div>

 )


}

}

export default conditional;

