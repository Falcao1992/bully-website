import React, {useState} from "react"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    const [activeBurger, setActiveBurger] = useState(true)
    
    const handleOpenBurger = () => {
        setActiveBurger(!activeBurger)
    }
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90">
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={handleOpenBurger}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!activeBurger ? <svg className="block w-6 h-6"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                                  aria-hidden="true">
                                    <path strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                : <svg className="block w-6 h-6"
                                       xmlns="http://www.w3.org/2000/svg"
                                       fill="none"
                                       viewBox="0 0 24 24"
                                       stroke="currentColor"
                                       aria-hidden="true">
                                    <path strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12" />
                                </svg>}
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 text-white">
                                <NavLink exact to="/" activeClassName="bg-gray-900"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Accueil</NavLink>
                                <NavLink to="/genealogy/" activeClassName="bg-gray-900"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Généalogie</NavLink>
                                <NavLink to="/puppy-litters/" activeClassName="bg-gray-900"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Notre
                                    Portée</NavLink>
                                <NavLink to="/contact/" activeClassName="bg-gray-900"
                                         className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="sm:hidden" id="mobile-menu">
                {activeBurger && <div className="px-2 pt-2 pb-3 space-y-1 text-white">
                    <NavLink exact to="/"
                             activeClassName="bg-gray-900"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        Accueil
                    </NavLink>
                    <NavLink to="/genealogy/"
                             activeClassName="bg-gray-900"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        Généalogie
                    </NavLink>
                    <NavLink to="/puppy-litters/"
                             activeClassName="bg-gray-900"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        La portée
                    </NavLink>
                    <NavLink to="/contact/"
                             activeClassName="bg-gray-900"
                             className="block px-3 py-2 font-medium text-center rounded-md">
                        Contact
                    </NavLink>
                </div>}
            </div>
        </nav>
    )
}

export default NavBar