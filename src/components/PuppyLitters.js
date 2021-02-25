import React from 'react'
import {puppyList} from "../puppyList/puppyList"
import PuppyCard from "./PuppyCard"

import {InlineIcon} from '@iconify/react'
import maleIcon from '@iconify/icons-ion/male'
import femaleIcon from '@iconify/icons-ion/female'

const PuppyLitters = () => {
    return (
        <div className="">
            <section className="mx-4 my-8 md:px-28 md:py-14">
                <h2>La portée</h2>
                <p className="text-lg">
                    Nous sommes ravis de vous présenter la portée de Shila et de Zorg, tous deux de magnifique American
                    Bully XL, Shila leurs à donner naissance le 21 janvier 2021 à une grande portée de 13 adorable chiots, dont 7 femelles et 6
                    mâles.
                </p>
            </section>
            
            <section className="bg-gradient-to-b from-pink-100 to-blue-100">
                <div className="p-4 py-8 md:px-28 md:py-14">
                    <h2 className="mb-8 text-4xl font-medium text-center tracking-wider">Les Femelles <InlineIcon
                        className="inline text-pink-400"
                        icon={femaleIcon} /></h2>
                    <ul className="grid grid-cols-2 md:grid-cols-7 gap-y-12 gap-x-8">
                        {puppyList.filter((puppy) => puppy.sexe === "female").map((puppy) => {
                            return (
                                <PuppyCard key={puppy.id} puppy={puppy} />
                            )
                        })}
                    </ul>
                </div>
                
                <div className="p-4 py-8 md:p-20">
                    <h2 className="mb-8 text-4xl font-medium text-center tracking-wider">Les
                        Mâle <InlineIcon className="inline text-blue-400" icon={maleIcon} /></h2>
                    <ul className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-8">
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