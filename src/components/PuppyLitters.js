import React from 'react'
import {Link} from "react-router-dom"
import {puppyList} from "../puppyList/puppyList"

const PuppyLitters = () => {
    return (
        <div>
            <div className="mt-20">
                <h2 className="text-center text-4xl mb-8">Les Femelles</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
                    {puppyList.filter((puppy) => puppy.sexe === "female").map((puppy) => {
                        return (
                            <Link key={puppy.id} to={`/puppy/${puppy.id}`}>
                                <h3 className="text-center pb-4">{puppy.name}</h3>
                                <img className="w-full block rounded-xl" src={puppy.picture} alt={puppy.name} />
                            </Link>
                        )
                    })}
                </div>
            </div>
    
            <div className="mt-20">
                <h2 className="text-center text-4xl mb-8">Les Male</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
                    {puppyList.filter((puppy) => puppy.sexe === "male").map((puppy) => {
                        return (
                            <Link key={puppy.id} to={`/puppy/${puppy.id}`}>
                                <h3 className="text-center pb-4">{puppy.name}</h3>
                                <img className="w-full block rounded-xl" src={puppy.picture} alt={puppy.name} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PuppyLitters