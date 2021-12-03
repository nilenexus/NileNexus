import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ChoroplethMap from '../components/ChoroplethMap';
import MyGreatPlace from './my_great_place.jsx';
import Polygon from 'google-map-react';
import Map from 'google-map-react';
const googleMapTry = ({ text }) => <div>{text}</div>;

const handleApiLoaded = (map, maps) => {

  var selectedPoints=[];
  var data = require('../Stage_1geojson.json');
  console.log("ahmed test");
  console.log(data.features.geometry);
  for (let i = 0; i < data.features.length; i++)
{
    let obj = data.features[i];
    let my_coordinates = [];
    let coordinates = obj.geometry.coordinates;
    if(obj.geometry.type == "MultiPolygon"){
      for(let j=0; j<coordinates[0][0].length;j++){
        const myObj = {
          lng: coordinates[0][0][j][0],
          lat: coordinates[0][0][j][1],
        };
        my_coordinates.push(myObj);
     }
    }
    else{
    for(var j=0; j<coordinates[0].length;j++){
      const myObj = {
        lng: coordinates[0][j][0],
        lat: coordinates[0][j][1],
      };
      my_coordinates.push(myObj);
   }
  }
 
   let bermudaTriangle = new maps.Polygon({
    paths: my_coordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 0.5,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: true,
    data :obj,
    selected : false,
  });
  
  bermudaTriangle.setMap(map);
  bermudaTriangle.addListener("click",function(){
    console.log("clicked");
    if(!bermudaTriangle.selected){
    selectedPoints.push(bermudaTriangle)
    bermudaTriangle.selected=true;
    this.setOptions({fillColor: "#FFF000"});

  }else{
    this.setOptions({fillColor: "#00FF00"});
    bermudaTriangle.selected=false;
  }
    // if more than two selected remove the first one 
    if( selectedPoints.length>2){
      console.log(selectedPoints.length)
      selectedPoints[0].setOptions({fillColor: "#FF0000"});
      selectedPoints[0].selected=false;
      selectedPoints=selectedPoints.slice(1)
    }
    console.log(selectedPoints)
    window.helloComponent.handleLangChange(selectedPoints);
  }); 
  bermudaTriangle.addListener("mouseover",function(){
    if(!bermudaTriangle.selected){
    this.setOptions({fillColor: "#00FF00"});}
   }); 
   bermudaTriangle.addListener("mouseout",function(){
     if(!bermudaTriangle.selected){
    this.setOptions({fillColor: "#FF0000"});}
   }); 


}

  const triangleCoords = [
    {lng: 32.7, lat: 23.8},
    {lng: 33.2, lat: 23.8},
    {lng: 33.2, lat: 24.2},
    {lng: 32.7, lat: 24.2},
    {lng: 32.7, lat: 23.8}
  ];

  
}

class SimpleMap extends Component {

handleLangChange = (data) => {
  console.log("here");
  this.props.onSelectLanguage(data);   

}
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    window.helloComponent = this;
  }

  static defaultProps = {
    center: {
      lat: 23.8,
      lng: 32.77
    },
    zoom:3
  };
  handleApiLoaded = (map, maps) => {
    console.log(this.mapRef);

    const mapDisplay = maps.Map(this.mapRef, {
      zoom: 11,
      center: { ...this.props.center }
    });
    

    console.log({ map, maps });

    mapDisplay.data.loadGeoJson(
      "/home/ahmed/testHeatMap/choropleth-map/src/components/Canada.topo.json"
    );
    mapDisplay.data.setStyle({
      fillColor: "green",
      strokeWeight: 1
    });
  };
  
  render() {
    var triangleCoords = [
      {lng: 32.7, lat: 23.8},
      {lng: 33.2, lat: 23.8},
      {lng: 33.2, lat: 24.2},
      {lng: 32.7, lat: 24.2},
      {lng: 32.7, lat: 23.8}
    ];
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' ,zIndex:1}}>
        <GoogleMapReact
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
         yesIWantToUseGoogleMapApiInternals //this is important!
         bootstrapURLKeys={{ key: 'AIzaSyD11slh5d4AxMy3Dg5M1Y_v-ptlTPsAU98'}}

         onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
         options={{
           
          styles: [{ featureType: "administrative.country",
          elementType: "geometry", stylers: [{ "visibility": "off" }] }]
      }}
        >
         
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;