import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";

export default function Header() {

    return (
        <Navbar bg="dark" variant="dark" id="nav">
            <Nav className="container text-center">
                <a href="#About" className="nav-link">About</a>
                <a href="#Experience" className="nav-link">Experience</a>
                <a href="#Skills" className="nav-link">Skills</a>
                <a href="#Projects" className="nav-link">Projects</a>
                <a href="#Contact" className="nav-link">Contact</a>
            </Nav>
        </Navbar>

    )
}





