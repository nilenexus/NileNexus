import React, { Component } from 'react';
import { Form,Button } from 'react-bootstrap';
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";
import MainPage from './MainPage';
import {withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';
class checkBoxList extends Component{
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.state = { TopographyChecked: false,ClimateChecked: false,WindChecked: false,SolarChecked: false,SoilChecked: false };
        this.handleClimateIsItChecked = this.handleClimateIsItChecked.bind(this);
        this.handleWindIsItChecked = this.handleWindIsItChecked.bind(this);
        this.handleSolarIsItChecked = this.handleSolarIsItChecked.bind(this);
        this.handleSoilIsItChecked = this.handleSoilIsItChecked.bind(this);
        this.handleTopographyIsItChecked = this.handleTopographyIsItChecked.bind(this);
        this.unCheck = this.unCheck.bind(this);
      }
      unCheck(){
        let ref = 'ref_' + 1;
        this.refs[ref].checked = false;
         ref = 'ref_' + 2;
        this.refs[ref].checked = false;
         ref = 'ref_' + 3;
        this.refs[ref].checked = false;
         ref = 'ref_' + 4;
        this.refs[ref].checked = false;
         ref = 'ref_' + 5;
        this.refs[ref].checked = false;
     }
      handleClimateIsItChecked(){
        this.setState({ ClimateChecked: !this.state.ClimateChecked });
      }
      handleWindIsItChecked(){
        this.setState({ WindChecked: !this.state.WindChecked });
      }
      handleSolarIsItChecked(){
        this.setState({ SolarChecked: !this.state.SolarChecked });
      }
      handleSoilIsItChecked(){
        this.setState({ SoilChecked: !this.state.SoilChecked });
      }
      handleTopographyIsItChecked(){
        this.setState({ TopographyChecked: !this.state.TopographyChecked });
      }


      render() {
    return(
        <div>
                   

            <p >Choose a location on the map then select the
information you need for your project to build
your report.
you can select 2 polygons to make a comparison<br/>
Version 0.1 is works for Egypt only . Future versions will include more countries and layers.</p>
<div style={{fontWeight: 'bold', fontSize :'20px'}}>
<p>Nile WEFC Nexus Resources</p>
</div>

<div class="checkbox">
    <label title="">
    
        <input type="checkbox" ref={'ref_' + 1} value=""  onChange= {this.handleTopographyIsItChecked} />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        Topography
    </label>
</div>


<div class="checkbox"  style={{marginTop:'15'}}>
    <label title="">
    
        <input type="checkbox" value="" ref={'ref_' + 2} onChange= {this.handleClimateIsItChecked} />
         <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Climate
    </label>
</div>

<div class="checkbox" style={{marginTop:'15'}}>
    <label title="">
    
        <input type="checkbox" value="" ref={'ref_' + 3}  onChange= {this.handleWindIsItChecked}  />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Wind energy 
        
    </label>
</div>


<div class="checkbox" style={{marginTop:'15'}}>
    <label title="">
    
        <input type="checkbox" value="" ref={'ref_' + 4} onChange= {this.handleSolarIsItChecked} />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Solar energy 
    </label>
</div>


<div class="checkbox"style={{marginTop:'15'}} >
    <label title="">
     
        <input type="checkbox" value="" ref={'ref_' + 5} onChange= {this.handleSoilIsItChecked} />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Soil and agriculture <span style={{fontSize:'11px',color:'green',fontWeight:'bold'}} >(Under Development)</span>
        
    </label>
</div>
<div style={{marginTop:'30px'}}>

<div1>


<Link to="/"> 
<Button variant="outline-success">Back</Button>
</Link>
</div1>

<div1 style= {{ marginLeft : '20px'}}>
<Button variant="outline-success" onClick={()=>this.unCheck()}>Reset</Button>
</div1>

<div1 style= {{ marginLeft : '20px'}}>
<Link to={{ pathname: '/Result', query: { Topography: this.state.TopographyChecked ,
     Wind:this.state.WindChecked ,Solar:this.state.SolarChecked ,
     Soil:this.state.SoilChecked ,Climate:this.state.ClimateChecked,data:this.props.data
     } }}>
<Button variant="outline-success " onClick ={this.handleClick}>Next</Button>
</Link>
</div1>


</div>


            </div>
    )
}
}
export default  checkBoxList;