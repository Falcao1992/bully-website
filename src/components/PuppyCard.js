import React from "react"
import {Link} from "react-router-dom"

const PuppyCard = ({puppy}) => {
    return (
        <li className="w-32 md:w-40 mb-6">
            <div className="relative bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                <Link className="block bg-white p-1 rounded-full transform hover:rotate-12 transition ease-in-out duration-500" to={`/puppy/${puppy.id}`}>
                    <img className="h-32 md:h-40 w-full object-cover block rounded-full"
                         src={puppy.picture}
                         alt={puppy.name} />
                </Link>
                {!puppy.available &&
                    <span className={`absolute right-0 bottom-0 ${puppy.sexe === "male" ? "bg-blue-200" : "bg-pink-200"} p-2 rounded-full text-sm`}>Réservé</span>}
            </div>
            <h3 className="pt-2 text-center capitalize">{puppy.name}</h3>
        </li>
    )
}

export default PuppyCard