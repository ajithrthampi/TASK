import React from 'react'
import Card from './Card'

const Main = () => {
    return (
        <>
            <div className='w-full h-screen '>
                <div className='pt-20'>
                    <img className='object-cover w-full md:h-[370px] h-[250px] relaive' src="https://i.ytimg.com/vi/KDf8n0IJqcs/maxresdefault.jpg" alt=""/>
                    <div className='absolute md:top-52 top-32  md:px-28 px-12'>
                        <h2 className='md:hidden text-white md:text-5xl text-xl font-light'>MOBILE</h2>
                        <h1 className='md:text-5xl text-xl font-semibold text-white'>WEB SITE</h1>
                        <p className='text-xs text-gray-400 md:w-[300px] w-52 md:pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
                                                      veniam ipsum in corrupti consectetur dolore ducimus culpa nihil praesentium
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-centert pt-5 '>
                    <Card/>
                </div>
                <div className='md:mx-40 mx-7 h-[3px] bg-gray-500  mt-7  mb-2'></div>
                <div className='pb-5'>
                    <ul className='flex justify-center items-center gap-2 text-[7px] md:text-[12px] text-black font-semibold    '>
                        <li>HOME </li>
                        <li>ABOUT US</li>
                        <li>PRESS</li>
                        <li>PHOTO GALLERY</li>
                        <li>VIDEOS</li>
                        <li>PRODUCTS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Main
