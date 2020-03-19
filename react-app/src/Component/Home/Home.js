import React from 'react';
import { withRouter } from 'react-router-dom';
import RoleAndRespJob from '../RoleAndRespJob';
import axios from 'axios';
import { EditorState,convertFromRaw } from 'draft-js';

class Home extends React.Component{
  constructor(props){
      super(props);
      this.state={
          showModel:false,
          open:false,
          id:0,
          summary:'',
          cerList:[],
          skills:[],
          newSkills:[],
          listType:''
      };
  }

  componentDidMount(){

    axios.get('http://localhost:9000/detailsApi/getValue')
    .then(res => {
      console.log("get Values",res);

      let data=JSON.parse(res.data[0].technicalskills);
      //const skill=JSON.parse(convertFromRaw(res.data[0].technicalskills));
      this.setState({
        summary:res.data[0].summary,
        cerList:res.data[0].certificatedetails,
       skills: res.data[0].technicalskills,//EditorState.createWithContent(convertFromRaw(res.data[0].technicalskills))
       listType:data.blocks[0].type=='unordered-list-item'?'ul':'ol'
      },()=>{
       this.setState({
         finalSkillsArray:this.getOnlyTextSkills(this.state.skills)
       })

       
        
        
      })
    }).catch(err=>console.log(err)); 
  
  }
  
getOnlyTextSkills=(data)=>{
  console.log("getOnly Text Skills array",JSON.parse(data));
  let array=[];

    let jsonData=JSON.parse(data);

  for(let key in jsonData.blocks){

   //for(let i in jsonData.blocks[key]){
     let obj={
       id:jsonData.blocks[key].key,
       text:jsonData.blocks[key].text,
       type:jsonData.blocks[key].type
     };

     array.push(obj);
     console.log(array);

   //}

  }
  return array;


}
  onOpenModal = (e,id) => {
    this.setState({ open: true,id:id });
    
  };
  
  onCloseModal = (e) => {
    e.preventDefault();
   this.setState({ open: false });
 };
  

render(){
  
    return(
        <div>
  <div className="card">
  <div className="card-body">
    <h5 className="card-title">Summary</h5>
    <div className="card-text cardtxt">
  {this.state.summary}
</div>

  </div>
  </div>
  <div className="card-columns">
  <div  className="card mt-5">
      <div className="card-body cardtxt">   
   <div className="card-header">Technical Skills</div>
<ul>
  {this.state.finalSkillsArray && this.state.finalSkillsArray.map(item=>{
   return  <li key={item.key}>{item.text}</li>
  })
  }
 </ul>
</div>
</div>
<div className="card mt-5">
<div className="card-body cardtxt">   
   <div className="card-header">Certifications</div>
 {
   this.state.cerList.map((item,index)=>(
  <ul key={index} type="square">
   <li>{item.cerName}:
       <ul>
           <li>Certificate ID: {item.cerID}</li>
       </ul>
   </li>
   </ul>    
   ))
 }

</div>
</div>
<div className="card mt-5">
<div className="card-body cardtxt">   
   <div className="card-header">Professional Experience</div> 
   <h5 className="card-title">DevOps Engineer at Xoriant Solutions, Pune</h5>
   <div className="card-subtitle">Feb 2019 to current</div>
      <div><a href="#"  onClick={(e)=>{this.onOpenModal(e,1);}}> Roles and Responsibilties</a><RoleAndRespJob open={this.state.open}  id={this.state.id} closeModel={this.onCloseModal}/></div>
      
   <h5 className="card-title">DevOps and Hadoop Engineer at FIGmd, Pune</h5>
   <div className="card-subtitle">April 2018 to Jan 2019</div>
     <div><a href="#"  onClick={(e)=>{this.onOpenModal(e,2);}}> Roles and Responsibilties</a>  <RoleAndRespJob open={this.state.open}  id={this.state.id} closeModel={this.onCloseModal}/> </div>
    
    <h5 className="card-title">Associate Consultant at Saama Technologies, Pune</h5>
   <div className="card-subtitle">July 2014 to March 2018</div>
   <div><a href="#" onClick={(e)=>{this.onOpenModal(e,3);}}> Roles and Responsibilties</a>  <RoleAndRespJob open={this.state.open}   id={this.state.id} closeModel={this.onCloseModal}/> </div>
  
</div>
</div>
   </div>
  </div>
    )
}

}

export default Home;