import styles from './index.module.scss'

const CourseModal = ({ isModalCourseVisible, setModalCourseVisibility, setPopupVisibility, setInputValue }) => {

    const modalCloser = () => {
        setModalCourseVisibility(false)
    }

    const reserveCourse = (e) => {
        modalCloser()
        setPopupVisibility(true)
        setTimeout(() => setPopupVisibility(false), 2000)

        const inputValues = {
            name: e.target[0].value,
            date: e.target[2].value,
            time: e.target[3].value
        }

        setInputValue(inputValues)
    }


    return isModalCourseVisible ? (
        <div className={styles.CourseModal}>
            <div onClick={modalCloser} className={styles.overlay}></div>
            <div className={styles.content}>
                <h2>Prenota la tua lezione!</h2>
                <p>Con il nostro servizio di lezioni private, potrai riservare i nostri Barman per avere una lezione di mixologia e diventare un perfetto padrone di casa alle tue feste! </p>
                <form className={styles.form} onSubmit={reserveCourse}>
                    <label htmlFor="name">Inserisci il tuo nome</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="surname">Inserisci il tuo cognome</label>
                    <input type="text" name="surname" id="surname" required />
                    <label htmlFor="date">Scegli un giorno</label>
                    <input type="date" name="date" id="date" required />
                    <label htmlFor="time">Scegli l'orario</label>
                    <input type="time" name="time" id="time" required />
                    <button type="submit" value="">Prenota la tua lezione</button>
                </form>
            </div>
        </div>
    ) : null
}


export default CourseModal