import '../styles/Header.css'
import logo from '../assets/logo.webp'

import NavBar from './NavBar'

const Header = () => {
    return (
        <>
            <header className='main'> 
                <img className='logo' src={logo} alt='logo' />
            </header>

            <NavBar />
        </>
    )
}

export default Header;