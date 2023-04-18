import React, {useState} from 'react'
import {FcCdLogo} from 'react-icons/fc'
import {AiOutlineMenu} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
        console.log(open);
    }
    return (
        <>
            <div className='w-full fixed top-0 z-30'>
                <div className='md:flex md:justify-between bg-white py-4 md:px-28 px-7'>
                    <div className='font-bold md:text-7xl text-5xl cursor-pointer flex items-center font-[Poppins text-gray-800]'>
                        <FcCdLogo />
                    </div>
                    <div className='md:hidden text-2xl absolute right-8 top-8 cursor-pointer'
                        onClick={handleClick}>
                                {
                        open ? <>
                            <IoMdClose/>
                        </> : <>
                            <AiOutlineMenu />
                        </>
                    } 
                    </div>
                        <ul className={`md:flex md:items-center gap-5  cursor-pointer font-semibold text-lg absolute md:static
                         bg-white left-0 md:w-auto w-full md:z-auto z-[-1] md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                            <li className='hover:text-gray-400 md:my-0 my-7'>HOME</li>
                            <li className='hover:text-gray-400 md:my-0 my-7'>ABOUT US</li>
                            <li className='hover:text-gray-400 md:my-0 my-7'>PRODUCTS</li>
                            <li className='hover:text-gray-400 md:my-0 my-7'>CONTACT</li>
                        </ul>   
                </div>
            </div>
        </>
    )
}

export default Navbar
