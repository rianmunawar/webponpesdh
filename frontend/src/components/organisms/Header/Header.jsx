import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import CtaBtn from "../../atoms/CtaBtn/CtaBtn";
import logo from "../../../assets/img/logo/logo-pp.png";
import "./header.css";

function Header() {
  const activeLink = "active";
  const normal = "";
  const location = useLocation();
  const { pathname } = location;
  const urlPath = pathname.split("/");
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
            <Navbar.Brand
              as={"div"}
              className={urlPath[1] === "ppdb" && "w-50"}
            >
              {urlPath[1] !== "ppdb" ? (
                <Link to={"/"}>
                  <img src={logo} alt="logo ponpes darul hikmah" />
                </Link>
              ) : (
                <Link to={"/ppdb"}>
                  <img src={logo} alt="logo ponpes darul hikmah" />
                </Link>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {urlPath[1] !== "ppdb" ? (
                    <Link to={"/"}>
                      <h1>Darul Hikmah</h1>
                    </Link>
                  ) : (
                    <Link to={"/ppdb"}>
                      <h1>Darul Hikmah</h1>
                    </Link>
                  )}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {urlPath[1] !== "ppdb" ? (
                  <Nav
                    className="justify-content-end align-items-center"
                    as={"ul"}
                  >
                    <Nav.Link as={"li"}>
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Beranda
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link as={"li"}>
                      <NavLink
                        to={"/profil"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Profil
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link as={"li"}>
                      <NavLink
                        to={"/kesantrian"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Kesantrian
                      </NavLink>
                    </Nav.Link>
                    <NavDropdown
                      as={"li"}
                      title="Lembaga"
                      className="fw-bold"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Link to={"/ra"}>RA Ar - Rohmah</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={"/mts"}>MTs Darul Hikmah</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to={"/mak"}>MAK Darul Hikmah</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={"li"}>
                      <NavLink
                        to={"/blog"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Berita
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link as={"li"}>
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
                      className="header__btn ml-20 d-block"
                      classChild="e-btn"
                      label="PPDB"
                      link="/ppdb"
                    />
                  </Nav>
                ) : (
                  <Nav
                    className={
                      urlPath[1] === "ppdb" &&
                      "justify-content-end align-items-center w-100"
                    }
                    as={"ul"}
                  >
                    <Nav.Link as={"li"}>
                      <HashLink
                        to={"/ppdb#profil"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Profil
                      </HashLink>
                    </Nav.Link>
                    <Nav.Link as={"li"}>
                      <HashLink
                        to={"/ppdb#informasi"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Informasi
                      </HashLink>
                    </Nav.Link>
                    <Nav.Link as={"li"}>
                      <HashLink
                        to={"/ppdb#fasilitas"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Fasilitas
                      </HashLink>
                    </Nav.Link>
                    <Nav.Link as={"li"}>
                      <HashLink
                        to={"/ppdb#kontak"}
                        className={({ isActive }) =>
                          isActive ? activeLink : normal
                        }
                      >
                        Kontak
                      </HashLink>
                    </Nav.Link>
                    <CtaBtn
                      className="header__btn ml-20 d-block"
                      classChild="e-btn"
                      label="daftar"
                      link="/ppdb/formulir-pendaftaran"
                    />
                  </Nav>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
