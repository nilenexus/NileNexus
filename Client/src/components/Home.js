import React, { Component ,useState,useEffect} from 'react';
import './App.css';
import Table from './table/table';
import ChoroplethMap from './ChoroplethMap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CheckBoxList from './checkBoxList';
import SimpleMap from './SimpleMap';
import mapSelection from './mapSelection';
import ExampleData from './ExampleData';
import Subject from './subject';
import {Container, Row} from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import { Link } from "react-router-dom";
import {withRouter} from 'react-router';
import logo from './logo2.png';
import { useLocation,useHistory } from 'react-router-dom'


class Home extends Component {
  state = { language: '' }

  handleLanguage = (data) => {
      this.setState({language: data});
      console.log("langValue");
      console.log(data);
  }
  checkNavigation=()=>{
    console.log("check signed")
    console.log(JSON.parse(localStorage.getItem('profile')));
    
    if(this.props.location== undefined || this.props.location.state == undefined || this.props.location.state.signed !== 'signed'){
      this.props.history.push("/");
    }

  }
  render() {
    console.log("in APp");
    console.log(this.state.message);
    
   


     this.checkNavigation();
    return (

        /*
      <div style={{
        display: "flex",
        height:"100vh",
        width: "100vw"
      }}>
        <ChoroplethMap data={this.state.data}  />

      </div>
*/

<div >
<div style={{display: 'flex',
    justifyContent: 'center', color: '#008000',height:'150px',marginTop:'20px'}}>
        
        <div>
                         </div>
                         <div >
                         <img  src={logo} alt="Logo" />

                                </div>
                            </div >
<Container>
  <Row>
<div className='col' style={{ height: '350px', width: '500px' ,marginLeft:'30px'}}>
  <SimpleMap onSelectLanguage={this.handleLanguage}/>
  </div>
  <div className='col' style={{ marginLeft:'20px',}}>
  <CheckBoxList data={this.state.language} />
  </div>
  </Row>
  </Container>
   </div>
   
    );
  }
}

export default Home;
