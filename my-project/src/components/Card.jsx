import React from 'react'

const Card = () => {
    return (
        <>
            <div className='flex xl:flex-row flex-col md:gap-8 gap-4 px-7'>
                <div className='bg-[#c78348] md:w-96  md:h-52 h-28 p-3 flex justify-center '>
                    <div>
                        <h1 className='md:text-lg text-sm font-medium'>Lorem Ipsum</h1>
                        <p className='md:text-md text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis reprehenderit tempore optio natus eos,
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img className='md:h-32 md:w-96 w-52 h-20' src="https://miro.medium.com/max/1496/1*eaksbuQ8N0nsLE8fwCO0Kg.png" alt=""/>
                    </div>
                </div>

                <div className='bg-[#51705e] md:w-96  md:h-52 h-28 p-3 flex justify-center '>
                    <div>
                        <h1 className='md:text-lg text-sm font-medium'>Lorem Ipsum</h1>
                        <p className='md:text-md text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis reprehenderit tempore optio natus eos,
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img className='md:h-32 md:w-96 w-52 h-20' src="https://miro.medium.com/max/1496/1*eaksbuQ8N0nsLE8fwCO0Kg.png" alt=""/>
                    </div>
                </div>

                <div className='bg-[#40a86b] md:w-96  md:h-52 h-28 p-3 flex justify-center '>
                    <div>
                        <h1 className='md:text-lg text-sm font-medium'>Lorem Ipsum</h1>
                        <p className='md:text-md text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis reprehenderit tempore optio natus eos,
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img className='md:h-32 md:w-96 w-52 h-20' src="https://miro.medium.com/max/1496/1*eaksbuQ8N0nsLE8fwCO0Kg.png" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
