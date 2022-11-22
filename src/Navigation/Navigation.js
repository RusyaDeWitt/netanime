import { Navbar , Nav , NavDropdown , NavItem , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
      return(
        <div>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm">
        <Navbar.Brand><h2>Anime TV</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="links">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link href="/">
                Anime
              </Nav.Link>
              <Nav.Link href="/">
                Top 10
              </Nav.Link>
              <Nav.Link href="/">
                Genres
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
      )
    }

export default Navigation;
