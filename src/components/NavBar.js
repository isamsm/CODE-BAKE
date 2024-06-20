import '../styles/NavBar.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [activePage, setActivePage] = useState('/');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  return (
    <>
      <navbar className='navbar container-fluid'>
        <Nav>
          <Row>
            <Col>
              <NavItem>
                <NavLink
                  className={`items-navbar ${activePage === '/' ? 'active' : ''}`}
                  href='/'
                >
                  Vitrine
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={`items-navbar ${activePage === '/prices' ? 'active' : ''}`}
                  href='/prices'
                >
                  Tabela
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={`items-navbar ${activePage === '/about' ? 'active' : ''}`}
                  href='/about'
                >
                  Sobre
                </NavLink>
              </NavItem>
            </Col>
            <Col>
              <NavItem>
                <NavLink
                  className={`items-navbar ${activePage === '/cart' ? 'active' : ''}`}
                  href='/cart'
                >
                  <AiOutlineShoppingCart />
                </NavLink>
              </NavItem>
            </Col>
          </Row>
        </Nav>
      </navbar>
    </>
  );
};

export default NavBar;
