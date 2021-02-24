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
    
    if(!currentPuppy) {
        return <div>Loading ...</div>
    }
    
    return (
        <div>
            <div>
                <p>{currentPuppy.name}</p>
                <p>{currentPuppy.sexe}</p>
                <img src={currentPuppy.picture} alt={currentPuppy.name} />
            </div>
        </div>
    )
}

export default Puppy