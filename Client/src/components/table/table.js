import React from 'react';
import Table from 'react-bootstrap/Table';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

     const table =({properties})=>{
     console.log("table is here")
     
     if(properties == null){
       return(

        <div >
        <Table striped bordered hover variant="dark"  size="sm"  >
    <thead>
      <tr>
        <th >info</th>
        <th>value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Governorat</td>
        <td></td>
        
   
      </tr>
      <tr>
        <td>Elev_Avg</td>
        <td></td>
       
   
      </tr>
      <tr>
      <td>Elev_Range</td>
      <td></td>
        
   
      </tr>
      <tr>
      <td>Slope_Avg</td>
      <td></td>
        
   
      </tr>
      <tr>
      <td>Slope_Clas</td>
      <td></td>
        
   
      </tr>
      <tr>
      <td>S_A_Avg</td>
      <td></td>
        
   
      </tr>
   
      <tr>
      <td>SA_Class</td>
      <td></td>
        
   
      </tr>
    </tbody>
  </Table>
      </div>
   );
     }
    return (
          
      <div >
      <Table striped bordered hover variant="dark"  size="sm" >
  <thead>
    <tr>
      <th >info</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Governorat</td>
      <td>{properties.Governorat}</td>
      
 
    </tr>
    <tr>
      <td>Elev_Avg</td>
      <td>{properties.Elev_Avg}</td>
     
 
    </tr>
    <tr>
    <td>Elev_Range</td>
      <td>{properties.Elev_Range}</td>
      
 
    </tr>
    <tr>
    <td>Slope_Avg</td>
      <td>{properties.Slope_Avg}</td>
      
 
    </tr>
    <tr>
    <td>Slope_Clas</td>
      <td>{properties.Slope_Clas}</td>
      
 
    </tr>
    <tr>
    <td>S_A_Avg</td>
      <td>{properties.S_A_Avg}</td>
      
 
    </tr>
 
    <tr>
    <td>SA_Class</td>
      <td>{properties.SA_Class}</td>
      
 
    </tr>
  </tbody>
</Table>
    </div>
 );
  };
  export default table;