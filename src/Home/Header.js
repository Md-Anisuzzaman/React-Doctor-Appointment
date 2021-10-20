import React from 'react';
import './Header.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../Hook/useFirebase';



const Header = () => {

    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar bg="primary" variant="dark" className="header-body" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">HelloDoctor</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Nav.Link style={{ color: 'white' }} as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} as={HashLink} to="/services#services">Services</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} as={HashLink} to="/about#about">About Us</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} as={HashLink} to="/contact#contact">Contact Us</Nav.Link> */}
                        <Nav.Link style={{ color: 'white' }} as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} as={HashLink} to="/services#services">Services</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} as={HashLink} to="/about#about">About Us</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} as={HashLink} to="/contact#contact">Contact Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} className="fs-5">Logout</Button> :
                            <Nav.Link as={Link} to="/login"><Button className="fs-5">Login</Button></Nav.Link>}
                        <Navbar.Text>
                            <span className="text-warning"> Signed in as:</span> <a href="#login">{user?.email}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;