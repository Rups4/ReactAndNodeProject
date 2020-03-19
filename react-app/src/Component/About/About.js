import React from 'react';
import LeftPanel from './LeftPanel';/* 
import RightPanel from './RightPanel'; */



class About extends React.Component{

    render(){

     return(
         <div> 
             <div className="col-md-12">
                <LeftPanel/>
                </div>
               {/*  <div className="col-md-8 rightw">
                <RightPanel/>
                </div> */}
         </div>
     )
    }
}


export default About;