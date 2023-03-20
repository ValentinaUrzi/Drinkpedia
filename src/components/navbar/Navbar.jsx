import './index.scss'
import Logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="Navbar">
            <img className='Navbar__logo' src={Logo} alt="drinkpedia logo" />
                <ul className="Navbar__list">
                    <li>About</li>
                    <li>Contatti</li>
                    <li>Social</li>
                </ul>
        </div>
    )
}

export default Navbar