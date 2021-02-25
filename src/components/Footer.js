import React from "react"
import {NavLink} from "react-router-dom"

const Footer = ({closeBurgerTimeout}) => {
    return (
        <footer className="py-8 flex flex-col md:flex-row md:justify-center text-center text-white bg-gray-800">
            <NavLink exact to="/" onClick={closeBurgerTimeout} activeClassName="text-yellow-400"
                     className="md:mx-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Accueil</NavLink>
            <NavLink to="/genealogy/"
                     onClick={closeBurgerTimeout}
                     activeClassName="text-yellow-400"
                     className="md:mx-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Généalogie</NavLink>
            <NavLink to="/puppy-litters/"
                     onClick={closeBurgerTimeout}
                     activeClassName="text-yellow-400"
                     className="md:mx-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">La Portée</NavLink>
            <NavLink to="/contact/"
                     onClick={closeBurgerTimeout}
                     activeClassName="text-yellow-400"
                     className="md:mx-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">Contact</NavLink>
        </footer>
    )
}

export default Footer