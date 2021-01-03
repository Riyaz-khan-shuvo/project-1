import React, { } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { animateScroll, Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png'
import { Route } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';




const Menu = () => {



    function scrollToTop() {
        animateScroll.scrollToTop();
    }
    return (
        <div className="sticky-top" style={{ fontFamily: 'Ubuntu', }}>
            <Navbar bg="dark" collapseOnSelect expand="lg" >

                <Navbar.Brand href="#home" className="ml-md-5">

                    <img style={{ width: '100px', color: 'white', filter: 'contrast(0%) brightness(500%)' }}
                        src={logo}

                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ fontSize: "25px", color: "black", background: "#fff" }} className="ml-auto" > <FontAwesomeIcon icon={faBars} /> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav style={{ textAlign: "center" }} className="ml-auto">

                        <Nav.Link
                            style={{ color: '#fff', fontWeight: '600' }}
                            className="nav-link pl-4 pr-4"
                        >
                            <Link activeClass="active" to="/home" spy={true} smooth={true} duration={1000} onClick={scrollToTop} >Home</Link>
                        </Nav.Link>


                        <Nav.Link to="/" style={{ color: '#fff', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link activeClass="active" to="about-us" spy={true} smooth={true} duration={1000}>About Us</Link>
                        </Nav.Link>

                        <Nav.Link to="/" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link activeClass="active" to="event" spy={true} smooth={true} duration={1000}>Event</Link>
                        </Nav.Link>
                        <Nav.Link to="/" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                            <Link activeClass="active" to="our-mission" spy={true} smooth={true} duration={1000}>Our Mission</Link>
                        </Nav.Link>
                        <Nav.Link to="/login" style={{ color: 'white', fontWeight: '600' }} className="nav-link pl-4 pr-4">
                        <NavLink to="/login" style={{color:"#fff"}}>Login</NavLink>
                        {/* this is use from react-router has link */}
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;