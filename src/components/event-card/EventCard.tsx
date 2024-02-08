"use client";

import { Event } from '@/utils/types/event';
import styles from './eventCard.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



type EventCardProps = {
    event: Event
}




export default function EventCard({event}: EventCardProps) {
    const router = useRouter();

    const navigateToDetailsView = () => {
        router.push(`/events/${event.id}`)
    }
    return (
        <div className={styles.card_container} onClick={navigateToDetailsView}>
         <div className={styles.card_image}>
            <Image
            src={event.pic}
            alt='event image'
            width={300}
            height={200}
            style={{
                borderRadius:'20px 20px 0 0'
            }}
            className='card_image_self'
            />
         </div>
         <div className={styles.card_infos}>
            <p>{event.title}</p>
            <p>{event.date}</p>
            <p>{event.price}$</p>
         </div>
        </div>
    )
}