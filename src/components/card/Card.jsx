import './index.scss'

const Card = ({ data, setDetailsVisible, setCatVisibility }) => {

    return (
        <div onClick={() => {
            setDetailsVisible({ visible: true, data })
            setCatVisibility(false)}} className="Card" >
            <div className="Card__wrapper">
                <div className="Card__text">
                    <img className="Card__img" src={data.strDrinkThumb} alt={data.strDrink} />
                    <h2>{data.strDrink}</h2>
                    <p>{data.strCategory}</p>
                    <p>{data.strAlcoholic}</p>
                </div>
            </div>
        </div >
    )
}

export default Card