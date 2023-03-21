import './index.scss'
import Bg from '../../assets/img/bg.jpg'
import Button from '../button/Button'

const Hero = ({ drinkData, category, setCategory }) => {

    const onHandleCat = (cat) => setCategory(category === cat ? "" : cat);

    return (
        <div className="Hero">
            <img className="Hero__img" src={Bg} alt="hero image" />
            <div className="Hero__categories">
                {drinkData.filter((res, i, drinks) => drinks.findIndex(item => (item.strCategory === res.strCategory)) === i)
                    .map((drink) => <Button onClick={onHandleCat} category={category} setCategory={setCategory} data={drink} key={drink.idDrink} />)}
            </div>
        </div>
    )
}

export default Hero