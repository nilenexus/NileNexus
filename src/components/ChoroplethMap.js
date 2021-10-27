import React, { Component } from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import d3 from 'd3';
import Table from './table/table.js';
var test = null ;
var dataTable1=null
var dataTable2=null
class ChoroplethMap extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false , firstSecond : false};
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick = () => {
          console.log("asd");
        this.setState({ firstSecond: !this.state.firstSecond })
        this.setState({ clicked: true })
      }
    componentDidMount() {
        
        // Datamaps expect data in format:
        // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
        //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
        let dataset = {};
/*
        // We need to colorize every country based on "numberOfWhatever"
        // colors should be uniq for every value.
        // For this purpose we create palette(using min/max this.props.data-value)
        let onlyValues = this.props.data.map(function (obj) { return obj[1]; });
        let minValue = Math.min.apply(null, onlyValues),
            maxValue = Math.max.apply(null, onlyValues);

        // create color palette function
        // color can be whatever you wish
        let paletteScale = d3.scale.linear()
            .domain([minValue, maxValue])
            .range(["#EFEFFF", "#02386F"]); // blue color

        // fill dataset in appropriate format
        this.props.data.forEach(function (item) { //
            // item example value ["USA", 70]
            let iso = item[0],
                value = item[1];
            dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
        });
        */
       this.handleClick = this.handleClick.bind(this);
        var data;
        
    }
    render() {
        
        const clicked = this.state.clicked;
        const check = this.state.firstSecond;
        check?dataTable1 = test : dataTable2 = test;
        return (
            <div  style={{width :"100%",}}>
                
            <div id="cloropleth_map" style={{
                height: "100%",
                width: "100%",
            }}>
            </div>
            </div>
           
        );
    }
}

export default ChoroplethMap;