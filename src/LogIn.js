import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import './Home.css';
import 'antd/dist/antd.css'
import axios from 'axios'

class LogIn extends React.Component {
   
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      email:'',
      password:'',
     
    }
  }
  submit(event){
    event.preventDefault();
    const user={
       email:this.state.email,
       password:this.state.password
   }
    
    axios.post("http://localhost:8080/api/login",{
      email:this.state.email,
       password:this.state.password
    }
    ).then((res) => {
        console.log(res);
        
        if(res.data=="Success")
          {
              alert( "Login Succeeded" );
              window.location.replace("http://localhost:3000/ViewAllBooks");
             
          }
          if(res.data=="Fail")
          {
              alert( "Login failed" );
              return false;
          }
   });
}
 
        render(){
    return (
      
      <div align="center" id = "LogInID" style={{ width:1260, height: 410 } }>
        <div class="w-50 p-3"> 
        <form method="post"
          onSubmit= {(e)=> this.submit(e)}
          // onFinish={onFinish}
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
          <center> <h1> LogIn </h1> </center>
          
          <Form.Item label="Email" labelCol={{span: 3}}>
          <input class="form-control" placeholder="Email" type="email" name="email"  id="email" onChange={(e)=>this.setState({email:e.target.value})}  value={this.state.email}  required / >
            
          </Form.Item>
          <Form.Item label="Password"labelCol={{span: 3}}>
          <input class="form-control"  placeholder="Password" type="password" name="password"  id="password" onChange={(e)=>this.setState({password:e.target.value})}  value= {this.state.password} required / >
           
          </Form.Item>
          
          <center>  <button type="submit" class="btn btn-style btn-primary w-30" >LogIn</button> </center> 
        </form>
        </div>
        </div>
     
    );
  };
}
  export default LogIn;


 