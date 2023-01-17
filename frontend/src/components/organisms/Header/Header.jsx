import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import CtaBtn from "../../atoms/CtaBtn/CtaBtn";
import "./header.css";

function Header() {
  const activeLink = "active";
  const normal = "";
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          as={"header"}
          bg="light"
          expand={expand}
          fixed="top"
          className="mb-4 py-10 navbar bg-white shadow-sm"
        >
          <Container>
            <Navbar.Brand as={"div"}>
              <Link to={"/"}>
                <h1> MAKDHI </h1>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to={"/"}>
                    <h1> MAKDHI </h1>
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" as={"ul"}>
                  <Nav.Link className="navlink" as={"li"}>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? activeLink : normal
                      }
                    >
                      Beranda
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link className="navlink" as={"li"}>
                    <NavLink
                      to={"/profil"}
                      className={({ isActive }) =>
                        isActive ? activeLink : normal
                      }
                    >
                      Profil
                    </NavLink>
                  </Nav.Link>
                  <NavDropdown
                    as={"li"}
                    title="Lembaga"
                    className="fw-bold"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="navlink">
                      <Link to={"/ra"}>RA Ar - Rohmah</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="navlink">
                      <Link to={"/mts"}>MTs Darul Hikmah</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="navlink">
                      <Link to={"/mak"}>MAK Darul Hikmah</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="navlink" as={"li"}>
                    <NavLink
                      to={"/blog"}
                      className={({ isActive }) =>
                        isActive ? activeLink : normal
                      }
                    >
                      Berita
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link className="navlink" as={"li"}>
                    <NavLink
                      to={"/kontak"}
                      className={({ isActive }) =>
                        isActive ? activeLink : normal
                      }
                    >
                      Kontak
                    </NavLink>
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
