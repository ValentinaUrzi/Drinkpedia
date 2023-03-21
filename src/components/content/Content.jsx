import './index.scss'
import { useState, useEffect } from 'react'
import { GET } from '../../utils/http'
import Card from '../card'
import DrinkDetails from '../drinkDetails'

const Content = ({ drinkData, setDrinkData, category }) => {

    const [drinkList, setDrinkList] = useState([])
    const [isDetailsVisible, setDetailsVisible] = useState({ visible: false, data: {} })

    useEffect(() => {
        GET("search.php?f=m").then(({ drinks }) => {
            const ingredients = drinks.map(drink => {

                let ingredientsArray = []

                for (let i = 0; i < 15; i++) {
                    if (drink["strIngredient" + i]) {
                        ingredientsArray.push(drink["strIngredient" + i])
                    }
                }

                drink.ingredients = ingredientsArray
                return drink
            })
            setDrinkList(ingredients)
            setDrinkData(ingredients)
        })
    }, [])

    useEffect(() => {
        setDrinkList(category != "" ? drinkData.filter(drink => drink.strCategory === category) : drinkData)
    }, [category])

    return (
        <div className="Content">
            {isDetailsVisible.visible ? <DrinkDetails setDetailsVisible={setDetailsVisible} data={isDetailsVisible.data} /> :
                drinkList.map((drink) => <Card setDetailsVisible={setDetailsVisible} data={drink} key={drink.idDrink} />)}
        </div>
    )
}

export default Content