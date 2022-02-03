import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';

 const Register = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();


    async function submitHandler (event) {
        event.preventDefault();
        console.log(process.env.MONGO_URI)
        try{
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({email,name, password}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }else{
                router.replace('/dashboard');
            }

        }catch(error){
            console.error(error);
        }
        

    }
    return(
        <>
            <nav className={` bg-white ${styles.container} `}>
                <div className="max-w-6x1 mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="flex space-x-7">
                            <div>
                                <Link href="/">
                                    <a className="flex items-center py-4 px-2">
                                        <img src="/logoText.svg" alt="Logo" className="h-12 w-36 mr-2 "/>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className={`flex justify-center ${styles.authContainer}`}>
                <div>
                    <div className={ ` ${styles.signLayout} flex justify-items-center justify-center flex-col`}>
                        <div className={`${styles.formHeading} flex justify-center `}>
                            <p>Join LinkedIn now - it's free!</p>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className={`${styles.SignUpinputGroup}`}>
                                <label>Email or phone number</label>
                                <input type='text' validation="email|tel" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className={`${styles.SignUpinputGroup}`}>
                                <label>Your Name</label>
                                <input type='text' validation="email|tel" required
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className={`${styles.SignUpinputGroup}`}>
                                <label>Password (6 or more characters)</label>
                                <input type='text' validation="email|tel" required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            
                            <div className={`${styles.submitContainer} flex flex-row mt-7`}>
                             <button className={`${styles.submitBtn}`}>Continue</button>
                            </div>
                        </form>
                    </div>
                    <div className='p-7'>
                        <p>Already on LinkedIn? <Link href="/sign-in"><a className={`${styles.btnLink} py-2 mr-24 mt-4 px-2`}> Sign in</a></Link></p>
                    </div>
                </div>
                
            </section>
        </>
    )
}


export default Register