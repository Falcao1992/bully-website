import React from 'react'
import {BrowserRouter as Router, Switch } from "react-router-dom"
import HomePage from "./components/HomePage"
import PuppyLitters from "./components/PuppyLitters"
import Puppy from "./components/Puppy"

import LayoutManage from "./components/LayoutManage"
import Genealogy from "./components/Genealogy"

const App = () => {
    
    return (
        <Router>
            <Switch>
                <LayoutManage exact path="/" component={HomePage} />
                <LayoutManage path="/genealogy" component={Genealogy} />
                <LayoutManage path="/puppy-litters" component={PuppyLitters} />
                <LayoutManage path="/puppy/:id" component={Puppy} />
            </Switch>
        </Router>
    )
}

export default App
