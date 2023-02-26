import '../styles/Header.css'

import NavBar from './NavBar'

const Header = () => {
    return (
        <>
            <section className='main'> 
                <img className='logo' src='/assets/logo/logo.png' alt='logo' />
            </section>

            <NavBar />
        </>
    )
}

export default Header;