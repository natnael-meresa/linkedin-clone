import Link from 'next/link'
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import styles from '../styles/Home.module.css'
import React, { useState } from "react";

const Navbar = () => {

    // const [isHidden, setHidden] = useState(true)


    // function showMenu(){
    //     setHidden(!isHidden)
    // }

    return (
        <nav className={` bg-white ${styles.container} ${styles.navbar} `}>
            <div className="max-w-6x1 mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="/">
                                <a className="flex items-center py-4 px-2">
                                    <img src="/logoText.svg" alt="Logo" className="h-12 w-36 mr-2 "/>
                                </a>
                            </Link>

                        </div>
                    </div>

                    <div className=" flex space-x-3 ">
                        <div className='hidden md:flex items-center'>
                            <Link href="/">
                                <a className='items-center py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col '>
                                    <ExploreIcon className={styles.homeIcons}/>
                                    <p className={styles.iconFooter}>Discover</p>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='items-center py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <PeopleIcon  className={styles.homeIcons}/>
                                    <p className={styles.iconFooter}>People</p>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='items-center py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <OndemandVideoIcon  className={styles.homeIcons}/>
                                    <p className={styles.iconFooter}>Learning</p>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='items-center py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <BusinessCenterIcon className={styles.homeIcons} />
                                    <p className={styles.iconFooter}>Jobs</p>
                                    
                                </a>
                            </Link>
                            <div className={styles.vl}></div>
                        </div>
                        <div className='flex items-center'>
                            <Link href="/sign-in"><a className={`py-2 px-2 font-medium  transition duration-300 ${styles.singInBtn}`}>Sing In</a></Link>
                        </div>
                        
                    </div>
                    

                </div>
            </div>

            
        </nav>
    )
}

export default Navbar