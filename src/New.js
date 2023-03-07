import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import './Home.css';
import 'antd/dist/antd.css'
import axios from 'axios'

class New extends React.Component {
   
  constructor(props) {
    super(props)
    this.state = {
      athlete: [],
      id:0,
      firstname:'',
      lastname:'',
      gender: '',
      dob: '',
      country: '',
      event: '',
      image:''
    }
  }
  submit(event){
    event.preventDefault();
    const athlete={
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        gender:this.state.gender,
        dob:this.state.dob,
        country:this.state.country,
        event:this.state.event,
        image:this.state.image
   }
    
    axios.post("http://localhost:8080/addAthlete",{
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        gender:this.state.gender,
        dob:this.state.dob,
        country:this.state.country,
        event:this.state.event
    }
    ).then((res) => {
        console.log(res);
        var did=res.data;
        console.log(did);
        if(did!==0)
          {
              alert( "Succeeded" );
              
              axios.post("http://localhost:8080/addImage",{
                id:did,
                image:this.state.image
            }
            ).then((res) => {
                console.log(res);
                  {
                      alert( "Image Added" );
                      
                     
                  }
                  
           } );
              
             window.location.replace("http://localhost:3000/Search/");
             
          }
          
   }
   
   );

   
}
 
        render(){
            
            
    return (
      
      <div align="center"  style={{ width:1260, height: 600 } }>
        <div class="w-50 p-3"> 
        <form method="post"
          onSubmit= {(e)=> this.submit(e)}
          
          labelCol={{
            span: 4,
          }}
          
          wrapperCol={{
            span: 14,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <center> <h1> Add New Athlete  </h1> </center>
          
          <Form.Item label="First Name" labelCol={{span: 5}}>
          <input class="form-control" placeholder="First Name" type="text" name="firstname"  id="firstname" onChange={(e)=>this.setState({firstname:e.target.value})}  value={this.state.firstname}  required / >
            
          </Form.Item>

          <Form.Item label="Last Name" labelCol={{span: 5}}>
          <input class="form-control" placeholder="Last Name" type="text" name="lastname"  id="lastname" onChange={(e)=>this.setState({lastname:e.target.value})}  value={this.state.lastname}  required / >
            
          </Form.Item>

          <Form.Item label="Date of Birth" labelCol={{span: 5}}>
          <input class="form-control"  type="date" name="dob"  id="dob" onChange={(e)=>this.setState({dob:e.target.value})}  value={this.state.dob}  required / >
            
          </Form.Item>

          <Form.Item label="Gender" labelCol={{span: 5}}> 
      <select class="form-control"  list="glist"id="gender" maxlength="50"  onChange={(e)=>this.setState({gender:e.target.value})}  value={this.state.gender}  required> 
            <option  value="">  </option>
           <option  value="Male"> Male </option>
            <option  value="Female"> Female </option>
        </select>  
            
         </Form.Item >

         <Form.Item label="Country" labelCol={{span: 5}}> 
      <select class="form-control"  list="clist" maxlength="50"  required onChange={(e)=>this.setState({country:e.target.value})} value={this.state.country}> 
            <option  value="">  </option>
            <option  value="UK"> UK </option>
            <option  value="USA"> USA </option>
            <option  value="Japan"> Japan </option>
            <option  value="Sri Lanka"> Sri Lanka </option>
            <option  value="Canada"> Canada </option>
            <option  value="UAE"> UAE</option>
        </select>  
            
         </Form.Item >

         <Form.Item label="Event" labelCol={{span: 5}}> 
      <select class="form-control" placeholder="100m" list="elist" maxlength="50"  required onChange={(e)=>this.setState({event:e.target.value})} value={this.state.event}> 
             <option  value="">  </option>
            <option  value="100m"> 100m </option>
            <option  value="200m"> 200m </option>
            <option  value="400m"> 400m </option>

        </select>  
            
         </Form.Item >

         <Form.Item label="Image"labelCol={{span: 3}}>
          <input class="form-control" type="file" name="image"  id="image" onChange={(e)=>this.setState({image:e.target.value})}  value= {this.state.image} / >
           
          </Form.Item>
          
          <center>  <button type="submit" class="btn btn-style btn-primary w-30" >Add</button> </center> 
         
        </form>
       
        
        </div>
        </div>
     
    );
  };
}
  export default New;


 