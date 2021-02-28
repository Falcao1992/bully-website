import React from 'react'

import mobilePhone from '@iconify/icons-emojione-monotone/mobile-phone';
import mailIcon from '@iconify/icons-codicon/mail';
import { InlineIcon } from '@iconify/react';
import facebookRect from '@iconify/icons-brandico/facebook-rect';



const Contact = () => {
    return (
        <div>
            <section className="mx-4 my-8 md:px-28 md:py-14">
                <h2>Modalité de Réservation</h2>
                <ul className="space-y-4">
                    <li>- Les chiots peuvent être réservés dès l’âge de 2 semaines, mais ne quitteront l’élevage pour la vente définitive qu'à partir de 8 semaines une fois sevré.</li>
                    <li>- Tous nos chiots vendus sont pucés, vaccinés, et inscrits au LOF.</li>
                    <li>- Ils sont munis d’un carnet de santé, d’un certificat de santé signé par notre vétérinaire et d’un livret d'accueil du chiot. Son pedigree ou dans l'attente de sa réception celui des parents.</li>
                    <li>- Un paquet de ses croquettes habituelles vous sera offert.</li>
                    <li>- Comme pour l'arrivée d'un nouveau-né au sein d'une famille, l'arrivée d'un chiot, votre nouveau compagnon, doit être pensée et mûrement réfléchie.</li>
                </ul>
                <p className="my-8 font-semibold text-center">Pour valider une réservation un acompte vous sera demandé.</p>
            </section>
            
            <section className="flex flex-col items-center p-4 py-8 bg-gray-300 md:py-20 md:px-32 bg-gray-800">
                <h2 className="text-center text-yellow-400">Nous Contactez</h2>
                <div className="flex flex-col space-y-6 md:p-4 justify-evenly place-items-start md:flex-row md:space-y-0 md:space-x-8">
                    
                    <div className="flex flex-col items-center flex-1">
                        <img className="object-cover w-11/12 h-56 rounded-lg" src="https://i.pravatar.cc/305" alt="" />
                        <div className="my-6 w-full">
                            <p className="text-2xl text-center text-white">Julie Lépine</p>
                            <ul className="my-6 text-white text-yellow-400 font-light">
                                <li>Question relative au chiots.</li>
                                <li>Modalité d'adoption.</li>
                                <li>Demande de photo</li>
                            </ul>
                            <ul className="text-white">
                                <li className="mb-2"><a className="font-sans text-xl" href="tel:0668626414" aria-label="phone"><InlineIcon className="inline" icon={mobilePhone}/> 0668626414</a></li>
                                <li><a className="text-xl" href="mailto:lepine_julie@orange.fr" aria-label="mail"><InlineIcon className="inline" icon={mailIcon} /> lepine_julie@orange.fr</a></li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="flex flex-col items-center justify-center flex-1">
                        <img className="object-cover w-11/12 h-56 rounded-lg" src="https://i.pravatar.cc/302" alt="" />
                        <div className="my-6 w-full">
                            <p className="text-2xl text-center text-white">Steven Thang</p>
                            <ul className="my-6 text-yellow-400 font-light">
                                <li>Question relative au chiots.</li>
                                <li>Modalité d'adoption.</li>
                                <li>Informations sur la lignée des parents.</li>
                            </ul>
                            <ul className="text-white">
                                <li className="mb-2"><a className="font-sans text-xl" href="tel:0668684272" aria-label="phone"><InlineIcon className="inline" icon={mobilePhone}/> 0668684272</a></li>
                                <li><a className="text-xl" href="https://www.facebook.com/profile.php?id=100010109858069" target="_blank" rel="noopener noreferrer"><InlineIcon className="inline" icon={facebookRect}/> Steve BullyXl</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.744193049254!2d2.5791469667022424!3d47.22158738958045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47faa68128b5f25d%3A0xc4bfc4b4613f4c8c!2s3%20Chemin%20du%20Chailloux%2C%2018220%20Aubinges!5e0!3m2!1sfr!2sfr!4v1614184636012!5m2!1sfr!2sfr"
                        className="w-full h-96"
                        allow="fullscreen"
                        loading="lazy"
                        title="location breeding"
                >
                </iframe>
            </section>
        </div>
    
    )
}

export default Contact