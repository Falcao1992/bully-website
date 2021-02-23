import React from 'react'

import Header from "./Header"
import NavBar from "./NavBar"
import homeBanner from "../assets/images/homeBanner.jpg"
import puppyLittersBanner from "../assets/images/puppyLittersBanner.jpg"
import puppyBanner from "../assets/images/puppyBanner.jpg"
import genealogyBanner from "../assets/images/genealogyBanner.jpg"
import {useLocation} from "react-router-dom"

const Layout = props => {
    
    let location = useLocation()
    
    const generateHeader = (path) => {
        if (path === '/') {
            console.log("HOME")
            return <Header banner={homeBanner} objectPos={'center'} />
        } else if (path === '/puppy-litters/') {
            console.log('PUPPY LITTER')
            return <Header banner={puppyLittersBanner} objectPos={'bottom'} />
        } else if (path.includes('/puppy/')) {
            console.log("PUPPY")
            return <Header banner={puppyBanner} objectPos={'bottom'} />
        } else if (path === '/genealogy/') {
            console.log("GENEALOGY")
            return <Header banner={genealogyBanner} objectPos={'bottom'} />
        } else {
            console.log("AUTRE")
            console.log(path)
        }
    }
    
    return (
        <div>
            <header>
                <NavBar />
                {generateHeader(location.pathname)}
            </header>
            <main className="container">
                {props.children}
            </main>
            <footer className="mt-8 py-8 text-center text-white bg-gray-900">Je suis le footer</footer>
        </div>
    )
}
export default Layout