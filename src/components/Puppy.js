import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {puppyList} from "../puppyList/puppyList"

const Puppy = () => {
    const [currentPuppy, setCurrentPuppy] = useState({})
    let {id} = useParams()
    
    useEffect(() => {
        let puppy = puppyList.filter((puppy) => puppy.id === parseInt(id))
        console.log()
        setCurrentPuppy(puppy[0])
    }, [id])
    
    if (!currentPuppy) {
        return <div>Loading ...</div>
    }
    
    return (
        <div>
            <section>
                <div className="flex flex-col items-center p-4 py-8 md:py-20 md:px-32 md:flex-row md:w-4/5 md:mx-auto">
                    
                    
                    <div className="p-1 mb-10 bg-pink-300 rounded-lg md:mr-10 md:mb-0 md:w-1/4">
                        <a className="block p-1 bg-white rounded-lg"
                           href={currentPuppy.picture}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="fullscreen">
                            <img className="w-full rounded-lg"
                                 src={currentPuppy.picture}
                                 alt={currentPuppy.name} />
                        </a>
                    </div>
                    
                    <ul className="space-y-2">
                        <li className="capitalize">Nom: {currentPuppy.name}</li>
                        <li>Sexe: {currentPuppy.sexe}</li>
                    </ul>
                </div>
            </section>
            
            <section className="p-4 py-8 md:py-20 md:px-32 bg-gray-300">
                <h2 className="text-center">Photos de <span className="capitalize">{currentPuppy.name}</span></h2>
                <div className="grid grid-cols-2 px-4 py-8 md:grid-cols-5 gap-y-12 gap-x-8 md:px-0">
                    {currentPuppy.pictures && currentPuppy.pictures.map((picture) => {
                        return (
                            <a key={picture.id}
                               href={picture.url}
                               target="_blank"
                               rel="noopener noreferrer"
                               aria-label="fullscreen">
                                <img src={picture.url} alt={picture.alt} />
                            </a>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Puppy