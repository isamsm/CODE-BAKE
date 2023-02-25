import '../styles/NavBar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { useEffect } from 'react';

const NavBar = () => {
    useEffect(() => {
        const activePage = window.location.pathname;
        const navLinks = document.querySelectorAll('.items-navbar').forEach (link => {
            if(link.href.includes(`${activePage}`)) {
                link.classList.add('active');
            }
        })
    })
    return (
        <>
            <section className='navbar container-fluid'>
                <Nav>
                    <Row>
                        <Col>
                            <NavItem>
                                <NavLink className='items-navbar' href='/home'> Vitrine </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink className='items-navbar' href='/prices'> Tabela </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink className='items-navbar' href='/about'> Sobre </NavLink>
                            </NavItem>
                        </Col>
                        <Col>
                            <NavItem>
                                <NavLink className='items-navbar' href='/cart'> <AiOutlineShoppingCart /> </NavLink>
                            </NavItem>
                        </Col>
                    </Row>
                </Nav>
            </section>
        </>
    )
}

export default NavBar;