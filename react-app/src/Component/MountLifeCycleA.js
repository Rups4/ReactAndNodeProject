import React from 'react';
import MountLifeCycleB from '../Component/MountLifeCycleB';


class MountLifeCycleA extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          name : 'Rupali'
      }
    console.log("MountLifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props,state)
  {
      console.log(" MountLifeCycleA getDerivedStateFromPorps")
      return null
  }

  componentDidMount(){
      console.log("MountLifeCycleA componentDidMount")
  }

  shouldComponentUpdate(){
      console.log("Mount Cycle A Should Comp Update A")
      return true
  }


  getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("getsnapshotBeforeUpdate MountLifeCycleA");
        return null       

    }

    componentDidUpdate()
    {
  console.log("Component Did Mount Update MountLifeCycleA")

    }
    
    stateChange = () => {
        console.log("inside on changedmethod")
        this.setState({
            name: 'Changed'
        })
    }

    render() {
        console.log("MountLifeCycleA render")
    return(
        
        <div>MountLifeCycleA  <br/>
             {this.state.name}<br/>
                <button onClick={this.stateChange}>On Change</button><br/>
            <MountLifeCycleB/></div>
        
    )
}



}

export default MountLifeCycleA;