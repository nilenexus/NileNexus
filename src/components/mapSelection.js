import React, { Component } from 'react';
var map = ''
var dataLayer = ''
export default class mapSelection extends Component  {
    constructor(props){
        super(props)
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }
    onScriptLoad() {
        // CREATE YOUR GOOGLE MAPS
        map = new window.google.maps.Map(
          document.getElementById('map'),
           {
                // ADD OPTIONS LIKE STYLE, CENTER, GESTUREHANDLING, ...
                center: { lat: 50.5, lng: 4 },
                zoom: 8,
                gestureHandling: 'greedy',
                disableDefaultUI: true,
            });
    }
    dataHandler = (getJson) => {
        // FIRST I REMOVE THE CURRENT LAYER (IF THERE IS ONE)
        for (var i = 0; i < dataLayer.length; i++) {
            map.data.remove(dataLayer[i])
        }
        // THEN I FETCH MY JSON FILE, IN HERE I'M USING A PROP BECAUSE 
        // I WANT TO USE THIS DATAHANDLER MULTIPLE TIMES & DYNAMICALLY 
        // I CAN NOW DO SOMETHING LIKE THIS: 
        // onClick(this.dataHandler(www.anotherlinktojsonfile.com/yourjsonfile.json))
        // ON EACH BUTTON AND CHOOSE WHICH JSON FILE NEEDS TO BE FETCHED IN MY DATAHANDLER.
        dataLayer = map.data.addGeoJson('./Ahmed_Geo.json')
        // ADD SOME NEW STYLE IF YOU WANT TO
        map.data.setStyle({strokeWeight: 0.5, fillOpacity: 0 });

        map.data.addListener('mouseover', (event) => {
            map.data.revertStyle();
            // ADD A STYLE WHEN YOU HOVER OVER A SPECIFIC POLYGON
            map.data.overrideStyle(event.feature, {strokeWeight: 1, fillOpacity: 0.1 });
            // IN CONSOLE LOG, YOU CAN SEE ALL THE DATA YOU CAN RETURN
            console.log(event.feature)
        });
        map.data.addListener('mouseout', (event) => {
            // REVERT THE STYLE TO HOW IT WAS WHEN YOU HOVER OUT
            map.data.revertStyle();
        });
    }
    componentDidMount() {
        // LOADING THE GOOGLE MAPS ITSELF
        if (!window.google) {
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = 'https://maps.google.com/maps/api/js?key=' + 'AIzaSyDXP-l0_CzOsJhNbQ6LixiHdE3e8lokUKY';
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
          // Below is important. 
          //We cannot access google.maps until it's finished loading
          s.addEventListener('load', e => {
            this.onScriptLoad()
            this.dataHandler('https://linktoyourjson.com/yourjsonfile.json')

          })
        } else {
          this.onScriptLoad()
        }
    }
    render () {
        return (
            <div id='mapContainer'>
                {map}
                <div style={{ width: '100%', height: '100%' }} id='map' />
            </div>
        );
    }
};