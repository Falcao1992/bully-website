import React, {useState} from 'react'

import Header from "./Header"
import NavBar from "./NavBar"
import homeBanner from "../../assets/images/homeBanner.jpg"
import puppyLittersBanner from "../../assets/images/puppyLittersBanner.jpeg"
import puppyBanner from "../../assets/images/puppyBanner.jpg"
import genealogyBanner from "../../assets/images/genealogyBanner.jpg"
import contactBanner from "../../assets/images/contactBanner.jpeg"

import { Icon} from '@iconify/react';
import arrowUpCircle from '@iconify/icons-bi/arrow-up-circle';

import {useLocation} from "react-router-dom"
import Footer from "./Footer"

const Layout = props => {
    
    const [activeBurger, setActiveBurger] = useState(false)
    
    const handleOpenBurger = () => {
        setActiveBurger(!activeBurger)
    }
    
    const closeBurgerTimeout = () => {
        setTimeout(() => {
            setActiveBurger(false)
        }, 700)
    };
    
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
            return <Header banner={puppyLittersBanner} objectPos={'center'} />
        } else if (path.includes('/puppy/')) {
            console.log("PUPPY")
            return <Header banner={puppyBanner} objectPos={'bottom'} />
        } else if (path === '/genealogy/') {
            console.log("GENEALOGY")
            return <Header banner={genealogyBanner} objectPos={'center'} />
        } else if(path === '/contact/') {
            console.log("CONTACT")
            return <Header banner={contactBanner} objectPos={'top'} />
        } else {
            console.log("AUTRE")
            console.log(path)
        }
        
    }
    
    return (
        <div>
            <header className="relative z-40">
                <NavBar activeBurger={activeBurger} setActiveBurger={setActiveBurger} handleOpenBurger={handleOpenBurger} closeBurgerTimeout={closeBurgerTimeout}  />
                {generateHeader(location.pathname)}
            </header>
            <main>
                {props.children}
            </main>
            <div className="fixed bottom-4 right-3 md:right-6 md:bottom-6 text-yellow-400 cursor-pointer" onClick={redirectArrowUp}>
                <Icon icon={arrowUpCircle} width="50px" height="50px" />
            </div>
            <Footer closeBurgerTimeout={closeBurgerTimeout}/>
        </div>
    )
}
export default Layout