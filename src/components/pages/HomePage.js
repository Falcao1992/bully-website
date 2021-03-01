import React from 'react'

import puppyLittersBanner from '../../assets/images/puppyLittersBanner.jpeg'
import genealogyBanner from '../../assets/images/genealogyBanner.jpg'
import contactBanner from '../../assets/images/contactBanner.jpeg'
import {Link} from "react-router-dom"

import bullySits from "../../assets/images/bullySits.png"

const HomePage = () => {
    return (
        <div>
            <section className="mx-4 my-8 md:px-28 md:py-14">
                <img className="fixed left-0 top-56 opacity-20 -z-10"
                     src={bullySits}
                     alt='bully background transparent' />
                <h1>American Bully XL</h1>
                <p className="mb-8 text-lg">
                    L’American Bully fait partie des races de chiens assez récentes, qui est le fruit de plusieurs
                    croisements, notamment avec diverses races type Bulldog. C’est un chien aussi fort et massif
                    qu’affectueux. Très proche de son groupe social, il sera très agréable à vivre si une bonne
                    éducation et surtout une bonne socialisation ont été proposées dès le plus jeune âge du chien.
                </p>
                
                <h2>Son Caractère</h2>
                <p className="mb-8 text-lg">L’American Bully est aussi massif qu’affectueux. Il n’aime pas la solitude
                    et
                    apprécie
                    particulièrement être entouré de son groupe social, il sera très attaché à son maître. Excellent
                    chien de garde mais pas pour autant agressif. Sa simple présence peut facilement faire fuir des
                    éventuels intrus.</p>
                <a className="p-2 text-white bg-gray-800 rounded hover:text-yellow-400"
                   href="https://www.toutoupourlechien.com/race-de-chien/american-bully.html"
                   target="_blank"
                   rel="noopener noreferrer">
                    <span>En savoir plus</span>
                </a>
            </section>
            
            <section className="bg-gray-200">
                <div className="flex flex-col md:py-16 md:flex-row md:w-10/12 md:mx-auto md:space-x-6">
                    
                    <article className="flex-col items-center p-4 py-8 bg-gray-300 md:p-12 md:w-1/3 md:shadow-lg">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                            <img className="w-full object-cover" src={genealogyBanner} alt="" />
                        </div>
                        <div className="mt-8 tracking-wider text-justify">
                            <p>Si vous souhaitez connaitre l'arbre généalogique de votre futur compagnon, vous pourrez
                                ainsi découvrir ses parents et bien plus encore. </p>
                            <div className="flex justify-end mt-8">
                                <Link to="/genealogy/"
                                      className="p-2 text-white bg-gray-800 rounded hover:text-yellow-400">Voir les
                                    Parents</Link>
                            </div>
                        </div>
                    </article>
                    
                    <article className="flex-col items-center p-4 py-8 bg-gray-800 md:bg-gray-300 md:p-12 md:w-1/3 md:shadow-lg">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                            <img className="w-full object-cover" src={puppyLittersBanner} alt="" />
                        </div>
                        <div className="mt-8 tracking-wider text-justify text-yellow-400 md:text-black">
                            <p>Tous nos chiots sont répertorié sur cette page, ainsi vous pourrez découvrir chaque
                                chiots, parmi de nombreuses photos individuelle régulièrement mise à jour</p>
                            <div className="flex justify-end mt-8">
                                <Link to="/puppy-litters/"
                                      className="p-2 text-white bg-gray-700 rounded hover:text-yellow-400">Voir
                                    les Chiots</Link>
                            </div>
                        </div>
                    </article>
                    
                    <article className="flex-col items-center p-4 py-8 bg-gray-300 md:p-12 md:w-1/3 md:shadow-lg">
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden ">
                            <img className="w-full object-cover" src={contactBanner} alt="" />
                        </div>
                        <div className="mt-8 tracking-wider text-justify">
                            <p>Pour toute questions sur les modalités d'adoption, demande de renseignement, demandes de
                                photo spécifiques, n'hésitez pas à nous contactez </p>
                            <div className="flex justify-end mt-8">
                                <Link to="/contact/"
                                      className="p-2 text-white bg-gray-800 rounded hover:text-yellow-400">Contactez
                                    nous</Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default HomePage