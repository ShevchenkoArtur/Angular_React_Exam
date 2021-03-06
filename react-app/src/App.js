import './App.css'
import Header from './components/Header/Header'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ListCarContainer from "./components/ListCar/ListCarContainer";
import AddCarContainer from "./components/AddCar/AddCarContainer";
import EditCarContainer from "./components/EditCar/EditCarContainer";
import RouteError from "./components/RouteError/RouteError";
import {Switch, Route} from 'react-router-dom'
import React from "react";



function App() {
    return (
        <div>
            <Header/>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/list-car' component={ListCarContainer}/>
                <Route exact path='/add-car' component={AddCarContainer}/>
                <Route exact path='/edit-car' component={EditCarContainer}/>
                <Route component={RouteError}/>
            </Switch>
        </div>
    );
}

export default App;
