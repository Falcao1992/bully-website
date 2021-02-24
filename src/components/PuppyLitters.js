import React from 'react'
import {puppyList} from "../puppyList/puppyList"
import PuppyCard from "./PuppyCard"

import {InlineIcon } from '@iconify/react';
import maleIcon from '@iconify/icons-ion/male';
import femaleIcon from '@iconify/icons-ion/female';

const PuppyLitters = () => {
    return (
        <div className="">
            
            <section className="px-8 md:p-20 my-20 text-center">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at beatae dicta dolores
                    esse ex ipsa iusto, labore laudantium magnam nisi veniam. A blanditiis dolorum harum ipsum laborum
                    odit quia?
                    Eligendi itaque modi nemo nostrum quisquam repudiandae sequi tempore. Consectetur dolorem eos, ex
                    hic
                </p>
            </section>
            
            <div className="bg-gradient-to-b from-pink-100 to-blue-100">
                <section className="p-4 py-8 md:p-20">
                    <h2 className="mb-8 text-4xl font-medium text-center tracking-wider">Les Femelles <InlineIcon className="inline text-pink-400" icon={femaleIcon}/></h2>
                    <ul className="grid grid-cols-2 md:grid-cols-7 gap-y-12 gap-x-8">
                        {puppyList.filter((puppy) => puppy.sexe === "female").map((puppy) => {
                            return (
                                <PuppyCard key={puppy.id} puppy={puppy} />
                            )
                        })}
                    </ul>
                </section>
                
                <section className="p-4 py-8 md:p-20">
                    <h2 className="mb-8 text-4xl font-medium text-center tracking-wider">Les Mâle <InlineIcon className="inline text-blue-400" icon={maleIcon}/></h2>
                    <ul className="grid grid-cols-2 md:grid-cols-7 gap-y-12 gap-x-8">
                        {puppyList.filter((puppy) => puppy.sexe === "male").map((puppy) => {
                            return (
                                <PuppyCard key={puppy.id} puppy={puppy} />
                            )
                        })}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default PuppyLitters