import styles from '../styles/Home.module.css'
import Link from 'next/link'

import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';

 const signInUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();


    async function submitHandler (event) {
        event.preventDefault();
        try{
            const result = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password,
            });
            if (!result.error) {
                router.replace('/dashboard')
            }else{
                console.log(result.error);
            }
        }catch(error){
            console.error(error);
        }
    }
    return(
        <>
            <nav className={` bg-white ${styles.container} `}>
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
                    </div>
                </div>
            </nav>
            <section className='flex justify-center'>
                <div>
                    <div className={ ` ${styles.signLayout} md:shadow-lg flex justify-items-center justify-center flex-col p-7`}>
                        <div className={styles.formHeading}>
                            <h1 className={styles.title}> Sign In</h1>
                            <p>Stay updated on you professional world</p>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className={`${styles.inputGroup}`}>
                             <input type='text' validation="email|tel" required aria-label="Email or Phone" 
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             />
                             <label  className={styles.labelName}>
                                 <span className={`${styles.contentName}`}>Email or Phone</span>
                             </label>
                            </div>
                            <div className={`${styles.inputGroup}`}>
                             <input type='password'  required aria-label="password" 
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                             />
                             <label className={styles.labelName}>
                                 <span className={`${styles.contentName}`}>Password</span>
                             </label>
                            </div>
                            <Link href="/">
                                <a className={`${styles.btnLink} flex items-center py-2 mr-24 mt-4 px-2`}>
                                    Forget Password?
                                </a>
                            </Link>
                            <div className={`${styles.submitContainer} flex flex-row`}>
                             <button className={`${styles.submitBtn}`}>Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className='p-7'>
                        <p>New to LinkedIn? <Link href="/register"><a className={`${styles.btnLink} py-2 mr-24 mt-4 px-2`}>Join now</a></Link></p>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default signInUser