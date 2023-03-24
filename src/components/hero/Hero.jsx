import Bg from '../../assets/img/bg.jpg'
import Button from '../button/Button'
import styled from "styled-components"

const HeroContainer = styled.div`
`

const Categories = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const HeroImg = styled.img`
width: 100%;
height: 500px;
opacity: 0.90;
object-fit: cover;
`




const Hero = ({ drinkData, category, setCategory, isCatVisible }) => {

    const onHandleCat = (cat) => setCategory(category === cat ? "" : cat);

    return (
        <HeroContainer>
            <HeroImg src={Bg} alt="hero image" />
            {isCatVisible ? <Categories>
                {drinkData.filter((res, i, drinks) => drinks.findIndex(item => (item.strCategory === res.strCategory)) === i)
                    .map((drink) => <Button onClick={onHandleCat} category={category} setCategory={setCategory} data={drink} key={drink.idDrink} />)}
            </Categories> : null}
        </HeroContainer>
    )
}

export default Hero