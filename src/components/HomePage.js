import React from 'react'

import puppyLittersBanner from '../assets/images/puppyLittersBanner.jpg'
import {Link} from "react-router-dom"

import bullySits from "../assets/images/bullySits.png"

const HomePage = () => {
    return (
        <div>
            <section className="px-8 my-20 text-center md:p-20 relative">
                <img className="fixed top-56 left-0 opacity-20 -z-10"
                     src={bullySits}
                     alt='bully background transparent' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at beatae dicta dolores
                    esse ex ipsa iusto, labore laudantium magnam nisi veniam. A blanditiis dolorum harum ipsum laborum
                    odit quia?
                    Eligendi itaque modi nemo nostrum quisquam repudiandae sequi tempore. Consectetur dolorem eos, ex
                    hic
                </p>
            </section>
            
            <section className="bg-gray-300">
                <div className="flex flex-col items-center p-4 py-8 bg-gray-300 md:p-12 md:flex-row md:w-4/5 md:mx-auto">
                
                
                <div className="flex-1">
                    <img src={puppyLittersBanner} alt="" />
                </div>
                <div className="flex-1 mt-4 md:px-8 md:mt-0">
                    <p>Tout nos chiots de la portée, cherchant une famille</p>
                    <div className="flex justify-end mt-8">
                        <Link to="/puppy-litters/" className="p-2 text-white bg-gray-900 rounded hover:bg-gray-700">Voir
                            la portée</Link>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage