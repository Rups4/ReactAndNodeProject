import React from 'react'


class Stateset extends React.Component{
    constructor (){
    super ()
        this.state = {
            message : 'Here state is tested'
        }
    //    this.buttonClick=this.buttonClick.bind(this);
    }

    buttonClick(){

        this.setState ({
            message : 'Now test is chnaging'
        } , console.log(this.state.message))

        console.log(this.state.message);

    }

    buttonClickTest(){
  this.buttonClick();
  this.buttonClick();
  this.buttonClick();
  this.buttonClick();
  this.buttonClick();

    }

    render(){
        return(
            
            <div> {this.state.message}
           {/*  <button onClick={this.buttonClick}>Buttun CLick</button> */}
           <button onClick={()=> this.buttonClickTest()}>Buttun CLick</button>
            </div>
            


        )
    }
}

export default Stateset;