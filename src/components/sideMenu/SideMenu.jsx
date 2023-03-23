import styles from './index.module.scss'

const SideMenu = ({sideMenuVisibile}) => {
    return (
        <div className={sideMenuVisibile? `${styles.SideMenu} ${styles.visible}`: styles.SideMenu}>
            <a className={styles.a}>About</a>
            <a className={styles.a}>Contatti</a>
            <a className={styles.a}>Social</a>
        </div>
    )
}

export default SideMenu