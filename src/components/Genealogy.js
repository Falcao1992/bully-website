import React from 'react'

import momPicture from "../assets/images/mother.jpg"
import dadPicture from "../assets/images/father.jpg"

const Genealogy = () => {
    return (
        <div>
            <div className="mt-20 flex flex-col md:flex-row items-center">
                <img className="w-full md:p-2 md:max-w-xs" src={momPicture} alt="" />
                <div className="my-4 md:w-3/5 md:mx-auto">
                    <h3 className="mb-6 text-3xl">Shila (Mère)</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
                        blanditiis cumque ea eos eum explicabo iure, libero natus nesciunt nostrum odio perspiciatis
                        quaerat quia ratione reiciendis saepe, vitae?
                    </p>
                </div>
            </div>
    
            <div className="mt-20 flex flex-col md:flex-row items-center">
                <img className="w-full md:p-2 md:max-w-xs md:order-1" src={dadPicture} alt="" />
                <div className="my-4 md:w-3/5 md:mx-auto md:text-right">
                    <h3 className="mb-6 text-3xl">Zorg (Père)</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
                        blanditiis cumque ea eos eum explicabo iure, libero natus nesciunt nostrum odio perspiciatis
                        quaerat quia ratione reiciendis saepe, vitae?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Genealogy