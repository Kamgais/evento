import styles from './create.module.scss';

export default  function CreateEvent() {
    return (
        <div className={styles.create_event_container}>
            <form action="">
            <div>
                <input type="file" />
            </div>
           <input type="text" placeholder="Title" />
           <input type="text" placeholder="description" />
           <input type="date" />
           <input type="time" />
           <input type="text" placeholder="price" />
           <button>Add Event</button>
           </form>
        </div>
    )
}