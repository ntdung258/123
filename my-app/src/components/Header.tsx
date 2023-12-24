import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-black navbar">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="row">
            <Nav className="col-md-3" navbarScroll>
                <Nav.Link className="text-white">Home</Nav.Link>
                <Nav.Link className="text-white">Genre</Nav.Link>
                <Nav.Link className="text-white">Country</Nav.Link>
            </Nav>
            <Form className="col-md-4">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
            </Form>
            <Nav className="col-md-5" navbarScroll>
                <Nav.Link className="text-white">Movies</Nav.Link>
                <Nav.Link className="text-white">Series</Nav.Link>
                <Nav.Link className="text-white">Animation</Nav.Link>
                <Nav.Link className="text-white">Login/Singup <img src={'./image/notification.svg'} alt=''/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
