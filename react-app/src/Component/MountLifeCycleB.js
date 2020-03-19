import React from 'react';



class MountLifeCycleB extends React.Component {

    constructor(props){
        super(props)
        console.log(" constructor MountLifeCycleB ")
        this.state = {
            name : 'Rupali'
        }


    }

    static getDerivedStateFromProps(props,state){
        console.log(" getDerivedStateFromProps MountLifeCycleB ")
        return null;
    }

    componentDidMount(){
        console.log(" componetDidMount MountLifeCycleB ")
        
    }

    shouldComponentUpdate()
    {
        console.log("shouldComp.Update MountLifeCycleB")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("getsnapshotBeforeUpdate MountLifeCycleB");
        return null       

    }

    componentDidUpdate()
    {
  console.log("Component Did Mount Update MountLifeCycleB")

    }

    render() {
      console.log(" render MountLifeCycleB ")
        return (
            <div>
                MountLifeCycleB
               
            </div>
        )
    }



}


export default MountLifeCycleB;