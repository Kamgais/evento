import AppLogo from '../logo/Logo'
import NavButton from './components/NavButton'
import styles from './navbar.module.scss'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'






export default async function Navbar() {
    const session = await getServerSession(options);
    console.log(session)
    return (
        <nav className={styles.navbar}>
            <AppLogo/>
            <ul className={styles.navactions}>
                {
                    session?.user ? (
                        <>
                        <NavButton action='create' />
                        <NavButton action='logout' />
                        </>
                    ) : (
                        <>
                         <NavButton action='login' />
                        <NavButton action='register' />
                        </>
                    )
                }
             
            </ul>
        </nav>
    )
}