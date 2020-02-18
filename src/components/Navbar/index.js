import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";

export default function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand to="/">Brandon Fall</Navbar.Brand>
            <Nav className="ml-auto">
                <Link  to="/" className={ window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Link>
                <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
            </Nav>
        </Navbar>

    )
}





