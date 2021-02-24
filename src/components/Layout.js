import React from 'react'

import Header from "./Header"
import NavBar from "./NavBar"
import homeBanner from "../assets/images/homeBanner.jpg"
import puppyLittersBanner from "../assets/images/puppyLittersBanner.jpg"
import puppyBanner from "../assets/images/puppyBanner.jpg"
import genealogyBanner from "../assets/images/genealogyBanner.jpg"
import contactBanner from "../assets/images/contactBanner.jpeg"

import { Icon} from '@iconify/react';
import arrowUpCircle from '@iconify/icons-bi/arrow-up-circle';

import {useLocation} from "react-router-dom"

const Layout = props => {
    
    let location = useLocation()
    
    const redirectArrowUp = () => {
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
    };
    
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
        } else if(path === '/contact/') {
            console.log("CONTACT")
            return <Header banner={contactBanner} objectPos={'bottom'} />
        } else {
            console.log("AUTRE")
            console.log(path)
        }
        
    }
    
    return (
        <div>
            <header className="relative">
                <NavBar />
                {generateHeader(location.pathname)}
            </header>
            <main>
                {props.children}
            </main>
            <div className="fixed bottom-4 right-3 text-yellow-400" onClick={redirectArrowUp}>
                <Icon icon={arrowUpCircle} width="50px" height="50px" />
            </div>
            <footer className="py-8 text-center text-white bg-gray-800">Je suis le footer</footer>
        </div>
    )
}
export default Layout