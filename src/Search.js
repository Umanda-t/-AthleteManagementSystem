import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import './Home.css';
import 'antd/dist/antd.css'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

  
  

class Search extends React.Component
{
    
    constructor(props) {
        super(props)
        this.state = {
            athlete: []
        }
      }
      submit(event){
        event.preventDefault();
       
       var n = document.getElementById("name").value;
       var c = document.getElementById("country").value;
       var g = document.getElementById("gender").value;
       var e = document.getElementById("event").value;
       const apiUrl = `http://localhost:8080/search/${n}/${c}/${g}/${e}`;
        axios.get(apiUrl).then((res) => {
            this.setState({athlete:res.data})
            
});
    }
    
     
  

      render()
      {
        return (
            
         
<div align="center" style={{ width:1260, height: 810 } }>
<div class="w-50 p-3"> 
        <form method="get"
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
          <center> <h1> Search </h1> </center>
          
          <Form.Item label="Name" labelCol={{span: 5}}>
          <input class="form-control"  type="text" name="name"  id="name"  / >
            
          </Form.Item>
          <Form.Item label="Gender" labelCol={{span: 5}}> 
      <select class="form-control"  list="glist"id="gender" maxlength="50" > 
            <option  value="">  </option>
           <option  value="Male"> Male </option>
            <option  value="Female"> Female </option>
        </select>  
            
         </Form.Item >

         <Form.Item label="Country" labelCol={{span: 5}}> 
      <select class="form-control"  list="clist" id="country" maxlength="50" > 
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
      <select class="form-control" placeholder="100m" id="event" list="elist" maxlength="50"  > 
             <option  value="">  </option>
            <option  value="100m"> 100m </option>
            <option  value="200m"> 200m </option>
            <option  value="400m"> 400m </option>

        </select>  
            
         </Form.Item >
          
          <center>  <button type="submit" class="btn btn-style btn-primary w-30" >Search</button>&nbsp; &nbsp;
          <button type="reset" class="btn btn-style btn-primary w-30" >Clear</button>
          </center> 
        </form>
        </div>


<br/> <br/>
<table class="table table-striped table-bordered">
  <thead class="thead-dark" >
  <tr>
  <th>Athlete ID</th>
    <th>Athlete Name</th>
    <th>Country</th>
    <th>Gender</th>
    <th>Event</th>

    
  </tr>
  </thead>
  <tbody>
      {
          this.state.athlete.map(
            athlete =>
      <tr key="{athlete.id}">
       <td> {athlete.id}</td>
       <td>{athlete.firstname} &nbsp; {athlete.lastname}</td>
       <td>{athlete.country}</td>
       <td>{athlete.gender}</td>
       <td>{athlete.event}</td>
        
    
  </tr>
          )
      }
  

  </tbody>
</table>
         </div>
        );
        };
    
       
 }
    
    
    
export default Search;