import Link from "next/link"
import { useState } from "react"
import { Container, Nav, Navbar, NavItem, NavLink } from "react-bootstrap"
import styles from "../../styles/modules/nav.module.css"

const NavGlobal = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="p-4" expand="lg">
                <Container fluid>
                    <Navbar.Collapse id="basic-navbar-nav" style={{fontSize: '1.2rem'}}>
                        <Nav
                        onSelect={() => setShowMenu(!showMenu)}
                        className={styles.nav}
                        >
                            <NavItem>
                                <NavLink className={styles.navItem} as={Link} href="/home">Home</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className={styles.navItem} as={Link} href="/projects">Servicios</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className={styles.navItem} as={Link} href="/about">Cuotas</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className={styles.navItem} as={Link} href="contact">Contacto</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavGlobal