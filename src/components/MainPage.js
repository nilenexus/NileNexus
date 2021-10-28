import React, { Component } from 'react';
import {Container,Card,Row,Form,Button} from 'react-bootstrap'; 
import Subject from './subject';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";
import ShareLink from 'react-facebook-share-link'
import { SocialIcon } from 'react-social-icons';
import logo from './logo2.png';
import {Redirect} from 'react-router-dom';
import { useLocation,useHistory } from 'react-router-dom'
import { FacebookShareButton, FacebookIcon ,TwitterShareButton,TwitterIcon,RedditIcon,RedditShareButton,WhatsappIcon,WhatsappShareButton,LinkedinIcon,LinkedinShareButton} from "react-share"
class MainPage extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        if(event.target[0].value == "admin" && event.target[1].value =='admin' ){
           
            //this.props.history.push("/Home");
            this.props.history.push({
              pathname: '/Home',
              state: { signed: 'signed' }
            })
            
        }
      }

    render() {
        console.log("in main page");
        
        return (
        <div style={{display:'flex' ,marginTop:'20px',fontWeight: 'bold',fontSize:'18px'
        }} >
          
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
                 <Form onSubmit={this.handleSubmit}>
  <Form.Group  className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="outline-success"type="submit">
    Sign in
  </Button>
</Form>
</div>


                <div style={{display: 'flex',
                    justifyContent: 'space-around'}} >
                        <p>Create account / Sign up
                        </p>
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
}
export default MainPage;
