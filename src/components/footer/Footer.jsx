import styles from './index.module.scss'
import Logo from '../../assets/logo.png'


const Footer = () =>{
    return (
        <div className={styles.Footer}>
            <img className={styles.logo} src={Logo} alt="drinkpedia logo" />
            <div className={styles.texts}>
                <p>Autore: Valentina Urzì</p>
                <p>email: mail@gmail.com</p>
                <p>Informativa sulla Privacy</p>
                <p>© 2022-2023 - Tutti i diritti riservati</p>
            </div>
        </div>
    )
}

export default Footer