import React from 'react'

import momPicture from "../../assets/images/mother.jpg"
import dadPicture from "../../assets/images/father.jpg"
import maleIcon from "@iconify/icons-ion/male"
import {InlineIcon} from "@iconify/react"
import femaleIcon from "@iconify/icons-ion/female"


const Genealogy = () => {
    return (
        <div className="">
            <section className="mx-4 my-8 md:px-28 md:py-14">
                <h1>Les Parents</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at beatae dicta dolores
                    esse ex ipsa iusto, labore laudantium magnam nisi veniam. A blanditiis dolorum harum ipsum laborum
                    odit quia?
                    Eligendi itaque modi nemo nostrum quisquam repudiandae sequi tempore. Consectetur dolorem eos, ex
                    hic
                </p>
            </section>
            
            <section id="shila" className="bg-pink-100">
                <div className="flex flex-col p-4 py-8 md:p-20 md:flex-row items-center md:w-11/12 md:mx-auto">
                    <a href={momPicture} target="_blank" rel="noopener noreferrer" aria-label="fullscreen">
                        <img className="w-full md:max-w-xs rounded-lg" src={momPicture} alt="" />
                    </a>
                    <div className="my-4 md:w-3/5 md:mx-auto">
                        <h3 className="mb-6 text-3xl">Shila (Mère) <InlineIcon className="inline text-pink-400"
                                                                               icon={femaleIcon} /></h3>
                        <ul className="mb-6 text-sm font-semibold">
                            <li>Poids: 34kg</li>
                            <li>Date de naissance: 01/11/2019</li>
                            <li>Couleur: Bleu</li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
                            blanditiis cumque ea eos eum explicabo iure, libero natus nesciunt nostrum odio perspiciatis
                            quaerat quia ratione reiciendis saepe, vitae?
                        </p>
                    </div>
                </div>
            </section>
            
            <section id="zorg" className="bg-blue-100">
                <div className="flex flex-col p-4 py-8 md:p-20 md:flex-row items-center md:w-11/12 md:mx-auto">
                <a className="md:order-1"
                   href={dadPicture}
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="fullscreen">
                    <img className="w-full md:max-w-xs rounded-lg" src={dadPicture} alt="" />
                </a>
                <div className="my-4 md:w-3/5 md:mx-auto md:text-right">
                    <h3 className="mb-6 text-3xl">Zorg (Père) <InlineIcon className="inline text-blue-400"
                                                                          icon={maleIcon} /></h3>
                    <ul className="mb-6 text-sm font-semibold">
                        <li>Poids: 44kg</li>
                        <li>Date de naissance: 31/08/2019</li>
                        <li>Couleur: Bleu</li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
                        blanditiis cumque ea eos eum explicabo iure, libero natus nesciunt nostrum odio perspiciatis
                        quaerat quia ratione reiciendis saepe, vitae?
                    </p>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Genealogy