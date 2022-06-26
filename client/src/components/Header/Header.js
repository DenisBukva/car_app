import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { logout } from '../../redux/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Ping</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' style={{marginLeft:'60%'}}>
            {
              userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to='/login' style={{color: 'gray'}}>
                  
                <i className='fas fa-user' style={{marginRight:'5px'}}></i>Sign In 
                  
                </Link>
              )
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header