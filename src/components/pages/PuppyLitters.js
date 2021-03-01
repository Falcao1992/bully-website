import React from 'react'
import {Link} from "react-router-dom"
import {puppyList} from "../../puppyList/puppyList"
import PuppyCard from "../PuppyCard"

import {InlineIcon} from '@iconify/react'
import maleIcon from '@iconify/icons-ion/male'
import femaleIcon from '@iconify/icons-ion/female'
import bullyPuppy from "../../assets/images/bullyPuppy.png"

const PuppyLitters = () => {
    return (
        <div className="">
            <section className="mx-4 my-8 md:px-28 md:py-14 relative">
                <img className="fixed top-56 right-0 opacity-20 -z-10"
                     src={bullyPuppy}
                     alt="bully's puppy background transparent" />
                <h1>La portée</h1>
                <ul className="mb-6 text-sm font-semibold">
                    <li>Mère: <Link className="text-pink-400 ml-0.5" to="/genealogy#shila">Shila</Link></li>
                    <li>Père: <Link className="text-blue-400 ml-0.5" to="/genealogy#zorg">Zorg</Link></li>
                    <li>Nombres de Chiots: 13</li>
                    <li>Date de naissance: 21/01/2021</li>
                </ul>
                <p className="text-lg">
                    Nous sommes ravis de vous présenter la portée de Shila et de Zorg, deux magnifique American
                    Bully XL, Shila à donné naissance le 21 janvier 2021 à une grande portée de 13 adorable chiots, composée de 7 femelles et de 6
                    mâles.
                </p>
            </section>
            
            <section className="bg-gradient-to-b from-pink-100 to-blue-100">
                <div className="p-4 pt-8 pb-6 md:px-28 md:py-14 md:pb-10">
                    <h2 className="mb-8 text-4xl font-medium tracking-wider text-center">Les Femelles <InlineIcon
                        className="inline text-pink-400"
                        icon={femaleIcon} /></h2>
                    <ul className="flex flex-wrap justify-evenly md:justify-center md:space-x-4">
                        {puppyList.filter((puppy) => puppy.sexe === "female").map((puppy) => {
                            return (
                                <PuppyCard key={puppy.id} puppy={puppy} />
                            )
                        })}
                    </ul>
                </div>
                
                <div className="p-4 py-8 md:p-20">
                    <h2 className="mb-8 text-4xl font-medium tracking-wider text-center">Les
                        Mâles <InlineIcon className="inline text-blue-400" icon={maleIcon} /></h2>
                    <ul className="flex flex-wrap justify-evenly md:justify-center md:space-x-4">
                        {puppyList.filter((puppy) => puppy.sexe === "male").map((puppy) => {
                            return (
                                <PuppyCard key={puppy.id} puppy={puppy} />
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default PuppyLitters