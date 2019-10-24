import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {SessionContext} from '../Login';



function  NavigationBar () {
    
    const context = useContext(SessionContext)

    function handleLogout() {
      context.setUser({});
      localStorage.removeItem('cevadulceapp-user');
    }
        return(
    
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={{color: "#d39ab2"}} >Sweety</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" style={{color: "#eeb32c"}}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/login" style={{color: "#eeb32c"}}>Login</Nav.Link>
                        <NavDropdown title="Recipes" id="collasible-nav-dropdown" style={{color: "#b31d64"}}>
                            <NavDropdown.Item as={Link} to="/CakesRecipes" style={{color: "#b31d64"}}>Cakes Recipes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/CupCakesRecipes">CupCakes Recipes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/CookiesRecipes" style={{color: "#eeb32c"}} >Cookies Recipes</NavDropdown.Item>
                            <NavDropdown.Divider />
                           
                        </NavDropdown>
                    </Nav>
                        <Nav.Link as={Link} to="/signup" style={{color: "#d39ab2"}}>Sign up</Nav.Link>
                        <Nav.Link as={Link} to="/logout" style={{color: "#d39ab2"}} onClick={handleLogout}>Logout</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/mytodolist" style={{color: "#eeb32c"}}>
                        My To Do list
                        </Nav.Link>     
                </Nav>
                </Navbar.Collapse>
                    <SessionContext.Consumer>
                        { (props) => {
                            return <p>Logged in as: { props.user.username }</p> 
                                }}
                    </SessionContext.Consumer>
            </Navbar>
            
                   
        );
    }
    
    


export default NavigationBar;