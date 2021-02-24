import React from "react"
import {Link} from "react-router-dom"

const PuppyCard = ({puppy}) => {
    return (
        <li>
            <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full">
                <Link className="block bg-white p-1 rounded-full transform hover:rotate-12 transition ease-in-out duration-500" to={`/puppy/${puppy.id}`}>
                    <img className="block w-full rounded-full"
                         src={puppy.picture}
                         alt={puppy.name} />
                </Link>
            </div>
            <h3 className="pt-2 text-center capitalize">{puppy.name}</h3>
        </li>
    )
}

export default PuppyCard