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
            
            <section className="flex flex-col md:flex-row">
                <article id="shila"
                         className="flex flex-col flex-1 p-4 py-8 bg-pink-100 md:p-20 md:items-center md:w-11/12 md:mx-auto">
                    <a className="overflow-hidden md:h-96" href={momPicture} target="_blank" rel="noopener noreferrer" aria-label="fullscreen">
                        <img className="rounded-lg md:h-96" src={momPicture} alt="" />
                    </a>
                    <div className="my-8">
                        <h3 className="mb-6 text-3xl">Shila (Mère) <InlineIcon className="inline text-pink-400"
                                                                               icon={femaleIcon} /></h3>
                        <ul className="mb-6 text-sm font-semibold">
                            <li>Poids: 34kg</li>
                            <li>Date de naissance: 01/11/2019</li>
                            <li>Couleur: Bleu</li>
                        </ul>
                    </div>
                </article>
                
                <article id="zorg" className="flex flex-col flex-1 p-4 py-8 bg-blue-100 md:p-20 md:items-center md:w-11/12 md:mx-auto">
                    <a className="overflow-hidden md:h-96"
                       href={dadPicture}
                       target="_blank"
                       rel="noopener noreferrer"
                       aria-label="fullscreen">
                        <img className="rounded-lg md:h-96" src={dadPicture} alt="" />
                    </a>
                    <div className="mt-8">
                        <h3 className="mb-6 text-3xl">Zorg (Père) <InlineIcon className="inline text-blue-400"
                                                                              icon={maleIcon} /></h3>
                        <ul className="mb-6 text-sm font-semibold">
                            <li>Poids: 44kg</li>
                            <li>Date de naissance: 31/08/2019</li>
                            <li>Couleur: Bleu</li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Genealogy