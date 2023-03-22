import styles from './index.module.scss'

const Card = ({ data, setDetailsVisible, setCatVisibility }) => {

    return (
        <div onClick={() => {
            setDetailsVisible({ visible: true, data })
            setCatVisibility(false)}} className={styles.Card} >
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <img className={styles.img} src={data.strDrinkThumb} alt={data.strDrink} />
                    <h2>{data.strDrink}</h2>
                    <p>{data.strCategory}</p>
                    <p>{data.strAlcoholic}</p>
                </div>
            </div>
        </div >
    )
}

export default Card