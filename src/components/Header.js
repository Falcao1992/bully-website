import React from 'react'


const Header = ({banner, objectPos}) => {
    return (
        <div>
            <img src={banner} alt="" className={`object-cover object-${objectPos} h-screen w-full`} />
        </div>
    )
}

export default Header