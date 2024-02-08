import EventCard from "@/components/event-card/EventCard";
import styles from './events.module.scss';
import { Event } from "@/utils/types/event";


async function getEvents() {
    try {
        const data = await fetch('http://localhost:3000/api/events', {
            next: {
                revalidate:60
            }
        });
        return data.json()
    } catch (error) {
        console.log(error)
    }
}




export default async function Events() {
    const events = await getEvents();
    return (
        <>
        <h1 className={styles.title}>Upcoming Events</h1>
        <div className={styles.eventList}>
            {
                events?.map((event:Event) => {
                    return (
                     <EventCard event={event}/>
                    )
                })
            }
        </div>
        </>
    )
}