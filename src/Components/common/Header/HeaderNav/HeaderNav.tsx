import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
    Image,
} from 'react-bootstrap';
import { HeaderNavStyle } from './HeaderNavStyle';

function HeaderNav() {
    return (
        <HeaderNavStyle>
            <div className='header-nav-wapper'>
                <Navbar bg="light" expand="lg" className="mb-3">
                    <Container>
                        <Navbar.Brand href="#" style={{width: '140px'} }>
                            <Image
                                src="https://rozanahimachal.com/uploads/logo/logo_630d1fc4eaa744-67986888-71324831.png"
                                fluid
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">होम</Nav.Link>
                                    <NavDropdown
                                        title="हिमाचल प्रदेश"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action2">देश</Nav.Link>
                                    <Nav.Link href="#action2">दुनिया</Nav.Link>
                                    <Nav.Link href="#action2">राजनीति</Nav.Link>
                                    <Nav.Link href="#action2">धर्म/ज्योतिष</Nav.Link>
                                    <Nav.Link href="#action2">खेल</Nav.Link>
                                    <Nav.Link href="#action2">मनोरंजन</Nav.Link>
                                    <Nav.Link href="#action2">नौकरियां</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    {/* <Button variant="outline-success">Search</Button> */}
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </HeaderNavStyle>
    );
}

export default HeaderNav;