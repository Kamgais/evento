import './global.scss';
import Image from 'next/image';
import homePic from '../../public/images/home.jpg'
import Link from 'next/link';

export default function Home() {
    return (
        <>
        <div style={{
            width: '100vw',
            height: 'calc(100vh - 60px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <h1
        style={{
            marginBottom: 20
        }}
        >Welcome to Evento !!!</h1>
        
        <div style={{
           
            display: 'flex',
            
            
            alignItems: 'center',
            justifyContent: 'center'

        }}>
            <Image 
            src={homePic}
            alt='home image'
            className='home-bg-img'
            />
           
        </div>
        <div 
        style={{
            marginTop: 20
        }}
        >
            <Link href='/events'>See all upcoming events 👉 </Link>
        </div>
        </div>
             
        </>
    )
}