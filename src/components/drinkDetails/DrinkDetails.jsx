import './index.scss'

const DrinkDetails = ({ data, setDetailsVisible }) => {
    return (
        <div className="DrinkDetails">
            <img className="arrow" src="https://img.icons8.com/flat-round/256/wide-left-arrow.png" onClick={() => setDetailsVisible({ visible: false, data: {} })}/>
            <img className="drink__img" src={data.strDrinkThumb} alt="" />
            <div className="DrinkDetails__texts">
                <div className="DrinkDetails__titles">
                    <h2>{data.strDrink}</h2>
                    <p>{data.strCategory}</p>
                    <p>{data.strAlcoholic}</p>
                </div>
                <div className="DrinkDetails__desc">
                    <p>{data.ingredients}</p>
                </div>
            </div>
        </div>
    )
}

export default DrinkDetails