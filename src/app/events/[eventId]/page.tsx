import { Event } from '@/utils/types/event';
import  styles from './eventId.module.scss';
import Image from 'next/image';


async function getEvent(id: string): Promise<Event|any> {
    try {
        const data = await fetch(`http://localhost:3000/api/events/${id}`, {
            next: {
                revalidate: 60
            }
        })
       const res = await data.json();
       return res.data;
    } catch (error) {
        console.log(error)
    }
}

export default async function EventDetails({params}: {params: {eventId: string}}) {
    const event: Event = await getEvent(params.eventId)
    return (
        <div className={styles.event_details_container}>
            <div className={styles.event_image}>
            <Image
            src={event?.pic}
            alt='event image'
            width={800}
            height={600}
            className='event_image_self'
            />
            </div>
                <div className={styles.event_title}>
                    <h1>{event?.title}</h1>
                </div>
                <div className={styles.event_more_details}>
                    <p>{event?.description}</p>
                    <p>{event?.date}</p>
                </div>
                <div className={styles.event_actions}>
                    <button>Register for the event</button>
                </div>
        </div>
    )
}


export async function generateStaticParams() {
    const events = await fetch('http://localhost:3000/api/events').then((res) => res.json())
        return events.map((event:any) => ({
      eventId: String(event.id),
    }))
  }