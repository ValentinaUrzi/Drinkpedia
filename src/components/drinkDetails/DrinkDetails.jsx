import styles from './index.module.scss'

const DrinkDetails = ({ data, setDetailsVisible, setCatVisibility }) => {
    return (
        <div className={styles.DrinkDetails}>
            <img className={styles.arrow} src="https://img.icons8.com/flat-round/256/wide-left-arrow.png" onClick={() => {
                setDetailsVisible({ visible: false, data: {} })
                setCatVisibility(true)
            }} />
            <img className={styles.img} src={data.strDrinkThumb} alt="" />
            <div className={styles.texts}>
                <div className={styles.titles}>
                    <h2>{data.strDrink}</h2>
                    <h3>Categoria:</h3>
                    <p>{data.strCategory},</p>
                    <p>&nbsp;{data.strAlcoholic}</p>
                </div>
                <h3>Ingredienti:</h3>
                <div className={styles.desc}>
                    {data.ingredients.map((ingredient) => <p key={ingredient}>&nbsp;{`${ingredient}`}&nbsp;</p>)}
                </div>
                <div className={styles.istructions}>
                    <h3>Procedimento:</h3>
                    <p>{data.strInstructionsIT}</p>
                </div>
            </div>
        </div>
    )
}

export default DrinkDetails