import React, { useState } from 'react';
import {Container,Card,Row} from 'react-bootstrap'; 
import Subject from './subject';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { useLocation,useHistory } from 'react-router-dom'
import logo from './logo2.png';
import {Viewer,Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import pdffile from './Nile_Nexus1.pdf'
function htmlNavigate () {
  const location = useLocation();
  let history = useHistory();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
const [defaultpdffile]= useState(pdffile);
    return(
    <div>
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */}
        {defaultpdffile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultpdffile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      
      </div>
    </div>
    );    
}
 export default  htmlNavigate;