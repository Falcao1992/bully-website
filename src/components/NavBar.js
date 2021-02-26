import React from "react"
import {NavLink, Link} from "react-router-dom"
import logo from "../assets/images/logo.png"

const NavBar = ({activeBurger, closeBurgerTimeout, handleOpenBurger}) => {
   

    return (
        <nav className="fixed top-0 w-full bg-gray-800 z-50">
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20 z-50 bg-gray-800">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                        <button type="button" aria-controls="mobile-menu" aria-expanded="false" onClick={handleOpenBurger}
                                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!activeBurger
                                ?
                                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                :
                                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>}
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 text-white bg-gray-800 bg-opacity-90">
                                <NavLink exact to="/" onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Accueil</NavLink>
                                <NavLink to="/genealogy/" onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Généalogie</NavLink>
                                <NavLink to="/puppy-litters/" onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">La
                                    Portée</NavLink>
                                <NavLink to="/contact/" onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="text-white mr-4 helperCenter text-yellow-400 text-sm font-thin tracking-wide">
                        <span>American Bully XL</span>
                    </div>
                    <div>
                        <Link to="/puppy-litters/">
                        <img className="h-16" src={logo} alt="chiot leve la patte" />
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className={`sm:hidden fixed z-30 w-full bg-gray-800 bg-opacity-90 transition duration-700 ease-in-out ${activeBurger ? 'transform translate-y-0': 'transform -translate-y-full'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 text-white z-40">
                    <NavLink exact to="/"
                             onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        Accueil
                    </NavLink>
                    <NavLink to="/genealogy/"
                             onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        Généalogie
                    </NavLink>
                    <NavLink to="/puppy-litters/"
                             onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        La portée
                    </NavLink>
                    <NavLink to="/contact/"
                             onClick={closeBurgerTimeout} activeClassName="bg-gray-900 text-yellow-400"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar