import './index.scss'

const Button = ({ data, onClick, category}) => {

    return (
        <button onClick={()=>onClick(data.strCategory)} className={`Button ${category === data.strCategory? "Button__active": ""}`} >{data.strCategory}</button>
    )
}
export default Button