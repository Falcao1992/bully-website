import React from 'react'

import momPicture from "../assets/images/mother.jpg"
import dadPicture from "../assets/images/father.jpg"



const Genealogy = () => {
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
            
            <section className="flex flex-col p-4 py-8 md:p-20 md:flex-row items-center">
                <a href={momPicture} target="_blank" rel="noopener noreferrer" aria-label="fullscreen">
                    <img className="w-full md:max-w-xs rounded-lg" src={momPicture} alt="" />
                </a>
                <div className="my-4 md:w-3/5 md:mx-auto">
                    <h3 className="mb-6 text-3xl">Shila (Mère)</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
                        blanditiis cumque ea eos eum explicabo iure, libero natus nesciunt nostrum odio perspiciatis
                        quaerat quia ratione reiciendis saepe, vitae?
                    </p>
                </div>
            </section>
            
            <section className="flex flex-col p-4 py-8 md:p-20 md:flex-row items-center">
                <a className="md:order-1" href={dadPicture} target="_blank" rel="noopener noreferrer" aria-label="fullscreen">
                    <img className="w-full md:max-w-xs rounded-lg" src={dadPicture} alt="" />
                </a>
                <div className="my-4 md:w-3/5 md:mx-auto md:text-right">
                    <h3 className="mb-6 text-3xl">Zorg (Père)</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores
                        blanditiis cumque ea eos eum explicabo iure, libero natus nesciunt nostrum odio perspiciatis
                        quaerat quia ratione reiciendis saepe, vitae?
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Genealogy