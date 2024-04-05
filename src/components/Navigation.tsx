import { FunctionComponent } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/uoft-logo-1.png";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="shadow nav-bar">
            <Container>
                <Navbar.Brand className="brand p-0" href="https://mscac.utoronto.ca/">
                    <img src={logo} style={{ height: "3.2rem" }} alt="MScAC" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://mscac.utoronto.ca/contact/">
                            <i className="fa-solid fa-phone me-2" title="Contact" /> <span className="nav-item-text">Contact</span>
                        </Nav.Link>
                        {/* <Nav.Link href="https://admissions.sgs.utoronto.ca/apply/"> <i className="fa-solid fa-pencil" /> Apply</Nav.Link> */}
                    </Nav>
                    <Button href="https://admissions.sgs.utoronto.ca/apply/" variant="outline-light">
                        <i className="fa-solid fa-pencil me-2" />
                        Apply
                    </Button>
                    {/* <Form.Check // prettier-ignore
                        type="switch"
                        id="darkmode-switch"
                        label="Dark Mode"
                        reverse
                    /> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;