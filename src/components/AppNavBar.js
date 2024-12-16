import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavBar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" className="bg-primary navbar-dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Zuitt Movie Lib</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {user.id !== null ? (
              <>
                <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
                <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
                <Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/register" exact="true">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
