import React, { Component,useEffect } from 'react';
import { render } from 'react-dom';
import Table from 'react-bootstrap/Table';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container,Card,Row,Form,Button} from 'react-bootstrap'; 
import { useLocation,useHistory } from 'react-router-dom'

function DataRepresntation(props){
 
  
  let initState = [
    { dataset: 1, value: "bread", units: 50 },
    { dataset: 2, value: "milk", units: 20 },
    { dataset: 3, value: "water", units: 10 },
    { dataset: 4, value: "rice", units: 10 }
  ];
  let obj = { dataset: 4, value: "rice", units: 10 };
  obj.dataset=5;
  initState.push(obj);
  const [state, setState] = React.useState(props.data1);
  const[state2] =  React.useState(props.data2);
  console.log("this.props.topoProps")

console.log(props.data1)
console.log(props.data)
  return (

    <div >
     <Container>
    <Row>
    <div >
        <h1>
          {props.label}
        </h1>
      </div>
    <div className='col'>
      
      <Table striped bordered hover size="sm"  >  
      <thead>
  
        <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      </thead>
      <tbody>

      {state.map((item) => (
        <tr key={item.dataset}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
        </tbody>

    </Table>
    
    </div>
   {props.comparison&& <div className='col'>
    <Table striped bordered hover size="sm" >  
      <thead>
  
        <tr key={"header"}>
        {Object.keys(state2[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      </thead>
      <tbody>

      {state2.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
        </tbody>

    </Table>
    
    </div>}
    </Row>

     </Container>
    </div>
  );
}
  export default DataRepresntation;