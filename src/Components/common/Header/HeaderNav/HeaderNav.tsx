import React, { useState } from 'react';
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from 'react-bootstrap';
import { HeaderNavStyle } from './HeaderNavStyle';
import { Icon } from '@iconify/react';

function HeaderNav() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <HeaderNavStyle>
            <div className='header-nav-wapper'>
                <Navbar expand="lg" className="">
                    <Container>
                        <div className='offcanvas-wapper'>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <span onClick={handleShow} className="me-2">
                                <Icon icon="gg:menu-grid-o" />
                            </span>
                            <Nav.Link href="#action1">होम</Nav.Link>
                            <Nav.Link href="#action1">हिमाचल प्रदेश</Nav.Link>
                            <Nav.Link href="#action2">देश</Nav.Link>
                            <Nav.Link href="#action2">दुनिया</Nav.Link>
                            <Nav.Link href="#action2">राजनीति</Nav.Link>
                            <Nav.Link href="#action2">धर्म/ज्योतिष</Nav.Link>
                            <Nav.Link href="#action2">राजनीति</Nav.Link>
                            <Nav.Link href="#action2">धर्म/ज्योतिष</Nav.Link>
                            <Nav.Link href="#action2">राजनीति</Nav.Link>
                            <Nav.Link href="#action2">धर्म/ज्योतिष</Nav.Link>
                            <Nav.Link href="#action2">राजनीति</Nav.Link>
                            <Nav.Link href="#action2">धर्म/ज्योतिष</Nav.Link>
                        </Nav>
                        <div className='icon-wapper d-flex'>
                            <div className='menu-icon'> <Icon icon="clarity:notification-solid-badged" /> </div>
                            <span className='min-border'></span> 
                            <div className='menu-icon'> <Icon icon="wpf:search" /> </div>
                        </div>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Container>
                </Navbar>
            </div>
        </HeaderNavStyle>
    );
}

export default HeaderNav;