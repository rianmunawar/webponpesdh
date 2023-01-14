import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CtaBtn from '../../atoms/CtaBtn/CtaBtn';
import './header.css';

function Header() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          fixed="top"
          className="mb-4 py-10 navbar bg-white shadow-sm"
        >
          <Container>
            <Navbar.Brand href="#">MAKDH</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MAKDH
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 main-menu">
                  <Nav.Link href="#action1" className="navlink">
                    Beranda
                  </Nav.Link>
                  <Nav.Link href="#action2" className="navlink">
                    Profil
                  </Nav.Link>
                  <NavDropdown
                    title="Lembaga"
                    className="navlink text-dark"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3" className="navlink">
                      RA AR-Rohmah
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className="navlink">
                      MTs Darul Hikmah
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className="navlink">
                      MAK Darul Hikmah
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#berita" className="navlink">
                    Berita
                  </Nav.Link>
                  <Nav.Link href="#kontak" className="navlink">
                    Kontak
                  </Nav.Link>
                  <CtaBtn
                    className="header__btn ml-20 d-none d-sm-block"
                    classChild="e-btn"
                    label="Info PSB"
                    link="/psb"
                  />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
