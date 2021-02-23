import React from 'react'

import puppyLittersBanner from '../assets/images/puppyLittersBanner.jpg'

const HomePage = () => {
    return (
        <div>
            <div className="px-8 mt-20 text-center">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at beatae dicta dolores
                    esse ex ipsa iusto, labore laudantium magnam nisi veniam. A blanditiis dolorum harum ipsum laborum
                    odit quia?
                    Eligendi itaque modi nemo nostrum quisquam repudiandae sequi tempore. Consectetur dolorem eos, ex
                    hic
                </p>
            </div>
            
            <div className="mt-20 flex flex-col md:flex-row items-center">
                <div className="flex-1">
                    <img src={puppyLittersBanner} alt="" />
                </div>
                <div className="flex-1 md:px-4 mt-4 md:mt-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eum
                        mollitia quia reprehenderit sint. Cumque laboriosam minima suscipit. Cupiditate
                        dolorem eius
                    </p>
                    <div className="flex justify-end mt-8">
                        <button className="p-2 rounded text-white bg-gray-900">Voir la portée</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage