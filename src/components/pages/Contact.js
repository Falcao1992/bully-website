import React from 'react'

import mobilePhone from '@iconify/icons-emojione-monotone/mobile-phone';
import mailIcon from '@iconify/icons-codicon/mail';
import avatarMan from "../../assets/images/avatarMan.jfif"
import avatarWoman from "../../assets/images/avatarWoman.jfif"
import { InlineIcon } from '@iconify/react';


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
                        <img className="object-cover w-11/12 h-56 rounded-lg" src={avatarWoman} alt="" />
                        <div className="my-6 w-full">
                            <p className="text-2xl text-center text-white">Sarah Connor</p>
                            <ul className="my-6 text-white text-yellow-400 font-light">
                                <li>Question relative au chiots.</li>
                                <li>Modalité d'adoption.</li>
                                <li>Demande de photo</li>
                            </ul>
                            <ul className="text-white">
                                <li className="mb-2"><a className="font-sans text-xl" href="tel:0668626424" aria-label="phone"><InlineIcon className="inline" icon={mobilePhone}/> 0668626424</a></li>
                                <li><a className="text-xl" href="mailto:sarah_connor@orange.fr" aria-label="mail"><InlineIcon className="inline" icon={mailIcon} /> sarah_connor@orange.fr</a></li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="flex flex-col items-center justify-center flex-1">
                        <img className="object-cover w-11/12 h-56 rounded-lg" src={avatarMan} alt="" />
                        <div className="my-6 w-full">
                            <p className="text-2xl text-center text-white">John Doe</p>
                            <ul className="my-6 text-yellow-400 font-light">
                                <li>Question relative au chiots.</li>
                                <li>Modalité d'adoption.</li>
                                <li>Informations sur la lignée des parents.</li>
                            </ul>
                            <ul className="text-white">
                                <li className="mb-2"><a className="font-sans text-xl" href="tel:0678684272" aria-label="phone"><InlineIcon className="inline" icon={mobilePhone}/> 0678684272</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.587935061132!2d5.4600693154863915!3d43.3019503791349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9be9342fb2171%3A0x5004c17cc772f52c!2sCentre%20d&#39;entra%C3%AEnement%20Robert%20Louis-Dreyfus%20-%20Olympique%20de%20Marseille!5e0!3m2!1sfr!2sfr!4v1614561624039!5m2!1sfr!2sfr"
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