import Bg from '../../assets/img/bg.jpg'
import Button from '../button/Button'
import styles from './index.module.scss'

const Hero = ({ drinkData, category, setCategory, isCatVisible }) => {

    const onHandleCat = (cat) => setCategory(category === cat ? "" : cat);

    return (
        <div className={styles.Hero}>
            <img className={styles.img} src={Bg} alt="hero image" />
            {isCatVisible? <div className={styles.categories}>
                {drinkData.filter((res, i, drinks) => drinks.findIndex(item => (item.strCategory === res.strCategory)) === i)
                    .map((drink) => <Button onClick={onHandleCat} category={category} setCategory={setCategory} data={drink} key={drink.idDrink} />)}
            </div>: null}
        </div>
    )
}

export default Hero