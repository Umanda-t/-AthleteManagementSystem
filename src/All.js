import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import './Home.css';
import 'antd/dist/antd.css'
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

  
  

class All extends React.Component
{
    
    constructor(props) {
        super(props)
        this.state = {
          result: []
        }
      }
     componentDidMount(){
        
        axios.get("http://localhost:8080/allResult").then((response) => {
             this.setState({result:response.data})
         });
     }
     
  

      render()
      {
        return (
         
<div align="center" style={{ width:1260, height: 410 } }>

<h1>All Athlete Results </h1>
<br/> <br/>
<table class="table table-striped table-bordered">
  <thead class="thead-dark" >
  <tr>
    <th>Record Number</th>
    <th>Athlete ID</th>
    <th>Athlete Name</th>
    <th>Country</th>
    <th>Gender</th>
    <th>Event</th>
    <th>Result</th>
  </tr>
  </thead>
  <tbody>
      {
          this.state.result.map(
            result =>
      <tr key="{result.id}">
       <td> {result.id}</td>
       <td>{result.athlete.id}</td> 
       <td>{result.athlete.firstname} &nbsp; {result.athlete.lastname}</td>
       <td>{result.athlete.country}</td>
       <td>{result.athlete.gender}</td>
       <td>{result.athlete.event}</td>
       <td >{result.result}</td>
         </tr>
          )
      }
  

  </tbody>
</table>
         </div>
        );
        };
    
       
 }
    
    
    
export default All;