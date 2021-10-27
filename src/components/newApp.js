import React, { Component } from 'react';
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
import checkBoxList from './checkBoxList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './Home';
import MainPage from './MainPage';

function newApp() {
    return (
        <main>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/MainPage" component={MainPage} />
            </Switch>
        </main>
    )
}
