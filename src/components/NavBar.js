import React, {useState} from "react"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    const [activeBurger, setActiveBurger] = useState(true)
    
    const handleOpenBurger = () => {
        setActiveBurger(!activeBurger)
    }
    
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={handleOpenBurger}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!activeBurger ? <svg className="block h-6 w-6"
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
                                : <svg className="block h-6 w-6"
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
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 text-white">
                                <NavLink exact to="/" activeClassName="bg-gray-900"
                                         className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Accueil</NavLink>
                                <NavLink to="/genealogy/" activeClassName="bg-gray-900"
                                         className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Généalogie</NavLink>
                                <NavLink to="/puppy-litters/" activeClassName="bg-gray-900"
                                         className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Notre
                                    Portée</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="sm:hidden" id="mobile-menu">
                {activeBurger && <div className="px-2 pt-2 pb-3 space-y-1 text-white ">
                    <NavLink exact to="/"
                             activeClassName="bg-gray-900"
                             className="block px-3 py-2 rounded-md text-center font-medium">
                        Accueil
                    </NavLink>
                    <NavLink to="/genealogy/"
                             activeClassName="bg-gray-900"
                             className="block px-3 py-2 rounded-md text-center font-medium">
                        Généalogie
                    </NavLink>
                    <NavLink to="/puppy-litters/"
                             activeClassName="bg-gray-900"
                             className="block px-3 py-2 rounded-md text-center font-medium">
                        La portée
                    </NavLink>
                </div>}
            </div>
        </nav>
    )
}

export default NavBar