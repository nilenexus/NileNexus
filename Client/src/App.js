import React, { Component } from 'react';
import './App.css';
import Table from './components/table/table';
import ChoroplethMap from './components/ChoroplethMap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CheckBoxList from './components/checkBoxList';
import SimpleMap from './components/SimpleMap';
import mapSelection from './components/mapSelection';
import ExampleData from './components/ExampleData';
import Subject from './components/subject';
import {Container, Row} from 'react-bootstrap';
import checkBoxList from './components/checkBoxList';
import Home  from './components/Home';
import Result from './components/Result';
import MainPage  from './components/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {withRouter} from 'react-router';
import htmlNavigate from './components/htmlNavigate';
import Auth from './components/Auth/Auth';
                                                                                                                                  class App extends Component {
  state = {
    data: [
      ["MB", 75], ["SK", 43], ["AB", 50], ["BC", 88], ["NU", 21], ["NT", 43],
      ["YT", 21], ["ON", 19], ["QC", 60], ["NB", 4], ["NS", 44], ["NF", 38],
      ["PE", 67]],
  }
  render() {                                                                                                                                                                                                              
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
  
<main>
            <BrowserRouter>
                <Route exact path="/Home"  component={withRouter(Home)} exact />
                <Route exact path="/Auth"  component={withRouter(Auth)} exact />
                <Route exact path="/" component={withRouter(MainPage)}exact />
                <Route exact path="/Documentation" component = {withRouter(htmlNavigate)} exact />
                <Route exact path="/Result" component = {withRouter(Result)} exact />
            </BrowserRouter>
        </main>
   </div>
   
    );
  }
}

export default App;
