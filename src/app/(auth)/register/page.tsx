"use client";

import {  useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.scss';
import { signUp } from '@/lib/signUp';
import { toast } from 'react-hot-toast';

export default function CreateAccountPage() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })
    const router = useRouter();

    const handleFormAction = (e: React.FormEvent<HTMLInputElement>) => {
        const newUser = {...user, [e.currentTarget.name]: e.currentTarget.value}
        setUser(newUser);
    }

    const passwordAreSame = () => {
        if(user.confirmPassword === user.password ) {
            return true;
        } else {
            return false;
        }
    }

    const register = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const matches = passwordAreSame();
        if(!matches) {
            toast.error('Passwords do not match');
            return;
        }
        try {
           await signUp(user);
            toast.success('Account created');
            setUser({
                username: '',
                password: '',
                confirmPassword: ''
            })
            router.push('/login');

        } catch (error) {
            toast.error('An Error occured')
            console.log(error);
        }
        
    }
    return (
        <div className={styles.register_container}>
        <h2 className={styles.register_container_title}>CREATE AN ACCOUNT</h2>
        <form action="" onSubmit={register}>
        <input type="text" placeholder='Enter a username' name='username' value={user.username} onChange={(e) => handleFormAction(e)}/>
        <input type="password" placeholder='Enter a password' name='password' value={user.password} onChange={(e) => handleFormAction(e)}/>
        <input type="password"  placeholder='Confirm your password' name='confirmPassword' onChange={(e) => handleFormAction(e)}/>
        <button type='submit'>Register</button>
        </form>
        
      
    </div>
    )
}