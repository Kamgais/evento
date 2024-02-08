"use client";

import { signIn } from 'next-auth/react';
import styles from './login.module.scss';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter();
    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
     const response =  await signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false
        })
        toast.success('Logged 🎉👍')
        router.push('/events');
        router.refresh();
        console.log({response})
    }
    return (
        <div className={styles.login_container}>
            <h2 className={styles.login_container_title}>LOGIN</h2>
            <form action="" onSubmit={login}>
            <input type="text" name='username' placeholder='Enter your username' />
            <input type="password" name='password' placeholder='Enter your password'/>
            <button type='submit'>Login</button>
            </form>
            
          
        </div>
    )
}