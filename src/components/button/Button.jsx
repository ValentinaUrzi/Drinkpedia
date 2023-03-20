import './index.scss'

const Button = ({data, setDrinkData, onClick}) => {
    
    return (
        <button onClick={onClick} className='Button'>{data.strCategory}</button>
    )
}

export default Button