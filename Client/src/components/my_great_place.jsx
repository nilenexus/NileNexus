import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './my_great_place_styles.js';
import ChoroplethMap from '../components/ChoroplethMap';
import {withGoogleMap,GoogleMapReact,polygon} from 'react-google-map'

const onMapLoad = (map) => {
  console.log('map.data: ', map.data)
  map.data.loadGeoJson('/home/ahmed/testHeatMap/choropleth-map/src/Ahmed_Geo.json')
}


 class MyGreatPlace extends Component {
  

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div >
 <withGoogleMap>
  
 </withGoogleMap>
      
             </div>
    );
  }
}
export default MyGreatPlace ;