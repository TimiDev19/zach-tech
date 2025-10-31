import { Email, Facebook, LinkedIn, LocationCity, LocationOn, Phone, WhatsApp, X } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div
                className=' w-full lg:h-[50vh] bg-[#000033] flex flex-col lg:flex-row items-start p-[10px] lg:items-center justify-between text-white'
            >
                <div className=' lg:w-[30%] h-full flex flex-col items-start lg:items-center justify-center'>
                    <h1 className=' text-3xl font-extrabold uppercase'>Zach Technologies</h1>
                    <p className=' italic'>"Technologies beyond possibilities"</p>
                </div>
                <div className=' w-[70%] px-[10px] h-full hidden lg:flex items-center justify-between'>
                    <div className=' w-[30%] h-full py-[20px]'>
                        <ul className=' mb-[40px]'>
                            <li className=' uppercase font-bold text-xl mb-[20px]'>Contact Us</li>
                            <li className=' mb-2'><Phone className='mr-2' /> +234 907 682 7649</li>
                            <li className=' mb-2'><Email className='mr-2' />Zachtech56@gmail.com</li>
                            <li className=' mb-2'><WhatsApp className='mr-2' />+234 907 682 7649</li>
                            <li className=' mb-2'><LocationOn className='mr-2' />Abuja</li>
                        </ul>

                        <ul className=' mb-[40px]'>
                            <li className=' uppercase font-bold text-xl mb-[20px]'>Social</li>
                            <div className=' w-full flex items-center justify-start'>
                                <WhatsApp className=' mr-2 cursor-pointer' />
                                <LinkedIn className=' mr-2 cursor-pointer' />
                                <Facebook className=' mr-2 cursor-pointer' />
                                <X className=' mr-2 cursor-pointer' />
                            </div>
                        </ul>
                    </div>
                    <div className=' w-[30%] h-full py-[20px]'>
                        <ul className=' mb-[40px]'>
                            <li className=' uppercase font-bold text-xl mb-[20px]'>Services</li>
                            <li className=' mb-2'>Web Development</li>
                            <li className=' mb-2'>Ui/Ux Desgin</li>
                            <li className=' mb-2'>Graphic Designs</li>
                            <li className=' mb-2'>FrontEnd Development</li>
                            <li className=' mb-2'>BackEnd Development</li>
                            <li className=' mb-2'>Mobile Development</li>
                            <li className=' mb-2'>Graphic Design</li>
                            <li className=' mb-2'>Digital Literacy</li>
                        </ul>
                    </div>
                    <div className=' w-[30%] h-full py-[20px]'>
                        <ul className=' mb-[40px]'>
                            <li className=' uppercase font-bold text-xl mb-[20px]'>Links</li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className='relative group'>
                                    Home
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className=' relative group'>
                                    Services
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className=' relative group'>
                                    About
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className=' relative group'>
                                    Why Us?
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className=' relative group'>
                                    Projects
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className=' relative group'>
                                    Team
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className=' relative group'>
                                    Clients
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                            <li className=' mb-2'>
                                <Link href={"/#home"} className=' relative group'>
                                    Contact
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className=' w-[100%] px-[10px] h-full flex lg:hidden flex-col items-center justify-between'>
                    <div className=' w-[100%] h-full py-[20px]'>
                        <ul className=' mb-[40px]'>
                            <li className=' uppercase font-bold text-xl mb-[20px]'>Contact Us</li>
                            <li className=' mb-2'><Phone className='mr-2' /> +234 907 682 7649</li>
                            <li className=' mb-2'><Email className='mr-2' />Zachtech56@gmail.com</li>
                            <li className=' mb-2'><WhatsApp className='mr-2' />+234 907 682 7649</li>
                            <li className=' mb-2'><LocationOn className='mr-2' />Abuja</li>
                        </ul>

                        <ul className=' mb-[40px]'>
                            <li className=' uppercase font-bold text-xl mb-[20px]'>Social</li>
                            <div className=' w-full flex items-center justify-start'>
                                <WhatsApp className=' mr-2 cursor-pointer' />
                                <LinkedIn className=' mr-2 cursor-pointer' />
                                <Facebook className=' mr-2 cursor-pointer' />
                                <X className=' mr-2 cursor-pointer' />
                            </div>
                        </ul>
                    </div>
                    <div className=' flex items-start justify-between w-[100%]'>
                        <div className=' w-[45%] h-full py-[20px]'>
                            <ul className=' mb-[40px]'>
                                <li className=' uppercase font-bold text-xl mb-[20px]'>Services</li>
                                <li className=' mb-2'>Web Development</li>
                                <li className=' mb-2'>Ui/Ux Desgin</li>
                                <li className=' mb-2'>Graphic Designs</li>
                                <li className=' mb-2'>FrontEnd Development</li>
                                <li className=' mb-2'>BackEnd Development</li>
                                <li className=' mb-2'>Mobile Development</li>
                                <li className=' mb-2'>Graphic Design</li>
                                <li className=' mb-2'>Digital Literacy</li>
                            </ul>
                        </div>
                        <div className=' w-[45%] h-full py-[20px]'>
                            <ul className=' mb-[40px]'>
                                <li className=' uppercase font-bold text-xl mb-[20px]'>Links</li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className='relative group'>
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className=' relative group'>
                                        Services
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className=' relative group'>
                                        About
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className=' relative group'>
                                        Why Us?
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className=' relative group'>
                                        Projects
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className=' relative group'>
                                        Team
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className=' relative group'>
                                        Clients
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                                <li className=' mb-2'>
                                    <Link href={"/#home"} className=' relative group'>
                                        Contact
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full h-[50px] flex items-center text-center justify-center bg-[#000033] text-white'>
                <p>© 2025 Zach Technologies Industries. All right reserved.</p>
            </div>
        </div>
    )
}

export default Footer