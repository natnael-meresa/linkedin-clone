import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar.js"
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={`flex flex-col flex-grow md:flex-row  ${styles.main}`}>
        <div className={`basis-1/3 ${styles.leftHero}`}>
          <h1 className={` over-flow ${styles.heroHeading}`} >Welcome to your <br/>professional community</h1>
          <div>
            <Link href="/">
              <a className={`flex justify-between ${styles.heroLink}`}>
                <p>Search for a job</p> <ArrowForwardIosIcon/>
              </a>  
            </Link>
            <Link href="/">
              <a className={`flex justify-between ${styles.heroLink}`}>
                <p>Find a Person you know</p> <ArrowForwardIosIcon/>
              </a>  
            </Link>
            <Link href="/">
              <a className={`flex justify-between ${styles.heroLink}`}>
                <p>Learn a new skill</p> <ArrowForwardIosIcon/>
              </a>  
            </Link>
          </div>
        </div>
        <div className='basis-1/2 hero-image-container'>
        <img src="/LandingPage.svg" alt="Vercel Logo"  className={styles.heroImage} />
        </div>
        
      </div>
    </div>
  )
}