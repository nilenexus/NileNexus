import React, { useState,useEffect }  from 'react'
import { render } from 'react-dom';
import {Button,Form} from 'react-bootstrap'; 
import Modal from 'react-modal';

import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTYpes';
import {useHistory} from 'react-router-dom';
import { signup } from '../../actions/auth';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const Auth = () => {

  
  const [formData,setformData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    


      const handleSubmit = (e) => {
        e.preventDefault();
    
        if(formData.firstName == '' ||formData.password == '' || formData.password == ''
         ||formData.confirmPassword == '' || formData.password != formData.confirmPassword  ){
          console.log("Not good data");
         }else{
          dispatch(signup(formData, history));
         }
       
       
        
      };
    
      const handleChange =(e)=>{
        let fieldName = e.target.name;
        let fleldVal = e.target.value;
       setformData({...formData,[fieldName]:fleldVal});
      }

  
return (
      <div style ={{display: 'flex',
        justifyContent:'space-evenly'}}>

    <Form onSubmit={handleSubmit}>
        <div style ={{display:'flex',
    flexDirection: 'row'}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="name" name = "firstName" placeholder="first name" onChange={handleChange} />
  </Form.Group>   

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="name" name = "lastName" placeholder="last name" onChange={handleChange}  />
  </Form.Group>  
   </div>




  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name = "email" placeholder="Enter email" onChange={handleChange}  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name = "password" placeholder="Password" onChange={handleChange}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Confirm Password</Form.Label>
    <Form.Control type="password" name = "confirmPassword" placeholder="Password" onChange={handleChange}  />
  </Form.Group>
 
 <div>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>


</Form>
</div>
  );
}

export default Auth
