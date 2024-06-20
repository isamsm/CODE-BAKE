import '../styles/Header.css'

import NavBar from './NavBar'

const Header = () => {
    return (
        <>
            <header className='main'> 
                <img className='logo' src='/assets/logo/logo.png' alt='logo' />
            </header>

            <NavBar />
        </>
    )
}

export default Header;