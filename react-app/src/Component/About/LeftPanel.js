import React, { Component } from 'react';
import axios from 'axios';
import { EditorState,convertToRaw  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state={
              editorState:EditorState.createEmpty(),
              name : "",
              email : "",
              headline:"",
              number:"",
              summary:'',
              certificateDetails: [{cerName: "", cerID: ""}],
             
        }; 

    
        
    }
    
    componentDidMount(){

            
        
    }
 componentWillMount() {
     
 }

 
 handleChange=(e)=> {
   // e.preventDefault();
   /*  const { name, value } = e.target;
    this.setState({ [name]: value }, () => { console.log(this.state); }); */
    //console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
 }

 onSubmit = (e) =>{

   var headers={
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      };
         let details={"name":this.state.name,
         "email":this.state.email,
         "headline":this.state.headline,
         "number":this.state.number,
         "summary":this.state.summary,
         "certificatedetails":this.state.certificateDetails,
         "technicalSkills":JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
         };

         console.log("record added",details,this.state.editorState);
         e.preventDefault();
       
          axios.post('http://localhost:9000/detailsApi/save', { details })
      .then(res => {
        console.log(res);
        
      }) 

 }
 removeClick(i){
    let certificateDetails = [...this.state.certificateDetails];
    if(i>0)
    {
        certificateDetails.splice(i, 1);
    }
   
    this.setState({ certificateDetails });
 }

 cerHandleChange =(e, i)=> {
    const { name, value } = e.target;
  let users = [...this.state.certificateDetails];
  users[i] = {...users[i], [name]: value};
  this.setState({ certificateDetails:users });
}
 onChangeEditor =(editorState)=> {
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
    this.setState({
      editorState
    },()=>{
        console.log("print list", this.state.editorState);
    });
} 

 createCertificateDetails(){
     return this.state.certificateDetails.map((el,i)=>(         
          <div key={i} className="col-md-3">
              <label>Certificate Name:</label><input type="text" name="cerName" value={el.cerName} onChange={(e)=>{this.cerHandleChange(e,i)}}/>
              <label>Certificate ID:</label><input type="text" name="cerID" value={el.cerID}  onChange={(e)=>{this.cerHandleChange(e,i)}} />
             <input type="button" value="Remove" onClick={this.removeClick.bind(this,i)}></input>
         </div>
     ))

 }
 addClick(){
    this.setState(prevState => ({ 
    	certificateDetails: [...prevState.certificateDetails, { cerName: "", cerID: "" }]
    }))
  }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12">
                <div className="col-md-2"> 
                <label>Name: </label><input type="text" className="form-control"  placeholder="Please enter your name"  name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="col-md-2"> 
                <label>Email: </label><input className="form-control" name="email" type="email" placeholder="Please enter email address"  value={this.state.email} onChange={this.handleChange}/>
               
                </div>
                <div className="col-md-2"> 
                    <label> Resume Headline: </label>
                    <input type="text"  className="form-control" name="headline"  placeholder="Please enter resume headline" value={this.state.headline}  onChange={this.handleChange}></input>
                </div>
                <div className="col-md-2"> 
                    <label>Phone Number: </label>
                    <input type="number" className="form-control" name="number" placeholder="Please enter your phone number" value={this.state.number} onChange={this.handleChange}/>
                </div>
                <div className="col-md-2"> 
                    <label>Summary: </label>
                    <input type="textarea" className="form-control" name="summary" placeholder="Please enter your summary details" value={this.state.summary} onChange={this.handleChange}/>
                </div>

                </div>
                <div className="row">
                    {this.createCertificateDetails()}
                <div className="col-md-2">
                <input type='button' value='Add' onClick={this.addClick.bind(this)}/>
                </div>
                </div>
                
                <div className="col-md-12">
               <label>
                   Technical Skills:
               </label>
                 <Editor name="editor"  editorState={this.state.editorState} wrapperClassName="demo-wrapper" editorClassName="demo-editor"
                    onEditorStateChange={this.onChangeEditor}
                />
                  <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Add Details</button>
                </div>
                 </React.Fragment>
        );
    }
}

export default LeftPanel;