import React, { Component,useEffect } from 'react';
import { render } from 'react-dom';
import { useLocation,useHistory } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DataRepresntation from './DataRepresntation';
import {Button} from 'react-bootstrap'
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";
import logo from './logo2.png';
import { CSVLink, CSVDownload } from "react-csv";
const useScrollToTop = () => {
    const location = useLocation();
    console.log("test here");
    useEffect(() => {
      window.scrollTo({ top: 0 });
     // scroll to the top of the browser window when changing route
     // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
  };
 
  function handleClick(){

  }
  function handleSignOut(){

  }
 function Result(){

    const location = useLocation();
     
     var t = location.query
     if(t!== undefined && t.data[0]!== undefined){}else{
       console.log("un defined")
       return(
       <div style = {{display: 'flex',justifyContent: 'center', color: '#008000',fontWeight:'bold'}}><h>No DATA SELECTED TO SHOW </h></div>
        );
     }
     console.log("dada");
     var properties1 = t.data[0].data.properties;
     console.log(properties1);
     console.log(t.data.length);
     console.log(t.data[0].data.geometry.coordinates[0][0][0]);
     var coordinates1 = t.data[0].data.geometry.coordinates[0][0];
     var country1 = properties1.COUNTRY;
     var Governorate1 = properties1.Governorat;
     var squareData1 =[{country:country1,Governorate:Governorate1,lat:coordinates1[0],log:coordinates1[1]}]
     console.log(coordinates1)
     var comparison = false;
     if(t.data.length>1){
      comparison = true;
      var properties2 = t.data[1].data.properties;
      console.log(properties2);
      var coordinates2 = t.data[1].data.geometry.coordinates[0][0];
      var country2 = properties2.COUNTRY;
      var Governorate2 = properties2.Governorat;
      var squareData2 =[{country:country2,Governorate:Governorate2,lat:coordinates2[0],log:coordinates2[1]}]

     }

     var Names = require('./Names.json');
     var TopoNames = Names.Topography;
    var windNAmes = Names.Wind;
    var ClimateNames = Names.Climate;
    var SolarNames = Names.Solar;
    var Topography = t.Topography;
    var Wind = t.Wind;
     var Climate = t.Climate;
     var Solar = t.Solar;
     var Soil = t.Soil;
     
     var readyToExportData=[]
     var readyToExportData1=[]
     // make topography data
     var topoProps1 = [
     ]
     let topoKeys1= Object.keys(TopoNames);
     for(let i=0; i <topoKeys1.length;i++){
      let key = topoKeys1[i];
      let obj = { dataset:TopoNames[key].Final , value: properties1[key], units: TopoNames[key].Units };
      topoProps1.push(obj);
      if(Topography){
        readyToExportData.push(obj)
      }
     }

      // make Wind data
      var windprops1 = [
      ]
      let windkeys1= Object.keys(windNAmes);
      for(let i=0; i <windkeys1.length;i++){
       let key = windkeys1[i];
       let obj = { dataset:windNAmes[key].Final , value: properties1[key], units: windNAmes[key].Units };
       windprops1.push(obj);
       if(Wind){
        readyToExportData.push(obj)
      }
      }

      // make Climate data
      var Climateprops1 = [
      ]
      let ClimateKeys1= Object.keys(ClimateNames);
      for(let i=0; i <ClimateKeys1.length;i++){
       let key = ClimateKeys1[i];
       let obj = { dataset:ClimateNames[key].Final , value: properties1[key], units: ClimateNames[key].Units };
       Climateprops1.push(obj);
       if(Climate){
        readyToExportData.push(obj)
      }
      }

      // make Solar data
      var Solareprops1 = [
      ]
      let SolarKeys1= Object.keys(SolarNames);
      for(let i=0; i <SolarKeys1.length;i++){
       let key = SolarKeys1[i];
       let obj = { dataset:SolarNames[key].Final , value: properties1[key], units: SolarNames[key].Units };
       Solareprops1.push(obj);
       if(Solar){
        readyToExportData.push(obj)
      }
      }

      if(comparison){
        let emptyObj = { dataset:" ", value:" ", units:" " };
        readyToExportData.push(emptyObj);
        readyToExportData.push(emptyObj);
        readyToExportData.push(emptyObj);
     // make topography data
     var topoProps2 = [
    ]
    let topoKeys2= Object.keys(TopoNames);
    for(let i=0; i <topoKeys2.length;i++){
     let key = topoKeys2[i];
     let obj = { dataset:TopoNames[key].Final , value: properties2[key], units: TopoNames[key].Units };
     topoProps2.push(obj);
     if(Topography){
      readyToExportData.push(obj)
    }
    }

     // make Wind data
     var windprops2 = [
     ]
     let windkeys2= Object.keys(windNAmes);
     for(let i=0; i <windkeys1.length;i++){
      let key = windkeys2[i];
      let obj = { dataset:windNAmes[key].Final , value: properties2[key], units: windNAmes[key].Units };
      windprops2.push(obj);
      if(Wind){
        readyToExportData.push(obj)
      }
     }

     // make Climate data
     var Climateprops2 = [
     ]
     let ClimateKeys2= Object.keys(ClimateNames);
     for(let i=0; i <ClimateKeys2.length;i++){
      let key = ClimateKeys2[i];
      let obj = { dataset:ClimateNames[key].Final , value: properties2[key], units: ClimateNames[key].Units };
      Climateprops2.push(obj);
      if(Climate){
        readyToExportData.push(obj)
      }
     }

     // make Solar data
     var Solareprops2 = [
     ]
     let SolarKeys2= Object.keys(SolarNames);
     for(let i=0; i <SolarKeys2.length;i++){
      let key = SolarKeys2[i];
      let obj = { dataset:SolarNames[key].Final , value: properties2[key], units: SolarNames[key].Units };
      Solareprops2.push(obj);
      if(Solar){
        readyToExportData.push(obj)
      }
     }


      }
      const object3 = {...topoProps1, ...Climateprops1};
      console.log("test merge")
      console.log(object3)
      
console.log("cccc");
console.log(topoProps1);
console.log(topoProps2);


     
    

        return(

            <div>
              <div style={{display:"flex",justifyContent:'center'}} >
                         <img  src={logo} alt="Logo" />
                                </div>
                                <DataRepresntation comparison={comparison} data1 = {squareData1} data2 = {squareData2} label ="Site information"/>}
             {Topography&& <DataRepresntation  comparison = {comparison} data1 = {topoProps1} data2 = {topoProps2} label ="Topographic information"/>}
             {Climate&&  <DataRepresntation comparison = {comparison}  data1 = {Climateprops1} data2 = {Climateprops2} label ="Climate information" />}
             {Wind&& <DataRepresntation  comparison = {comparison} data1 = {windprops1}  data2 = {windprops2} label ="Wind energy information"/>}
             {Solar&& <DataRepresntation comparison = {comparison}  data1 = {Solareprops1} data2 = {Solareprops2}  label ="Solar energy information"/>}
             <div className='mt-5' style = {{display: 'flex',
            justifyContent: 'center',margin:'10px'}}>
      
      <CSVLink data={readyToExportData}  filename="data.csv">
             <Button variant="outline-success " onClick ={handleClick()}>Export</Button>
             </CSVLink>
             <Link to={{
      pathname: '/home',
      state: { signed:'signed' }
    }}>
             <Button variant="outline-success " >Back</Button>
             </Link>
             <Link to="/Documentation">
             <Button variant="outline-success " >Documentation</Button>
              </Link>
              <Link to="/">
             <Button variant="outline-success " onClick ={handleSignOut()}>sign out</Button>
             </Link>
             
             </div>

            </div>

        );
    
    
    
    
  
  }

export default Result;