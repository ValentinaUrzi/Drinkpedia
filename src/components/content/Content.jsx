import './index.scss'
import { useState, useEffect } from 'react'
import { GET } from '../../utils/http'
import Card from '../card'

const Content = ({setDrinkData}) => {

    const [drinkList, setDrinkList] = useState([])

    useEffect(() => {
        GET("search.php?f=m").then(({ drinks }) => {
            setDrinkList(drinks)
            setDrinkData(drinks)
        })
    }, [])

    return (
        <div className="Content">
            {drinkList.map((drink) => <Card data={drink} key={drink.idDrink}/>)}
        </div>
    )
}

export default Content