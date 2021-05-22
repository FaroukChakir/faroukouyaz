import React from 'react'
import {Navbar, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap'

function Header_stud() {
    return (
        <header>
            <Navbar className="" bg="light" expand="lg">
                <Navbar.Brand href="#home">I-Learn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#courses"><i className="fa fa-book fa-fw" aria-hidden="true"></i>Courses</Nav.Link>
                    <NavDropdown menuAlign="right" title="Catégories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="developpement">Développement</NavDropdown.Item>
                        <NavDropdown.Item href="business">Business</NavDropdown.Item>
                        <NavDropdown.Item href="finance_compta">Finance et Comptabilité</NavDropdown.Item>
                        <NavDropdown.Item href="design">Design</NavDropdown.Item>
                        <NavDropdown.Item href="marketing">Marketing</NavDropdown.Item>
                        <NavDropdown.Item href="musique">Musique</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#new_discover"><i className=""></i>Discover New</Nav.Link>
                    <Form inline>
                        <FormControl type="text" placeholder="Rechercher" className=" mr-lg-2 fa fa-search" aria-hidden="false" />
                    </Form>
                    </Nav>
                    <Nav className="mr-auto">
                    <Nav.Link href="#help"><i className="fa fa-question-circle" aria-hidden="true"></i>Help</Nav.Link>
                    <NavDropdown menuAlign="right" title="Ouyaaz" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="last_courses">Reprendre votre dernier cours</NavDropdown.Item>
                        <NavDropdown.Item href="profil">Profil</NavDropdown.Item>
                        <NavDropdown.Item href="panier">Paramètre</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="deconnection">Deconnection</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Nav fill variant="tabs" defaultActiveKey="/developpement">
                <Nav.Item>
                    <Nav.Link href="/developpement">Développement</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Business</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Finance et Comptabilité</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Marketing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Musique</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
    )
}

export default Header_stud
