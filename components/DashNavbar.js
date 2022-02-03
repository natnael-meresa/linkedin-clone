import Link from 'next/link'
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Dashboard.module.css'
import React, { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import SearchBar from './SearchBar.js'

const DashNavbar = () => {

    const [darkTheme, setDarkTheme] = useState(undefined);
    const [showModal, setShowModal] = useState(false);

    const handleToggle = (event) => {
        setDarkTheme(event.target.checked)
    }

    useEffect(() => {
        if (darkTheme !== undefined) {
            if(darkTheme) {
                document.documentElement.setAttribute("data-theme", "dark");
                window.localStorage.setItem("theme", "dark")
            }else {
                document.documentElement.removeAttribute("data-theme");
                window.localStorage.setItem("theme", "light")
            }
        }
    }, [darkTheme]);

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        );
        setDarkTheme(initialColorValue === "dark");
    }, [])
    // const [isHidden, setHidden] = useState(true)


    // function showMenu(){
    //     setHidden(!isHidden)
    // }

    return (
        <nav className={` bg-white ${styles.dashNavContainer}`}>
            <div className="max-w-6x1 mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div className='flex items-center justify-start'>
                            <Link href="/">
                                <a className="flex items-center pb-1 pt-1 pl-2">
                                    <img src="/logo.svg" alt="Logo" className="h-12 w-24"/>
                                </a>
                            </Link>
                            
                            <div className={`${styles.SearchContainer} justify-center hidden min-md:flex`}>
                                <input aria-autocomplete='list' placeholder='Search' className={`${styles.SearchBar}`} />
                                <div aria-hidden="true" className={`${styles.searchIconContainer}`}>
                                    <SearchIcon className={`${styles.searchIcon}`} />
                                </div>
                            </div>
                            <div className='flex min-md:hidden'>
                                <button onClick={() => setShowModal(true)}><SearchIcon className={`${styles.searchIcon}`} /></button>
                            </div>
                            
                            <SearchBar show={showModal} onClose={() => setShowModal(false)}>
                                <div  className={`${styles.SearchContainer} flex justify-center`}>
                                    <input aria-autocomplete='list' placeholder='Search' className={`${styles.SearchBar}`} />
                                    <div aria-hidden="true" className={`${styles.searchIconContainer}`}>
                                        <SearchIcon className={`${styles.searchIcon}`} />
                                    </div>
                                </div>
                            </SearchBar>

                           

                        </div>
                    </div>

                    <div className=" flex space-x-3 ">
                        <div className='flex items-center'>
                            
                            <Link href="/">
                                <a className='items-center  pt-1 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col '>
                                    <HomeIcon className={styles.homeIcons}/>
                                    <p className={`hidden min-md:flex ${styles.iconFooter} ${styles.homeIconFooter}`}>Home</p>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='items-center pt-1 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col '>
                                    <PeopleIcon className={styles.homeIcons}/>
                                    <p className={`hidden min-md:flex ${styles.iconFooter}`}>My Network</p>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='hidden min-md:flex items-center pt-1 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <BusinessCenterIcon  className={styles.homeIcons}/>
                                    <p className={`${styles.iconFooter} hidden md:flex`}>Jobs</p>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='items-center pt-1 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <MessageIcon  className={styles.homeIcons}/>
                                    <p  className={`hidden min-md:flex ${styles.iconFooter}`}>Messaging</p>
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='items-center pt-1 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <NotificationsIcon className={styles.homeIcons} />
                                    <p  className={`hidden min-md:flex ${styles.iconFooter}`}>Notifications</p>
                                    
                                </a>
                            </Link>
                            <Link href="/" >
                                <a className='hidden min-md:flex items-center pt-1 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <div className={` ${styles.NavAvatarImg} `}>
                                        <img src="/avatar2.jpg" />
                                    </div>
                                    <p className={styles.iconFooter}>Me</p>
                                    
                                </a>
                            </Link>
                            <Link href="/">
                                <a className='hidden min-md:flex items-center pt-1 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 flex flex-col'>
                                    <AppsIcon className={styles.homeIcons} />
                                    <p className={styles.iconFooter}>Work</p>
                                    
                                </a>
                            </Link>
                            <div>
                                <form>
                                    <label className='switch'>
                                        <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
                                        <span className='slider'></span>
                                    </label>
                                </form>
                            </div>
                            
                        </div>
                        
                    </div>
                    

                </div>
            </div>

            
        </nav>
    )
}

export default DashNavbar