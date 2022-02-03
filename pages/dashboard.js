import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import NotesIcon from '@mui/icons-material/Notes';
import DashNavbar from "../components/DashNavbar.js"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddIcon from '@mui/icons-material/Add';
import ErrorIcon from '@mui/icons-material/Error';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
const Dashboard = () => {
    return(
        <div>
            <DashNavbar />
            <div className={`py-5 px-6 md:px-12 lg:px-24 ${styles.dashboard}`}>
                <div className={`grid grid-cols-12 gap-2 md:gap-4 `}>
                    <div className={`col-span-12 md:col-span-5 lg:col-span-3 flex flex-col ${styles.leftSideTop}` }>
                        <div className={`${styles.topBanner} ${styles.dashContentContainer}`}>
                            <div>
                                <div className={` ${styles.ProfileTop} `} >
                                    <img src="/licdn.svg" />
                                </div>
                                <div className={`flex justify-center`}>
                                    <Link href="/">
                                        <a className={` ${styles.avatarLink}`}>
                                            <div className={` ${styles.avatarImg} `}>
                                                <img src="/avatar2.jpg" />
                                            </div>
                                            <div className={ `${styles.dashboardText} font-semibold text-4xl`} >Profile Name</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className={`flex justify-center font-extralight ${styles.dashboardText}`}>username@gmail.com</div>  
                            </div>
                            <div className='py-5'>
                                <div>
                                    <ul>
                                        <li className={`flex justify-between  font-normal text-xl ${styles.dashboardText}`}>Who viewed your profile <span className='text-blue-500'>321</span> </li> 
                                        <li className={`flex justify-between font-normal text-xl ${styles.dashboardText}`}>Views of your post <span className='text-blue-500'>1,892</span></li> 
                                    </ul>
                                </div>
                            </div>
                            <a>
                                <div  className='pb-4'>
                                    <h3 className={ `${styles.dashboardText} font-extralight`}>Access exclusive tools & insights</h3>
                                    <span className={ `${styles.dashboardText} font-normal`}>Try Premium Free</span>
                                </div>
                                
                            </a>
                            <a >
                                <span className={ `${styles.dashboardText} font-normal flex`}> <BookmarkIcon className={`${styles.bookmarkIcon}`}/> My Items</span>
                            </a>
                        </div>
                        <div className={`${styles.topBanner} ${styles.dashContentContainer}`}>
                            <div>
                                <ul>
                                    <li className='text-blue-500'>Groups</li>
                                    <li className='flex justify-between text-blue-500'>Events <AddIcon/></li>
                                    <li className='text-blue-500'>Followed Hashtags</li>
                                </ul>
                            </div>
                            <div className='flex justify-center pt-4 font-extralight'>
                                Discover More
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-12 md:col-span-7 lg:col-span-5 flex flex-col ${styles.mainSide} `}>
                        <div className={`${styles.TopMainSide} ${styles.dashContentContainer} `}>
                            <div>
                                <div className={`flex justify-between`}>
                                    <div className={` ${styles.MainAvatarImg} `}>
                                        <img src="/avatar2.jpg" />
                                    </div>
                                    <div className={`${styles.startPostContainer} flex flex-row grow`}>
                                        <button className={`${styles.startPostBtn}`}>Start a Post</button>
                                    </div>
                                </div>
                                <div className={`flex justify-between px-4 py-2`}>
                                    <button className={`flex `}><InsertPhotoIcon className={`${styles.photoIcon}`}/><span className='pl-1'>Photo</span></button>
                                    <button className={`flex `}><VideoCameraBackIcon className={`${styles.videoIcon}`} /><span className='pl-1'>Video</span></button>
                                    <button className={`flex `}><BusinessCenterIcon className={`${styles.jobIcon}`}/><span className='pl-1'>Job</span></button>
                                    <button className={`flex `}><NotesIcon className={`${styles.noteIcon}`}/><span className='pl-1'>Write article</span></button>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.bottomMainSide} ${styles.dashContentContainer}`}>
                            <div>
                                <div className={`flex justify-between`}>
                                    <div className={` ${styles.MainAvatarImg} `}>
                                        <img src="/avatar2.jpg" />
                                    </div>
                                    <div className={`${styles.startPostContainer} grow`}>
                                        <div className={`flex justify-between`}>
                                            <div className={`flex flex-col`}>
                                                <h2 className='font-semibold'>User Name</h2>
                                                <p className='font-thin text-sm'>useremail@gmail.com</p>
                                                <p className='font-thin text-sm'>11 minutes ago</p>
                                            </div>
                                            <div>
                                                <MoreHorizIcon/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex justify-between px-4 py-2`}>
                                    <p>Drafting the second post</p>
                                </div>
                                <div className={`flex justify-between px-14 py-2`}>
                                    <button className='font-light'> <ThumbUpIcon className={`${styles.thumbIcon}`}/> Like</button>
                                    <button className='font-light'> <DeleteIcon className={`${styles.deleteIcon}`} /> Delete post</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-12 md:col-span-12 lg:col-span-4`}>
                        <div className={`${styles.rightSideTop} ${styles.dashContentContainer}`}>
                            <div className={`flex justify-between`}>
                                <h3 className='text-lg font-semibold'>LinkedIn News </h3> <ErrorIcon/>
                            </div>
                            <div>
                                <div className={`flex`}>
                                    <FiberManualRecordIcon className={styles.dotIcons}/>
                                    <div className={`${styles.newsContainer}`}>
                                        <p>Pope Benedict XVI knew of abusive priests...</p>
                                        <p>1 hour ago</p>
                                    </div>
                                </div>
                                <div className={`flex`}>
                                    <FiberManualRecordIcon className={styles.dotIcons}/>
                                    <div  className={`${styles.newsContainer}`}>
                                        <p>Pope Benedict XVI knew of abusive priests...</p>
                                        <p>1 hour ago</p>
                                    </div>
                                </div>
                                <div className={`flex`}>
                                    <FiberManualRecordIcon className={styles.dotIcons}/>
                                    <div  className={`${styles.newsContainer}`}>
                                        <p>Pope Benedict XVI knew of abusive priests...</p>
                                        <p>1 hour ago</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={`${styles.rightSideBottom} ${styles.dashContentContainer}`}>
                            <img src="/ad.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard