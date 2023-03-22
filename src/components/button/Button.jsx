import './index.scss'

// l'ho lasciato globale in quanto il bottone 
// potrebbe essere usato più volte nell'app

const Button = ({ data, onClick, category}) => {

    return (
        <button onClick={()=>onClick(data.strCategory)} className={`Button ${category === data.strCategory? "Button__active": ""}`} >{data.strCategory}</button>
    )
}
export default Button