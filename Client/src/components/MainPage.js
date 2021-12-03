import React, { Component,useState } from 'react';
import {Container,Card,Row,Form,Button} from 'react-bootstrap'; 
import Subject from './subject';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";
import ShareLink from 'react-facebook-share-link'
import { SocialIcon } from 'react-social-icons';
import logo from './logo2.png';
import {Redirect} from 'react-router-dom';
import { useLocation,useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signin } from '../actions/auth';
import { FacebookShareButton, FacebookIcon ,TwitterShareButton,TwitterIcon,RedditIcon,RedditShareButton,WhatsappIcon,WhatsappShareButton,LinkedinIcon,LinkedinShareButton} from "react-share"
import GoogleButton from 'react-google-button'
import GoogleLogin from 'react-google-login';
import Icon  from './icon';
import { AUTH } from '../constants/actionTYpes';
import Modal from 'react-modal';
const MainPage =()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res.profileObj;
    const token = res.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push({
        pathname: '/Home',
        state: { signed: 'signed' }
      })
      //history.push('/Home');
    } catch (error) {
      console.log(error);
    }
  };
  const googleFilure=()=>{

    console.log("unsuccessful")
}  ;
  const handleSubmit = async(event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    
    const formData = { email: event.target[0].value, password: event.target[1].value};
    
    //const { dispatch } = this.props;                
  //dispatch(fetchJokes(this.state.value));
  
    
    const temp = await dispatch(signin(formData,history));
    console.log(temp);
     if(temp){
      console.log("temp");
      setShow(true);
      //console.log(show);
     }
   /* if(event.target[0].value == "admin" && event.target[1].value =='admin' ){
       
        //this.props.history.push("/Home");
        this.props.history.push({
          pathname: '/Home',
          state: { signed: 'signed' }
        })
        
    }*/
  } 

        return (
        <div style={{display:'flex' ,marginTop:'20px',fontWeight: 'bold',fontSize:'18px'
        }} >
           <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
              <Container>
                 <Row>
                     <div  className='col' >
                         
                            <div style={{display: 'flex',
    justifyContent: 'center', color: '#008000'}}>
        
        <div>
                         
                         <div >
                         <img  src={logo} alt="Logo" style = {{marginLeft:'50px'}}/>

                                <p>THE FIRST AFRICAN INTEGRATED INFORMATION SYSTEM</p>
                                </div>
                            </div >
                            </div>
                    <div style={{display: 'flex',
    justifyContent: 'space-around',color:'#298719c9'}}>
                
                        <p>Information systems for the water-energy-food-climate (WEFC)<br/>
                           <p style={{display:'flex',justifyContent:'center'}}>nexus of the Nile basin countries.</p>
                        </p>   
                  </div>


              
                 
                  <div style={{display: 'flex',
    justifyContent: 'space-around', color: '#008000'}} >
                    <p>We help create better life for 500 million people in Africa.
                    </p>
                 </div>

                 <div style={{display: 'flex',
    justifyContent: 'space-around',fontSize:'smaller'}} >
                    <p>Read the  <Link to="/Documentation"> <span style={{color:'green'}}>documentation</span></Link> to learn more about our technology
                    </p>
                 </div>
                
                <div style={{display: 'flex',
    justifyContent: 'space-around'}}>
                 <Form onSubmit={handleSubmit}>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <div style={{display: 'flex',
    justifyContent:'space-evenly'}}>
  <Button variant="outline-success"type="submit">
    Sign in
  </Button>
  <Link to="/Auth">
  <Button variant="outline-success"> 
    Sign Up
  </Button>
  </Link>
  
  </div>
</Form>
</div>


                <div style={{display: 'flex',
                    justifyContent: 'space-around'}} >
                        <GoogleLogin

        clientId = "593620185625-im2rel8k7ii7l8q9jeprq1fnd2ijfs32.apps.googleusercontent.com"
        render={(renderProps)=>(
            
            <GoogleButton
            color = "primary"
            fullwidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            startIcon = {<Icon/>}
            variant ="contained"    
            >
                Google Sign Up
            </GoogleButton>
          

        )}
        onSuccess = {googleSuccess}
        onFailure = {googleFilure}
        />
                </div>


                <div style={{display: 'flex',
                    justifyContent: 'space-around'}} >
                        
                        <p>Send and email to <a href={"mailto:" + 'info@nilenexus.tech'}> <span style={{color:'green'}}>info@nilenexus.tech</span></a> request a new account.
                        </p>
                </div>

                <div style={{display: 'flex',
                    justifyContent: 'center',flexDirection:'row',alignItems:'center'}}>
      
                                  <FacebookShareButton
                  url="https://sites.google.com/view/nilenexus"
                  >
                  <FacebookIcon logoFillColor="white"size={40}  />
              </FacebookShareButton>

              <TwitterShareButton
                  url="https://sites.google.com/view/nilenexus"
                  >
                  <TwitterIcon logoFillColor="white" size={40} />
              </TwitterShareButton>
              <RedditShareButton
                  url="https://sites.google.com/view/nilenexus"
                  >
                  <RedditIcon logoFillColor="white" size={40} />
              </RedditShareButton>
              <WhatsappShareButton
                  url="https://sites.google.com/view/nilenexus"
                  >
                  <WhatsappIcon logoFillColor="white" size={40} />
              </WhatsappShareButton>

              <LinkedinShareButton 
                  url="https://sites.google.com/view/nilenexus"
                  >
                  <LinkedinIcon logoFillColor="white" size={40} />
              </LinkedinShareButton>
                    
                    
                </div>

              </div>
              </Row>
              </Container>
              </div>
          
           
            );
        
        
}
export default MainPage;
