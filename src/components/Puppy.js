import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"


const Puppy = () => {
    let {id} = useParams()
    
    useEffect(() => {
        console.log(id)
    }, [id])
    
    return (
        <div>
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda aut commodi
                consequuntur
                deleniti ex expedita hic ipsa natus necessitatibus neque quibusdam ratione sapiente
                sint sit ullam unde, veritatis voluptatem!
                Consectetur dignissimos, eveniet ex exercitationem necessitatibpora vel?
            </p>
        </div>
    )
}

export default Puppy