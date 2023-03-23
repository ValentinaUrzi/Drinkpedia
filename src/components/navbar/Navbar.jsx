import Logo from '../../assets/logo.png'
import styles from './index.module.scss'

const Navbar = ({ setModalCourseVisibility, sideMenuVisibile, setSideMenuVisibility }) => {

    const modalCourseOpener = () => setModalCourseVisibility(true)
    const sideMenuOpener = () => setSideMenuVisibility(!sideMenuVisibile)

    return (
        <div className={styles.Navbar}>
            <img className={styles.logo} src={Logo} alt="drinkpedia logo" />
            <ul className={styles.list}>
                <a className={styles.a}>About</a>
                <a className={styles.a}>Contatti</a>
                <a className={styles.a}>Social</a>
            </ul>
            <button onClick={modalCourseOpener} className={styles.button}>Prenota una lezione</button>
            <img onClick={sideMenuOpener} className={styles.hamburger} src="https://img.icons8.com/ios-filled/256/menu-rounded.png" alt="menu" />
        </div>
    )
}

export default Navbar