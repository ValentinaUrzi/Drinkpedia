import './index.scss'

const DrinkDetails = ({ data, setDetailsVisible, setCatVisibility }) => {
    return (
        <div className="DrinkDetails">
            <img className="arrow" src="https://img.icons8.com/flat-round/256/wide-left-arrow.png" onClick={() => {
                setDetailsVisible({ visible: false, data: {} })
                setCatVisibility(true)
            }} />
            <img className="drink__img" src={data.strDrinkThumb} alt="" />
            <div className="DrinkDetails__texts">
                <div className="DrinkDetails__titles">
                    <h2>{data.strDrink}</h2>
                    <h3>Categoria:</h3>
                    <p>{data.strCategory},</p>
                    <p>&nbsp;{data.strAlcoholic}</p>
                </div>
                <h3>Ingredienti:</h3>
                <div className="DrinkDetails__desc">
                    {data.ingredients.map((ingredient) => <p key={ingredient}>&nbsp;{`${ingredient}`}&nbsp;</p>)}
                </div>
                <div className="DrinkDetails__instructions">
                    <h3>Procedimento:</h3>
                    <p>{data.strInstructionsIT}</p>
                </div>
            </div>
        </div>
    )
}

export default DrinkDetails