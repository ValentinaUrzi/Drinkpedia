import Logo from '../../assets/logo.png'
import styles from './index.module.scss'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <img className={styles.logo} src={Logo} alt="drinkpedia logo" />
            <ul className={styles.list}>
                <li>About</li>
                <li>Contatti</li>
                <li>Social</li>
            </ul>
        </div>
    )
}

export default Navbar