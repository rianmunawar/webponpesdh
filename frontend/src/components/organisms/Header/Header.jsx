import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CtaBtn from '../../atoms/CtaBtn/CtaBtn';
import './header.css';

function BHeader() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 py-10 navbar bg-white"
        >
          <Container fluid>
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
                  <Nav.Link href="#action2">Profil</Nav.Link>
                  <NavDropdown
                    title="Lembaga"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      RA AR-Rohmah
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      MTs Darul Hikmah
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      MAK Darul Hikmah
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#berita">Berita</Nav.Link>
                  <Nav.Link href="#kontak">Kontak</Nav.Link>
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

export default BHeader;
