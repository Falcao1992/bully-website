import React from 'react'
import {BrowserRouter as Router, Switch } from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import PuppyLitters from "./components/pages/PuppyLitters"
import Puppy from "./components/pages/Puppy"

import LayoutManage from "./components/layout/LayoutManage"
import Genealogy from "./components/pages/Genealogy"
import Contact from "./components/pages/Contact"

const App = () => {
    
    return (
        <Router>
            <Switch>
                <LayoutManage exact path="/" component={HomePage} />
                <LayoutManage path="/genealogy" component={Genealogy} />
                <LayoutManage path="/puppy-litters" component={PuppyLitters} />
                <LayoutManage path="/puppy/:id" component={Puppy} />
                <LayoutManage path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default App
